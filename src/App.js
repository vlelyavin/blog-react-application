import { useState } from "react";
import styled from "styled-components";
import { Flex } from "./components/general/Flex";
import { Title } from "./components/general/Title";
import { AddPostForm } from "./components/AddPostForm";
import { PostContainer } from "./components/PostContainer";
import { Routes, Route, Link } from "react-router-dom";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const App = () => {
  const [posts, setPosts] = useState([]);

  return (
    <AppWrapper>
      <Flex justify="center" margin="50px 0 30px">
        <Link to="/blog-react-application">
          <Title padding="20px 50px" borderRadius="10px" fontSize="40px">
            Blog React application
          </Title>
        </Link>
      </Flex>
      <Routes>
        <Route path="/blog-react-application" element={<PostContainer posts={posts} setPosts={setPosts} />} />
        <Route path="/blog-react-application/form" element={<AddPostForm posts={posts} setPosts={setPosts} />} />
      </Routes>
    </AppWrapper>
  );
};
