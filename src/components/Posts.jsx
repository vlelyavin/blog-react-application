import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Post } from "./Post";

export const Posts = ({ posts, setPosts }) => {
  useEffect(() => {
    const getPosts = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const request = await fetch("https://bloggy-api.herokuapp.com/posts", requestOptions);
      const result = await request.json();

      setPosts(result);
    };
    getPosts();
  });

  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
};
