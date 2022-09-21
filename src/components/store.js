import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import { PostReducer } from "../reducers/PostReducer";

export const postStore = createStore(PostReducer, composeWithDevTools());
