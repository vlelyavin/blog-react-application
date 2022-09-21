export const PostReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST": {
      console.log("ADD_ACTIVE");
      return [...state, action.payload];
    }
    case "DELETE_POST": {
      console.log("DELETE_ACTIVE");
      return [...state].filter((post) => post.id !== action.payload);
    }
    default:
  }
  return state;
};
