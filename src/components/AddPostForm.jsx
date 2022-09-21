import React from "react";
import styled, { ThemeConsumer } from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";
import { actionAddPost } from "../actions/PostActions";
import { useDispatch } from "react-redux";
import { Flex } from "./Flex";
import { Title } from "./Title";

const StyledForm = styled.form`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  width: 100%;
  font-family: ${(props) => props.theme.fontFamily};
  height: 50px;
  font-size: ${(props) => props.theme.fontSize};
  border: none;
  padding: ${(props) => props.padding || "0"};
  border-radius: ${(props) => props.theme.borderRadius};
  &:focus {
    outline: none;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 30vh;
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
  border-radius: ${(props) => props.theme.borderRadius};
  resize: none;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  color: ${(props) => props.background || props.theme.colors.primary};
  padding: 10px 20px;
  margin: ${(props) => props.margin || "0"};
  font-size: ${(props) => props.fontSize || props.theme.fontSize};
  border-radius: ${(props) => props.borderRadius || props.theme.borderRadius};
  text-transform: capitalize;
  border: none;
  background: ${(props) => props.background || props.theme.colors.secondary};
  &:focus {
    outline: none;
  }
`;

export const AddPostForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    validationSchema: yup.object().shape({
      title: yup.string().required("Title should not be empty"),
      body: yup.string().required("I need some info about that post"),
    }),
    onSubmit: (values, { resetForm }) => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        id: Date.now(),
        title: formik.values.title,
        body: formik.values.body,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const addPostRequest = async () => {
        const request = await fetch("https://bloggy-api.herokuapp.com/posts", requestOptions);
        const response = await request.json();
        console.log(response);
      };
      addPostRequest();
      dispatch(
        actionAddPost({
          id: Date.now(),
          title: formik.values.title,
          body: formik.values.body,
        })
      );
      resetForm();
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Flex justify="center" align="center" direction="column">
        <Title fontSize="30px" padding="15px 30px" borderRadius="10px" margin="0 0 30px 0">
          Add Post
        </Title>
        <StyledInput
          padding="0 15px"
          margin="0 0 20px 0"
          onChange={formik.handleChange}
          type="text"
          name="title"
          value={formik.values.title}
          placeholder="Title"
        />
        {formik.errors && <span className="post__errors">{formik.errors.title}</span>}
        <StyledTextarea
          margin="30px 0 0 0"
          padding="15px"
          onChange={formik.handleChange}
          type="text"
          name="body"
          value={formik.values.body}
          placeholder="I need some info about that post"
        />
        {formik.errors && <span className="post__errors">{formik.errors.body}</span>}
        <StyledButton className="post__submit" type="submit" fontSize="30px" margin="30px 0 0 0">
          Confirm
        </StyledButton>
      </Flex>
    </StyledForm>
  );
};
