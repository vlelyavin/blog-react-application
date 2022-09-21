import React, { useEffect, useState } from "react";
import { Post } from "./Post";

export const Posts = ({ posts, setPosts }) => {
  const [update, isUpdated] = useState(false);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    const getPosts = async () => {
      const request = await fetch("https://bloggy-api.herokuapp.com/posts", requestOptions);
      const result = await request.json();
      setPosts(result);
    };
    getPosts();
  }, [update]);

  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post.id} update={update} isUpdated={isUpdated} />
      ))}
    </>
  );
};
