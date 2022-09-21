import React from "react";
import { Container } from "./Container";
import { Posts } from "./Posts";
import { AddPostButton } from "./AddPostButton";
import { Flex } from "./Flex";
import { Link } from "react-router-dom";

export const PostContainer = ({ posts, setPosts }) => {
  return (
    <Flex justify="center" direction="column" align="center">
      <Container>
        <Posts posts={posts} setPosts={setPosts} />
      </Container>
      <Link to="/form">
        <AddPostButton>+</AddPostButton>
      </Link>
    </Flex>
  );
};
