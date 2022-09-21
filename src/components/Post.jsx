import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "./general/Button";
import { Flex } from "./general/Flex";
import { Input } from "./general/Input";
import { Textarea } from "./general/Textarea";
import { Comment } from "./Comment";
import { useFormik } from "formik";
import * as yup from "yup";

const StyledString = styled.span`
  margin: ${(props) => props.margin || "0"};
  font-size: ${(props) => props.fontSize || props.theme.fontSize};
`;

const StyledPostTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
`;

const StyledPostBody = styled.div`
  margin: ${(props) => props.margin || "0"};
  font-size: 20px;
`;

const StyledPostButton = styled(Button)`
  width: 20%;
`;

const StyledPostInput = styled(Input)`
  height: 50px;
  font-weight: 500;
`;

const StyledPostTextarea = styled(Textarea)`
  height: 20vh;
`;

export const Post = ({ post, update, isUpdated }) => {
  const [editable, isBeingEdited] = useState(false);
  const [comments, setComments] = useState([]);
  const [visible, toggleVisible] = useState(false);
  const [showComments, toggleShowComments] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: post.title,
      body: post.body,
    },
    validationSchema: yup.object().shape({
      title: yup.string().required("Must not be empty"),
      body: yup.string().required("Must not be empty"),
    }),
    onSubmit: (values, { resetForm }) => {
      const raw = JSON.stringify({
        title: formik.values.title,
        body: formik.values.body,
      });

      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      const updatePostRequest = async () => {
        await fetch(`https://bloggy-api.herokuapp.com/posts/${post.id}`, requestOptions);
      };
      isUpdated(!update);
      updatePostRequest();
      resetForm();
    },
  });

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const deletePost = async () => {
    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };
    toggleVisible(false);
    toggleShowComments(false);
    isUpdated(update);
    await fetch(`https://bloggy-api.herokuapp.com/posts/${post.id}`, requestOptions);
    isUpdated(!update);
  };

  const showCommentInput = () => {
    toggleVisible(!visible);
  };

  const addComment = async (e) => {
    e.preventDefault();
    const raw = JSON.stringify({
      postId: post.id,
      body: e.target[0].value,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    isUpdated(update);
    await fetch("https://bloggy-api.herokuapp.com/comments", requestOptions);
    e.target[0].value = "";
    isUpdated(!update);
  };

  useEffect(() => {
    const getData = async () => {
      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      const request = await fetch(`https://bloggy-api.herokuapp.com/posts/${post.id}?_embed=comments`, requestOptions);
      const result = await request.json();
      setComments(result.comments);
    };
    getData();
  }, [showComments, update]);

  const getComments = () => {
    toggleShowComments(!showComments);
  };

  const updatePost = () => {
    formik.handleSubmit();
    isBeingEdited(!editable);
  };

  return (
    <Flex background="white" margin="20px 0" padding="20px" radius="8px" direction="column">
      {editable ? (
        <form onSubmit={formik.handleSubmit}>
          <StyledPostInput
            border="2px solid black"
            fontSize="24px"
            padding="10px 15px"
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          {formik.errors && <span>{formik.errors.title}</span>}
          <StyledPostTextarea
            border="2px solid black"
            padding="10px 15px"
            margin="20px 0"
            type="text"
            name="body"
            value={formik.values.body}
            onChange={formik.handleChange}
          />
          {formik.errors && <span>{formik.errors.body}</span>}
        </form>
      ) : (
        <>
          <StyledPostTitle>{post.title}</StyledPostTitle>
          <StyledPostBody margin="10px 0 20px">{post.body}</StyledPostBody>
        </>
      )}

      <Flex justify="space-between">
        <StyledPostButton type="submit" onClick={updatePost}>
          update
        </StyledPostButton>
        <StyledPostButton onClick={showCommentInput}>add comment</StyledPostButton>
        <StyledPostButton onClick={getComments}>show comments</StyledPostButton>
        <StyledPostButton onClick={deletePost}>delete</StyledPostButton>
      </Flex>
      {visible ? (
        <form onSubmit={addComment}>
          <Flex align="center" height="40px" margin="30px 0 10px">
            <StyledPostInput border="2px solid black" padding="10px 15px" />
            <Button border="2px solid black">Add</Button>
          </Flex>
        </form>
      ) : null}
      {showComments && comments.length > 0 ? (
        <Flex margin="15px 0 0 0" direction="column">
          {comments.map((comment, idx) => (
            <Comment key={comment.id} comment={comment} idx={idx} />
          ))}
        </Flex>
      ) : null}
      {showComments && comments.length === 0 ? <StyledString margin="15px 0 0 0">No comments yet</StyledString> : null}
    </Flex>
  );
};
