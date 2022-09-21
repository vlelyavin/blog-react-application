export const actionAddPost = (post) => ({
  type: "ADD_POST",
  payload: post,
});

export const actionDeletePost = (post) => ({
  type: "DELETE_POST",
  payload: post,
});
