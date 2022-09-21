import React from "react";
import styled from "styled-components";
import { Flex } from "./Flex";
import { StyledButton } from "./AddPostForm";

const StyledPostTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
`;

const StyledPostBody = styled.div`
  font-size: 20px;
`;

const StyledPostButton = styled(StyledButton)`
  width: 30%;
`;

export const Post = ({ post }) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  const deletePost = async () => {
    await fetch(`https://bloggy-api.herokuapp.com/posts/${post.id}`, requestOptions);
  };

  return (
    <Flex background="white" margin="20px 0" padding="10px 20px" radius="8px" direction="column">
      <StyledPostTitle>{post.title}</StyledPostTitle>
      <StyledPostBody>{post.body}</StyledPostBody>
      <Flex justify="space-between">
        <StyledPostButton>update</StyledPostButton>
        <StyledPostButton>add comment</StyledPostButton>
        <StyledPostButton onClick={deletePost}>delete</StyledPostButton>
      </Flex>
    </Flex>
  );
};
