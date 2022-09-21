import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button } from "./general/Button";
import { Flex } from "./general/Flex";
import { Input } from "./general/Input";
import { Textarea } from "./general/Textarea";
import { Title } from "./general/Title";

const StyledForm = styled.form`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

const StyledInput = styled(Input)`
  height: 50px;
`;

const StyledFormTextarea = styled(Textarea)`
  height: 30vh;
`;

export const AddPostForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    validationSchema: yup.object().shape({
      title: yup.string().required("Title should not be empty"),
      body: yup.string().required("Enter some info about that post"),
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
        await fetch("https://bloggy-api.herokuapp.com/posts", requestOptions);
      };
      addPostRequest();
      resetForm();
      alert("Post added successfully. Click on title to return to the main page");
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
          onChange={formik.handleChange}
          type="text"
          name="title"
          value={formik.values.title}
          placeholder="Title"
        />
        {formik.errors && <span>{formik.errors.title}</span>}
        <StyledFormTextarea
          margin="30px 0 0 0"
          padding="15px"
          onChange={formik.handleChange}
          type="text"
          name="body"
          value={formik.values.body}
          placeholder="Enter some info about that post"
        />
        {formik.errors && <span>{formik.errors.body}</span>}
        <Button className="post__submit" type="submit" fontSize="30px" margin="30px 0 0 0">
          Confirm
        </Button>
      </Flex>
    </StyledForm>
  );
};
