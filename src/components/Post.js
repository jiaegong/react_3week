import React from "react";
import { Grid, Image, Text, Button } from "../elements";

import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Post = (props) => {
  const dispatch = useDispatch();
  const post_id = props.id;
  const deletePost = () => {
    dispatch(postActions.deletePostFB(post_id));
  };

  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text size="large" bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text size="large">{props.insert_dt}</Text>
            {props.is_me && (
              <Button
                width="auto"
                margin="4px"
                padding="4px"
                _onClick={(e) => {
                  e.stopPropagation();
                  history.push(`/write/${props.id}`);
                }}
              >
                수정
              </Button>
            )}
            {props.is_me && (
              <Button
                width="auto"
                margin="4px"
                padding="4px"
                _onClick={(e) => {
                  e.stopPropagation();
                  deletePost();
                }}
              >
                삭제
              </Button>
            )}
          </Grid>
        </Grid>
        {props.layout === "left" ? (
          <Grid flex="start">
            <Grid>
              <Image shape="rectangle" src={props.image_url}></Image>
            </Grid>
            <Grid padding={"16px"}>
              <Text size="large">{props.contents}</Text>
            </Grid>
          </Grid>
        ) : (
          <Grid flex={props.layout === "right" ? "start" : ""}>
            <Grid padding={"16px"}>
              <Text size="large">{props.contents}</Text>
            </Grid>
            <Grid>
              <Image shape="rectangle" src={props.image_url}></Image>
            </Grid>
          </Grid>
        )}
        <Grid padding="16px">
          <Text size="large" margin="0px" bold>
            댓글 {props.comment_cnt}개
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "다람",
    user_profile:"https://1.bp.blogspot.com/-jd26syUy6_s/XqPj6jt4eWI/AAAAAAAAMnU/AJ4mxNl2BPwrGOtInwf1Kz-PqPL14dS4wCLcBGAsYHQ/s1600/%25EB%258B%25A4%25EB%259E%258C%2B%25E3%2582%25B0%25E3%2583%259F%2BPoppy.png",
  },
  image_url:
  "https://1.bp.blogspot.com/-jd26syUy6_s/XqPj6jt4eWI/AAAAAAAAMnU/AJ4mxNl2BPwrGOtInwf1Kz-PqPL14dS4wCLcBGAsYHQ/s1600/%25EB%258B%25A4%25EB%259E%258C%2B%25E3%2582%25B0%25E3%2583%259F%2BPoppy.png",
  contents: "귀엽네요!",
  comment_cnt: 10,
  insert_dt: "2022-04-01 10:00:00",
  is_me: false,
};

export default Post;
