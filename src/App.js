import { Title } from "./components/Title";
import { Flex } from "./components/Flex";
import styled from "styled-components";
import { AddPostForm } from "./components/AddPostForm";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { PostContainer } from "./components/PostContainer";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const App = () => {
  const [posts, setPosts] = useState([]);

  return (
    <AppWrapper>
      <Flex justify="center" margin="50px 0 30px">
        <Title padding="20px 50px" borderRadius="10px" fontSize="40px">
          Blog React application
        </Title>
      </Flex>
      <Routes>
        <Route path="/blog-react-application/" element={<PostContainer posts={posts} setPosts={setPosts} />} />
        <Route path="/blog-react-application/form" element={<AddPostForm posts={posts} setPosts={setPosts} />} />
      </Routes>
    </AppWrapper>
  );
};
