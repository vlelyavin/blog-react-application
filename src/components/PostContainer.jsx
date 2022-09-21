import React from "react";
import { Container } from "./general/Container";
import { Flex } from "./general/Flex";
import { Posts } from "./Posts";
import { AddPostButton } from "./AddPostButton";
import { Link } from "react-router-dom";

export const PostContainer = ({ posts, setPosts }) => {
  return (
    <Flex justify="center" direction="column" align="center">
      <Container>
        <Posts posts={posts} setPosts={setPosts} />
      </Container>
      <Link to="/blog-react-application/form">
        <AddPostButton>+</AddPostButton>
      </Link>
    </Flex>
  );
};
