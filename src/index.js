import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { postStore } from "./components/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const theme = {
  colors: {
    primary: "white",
    secondary: "black",
  },
  fontSize: "20px",
  borderRadius: "8px",
  fontFamily: "Montserrat",
};

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: ${theme.fontFamily};
};
body {
  background: #e8e8e8;
}`;

const root = ReactDOM.createRoot(document.getElementById("application"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={postStore}>
        <Global />
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);
