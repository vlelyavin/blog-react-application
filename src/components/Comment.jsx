export const Comment = ({ comment, idx }) => {
  return <div>{`${idx + 1}) ${comment.body}`}</div>;
};
