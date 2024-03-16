import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@200..900&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #root,
  main {
    width: 100%;
    height: 100%;
    font-weight: 400;
    font-family: "Source Sans 3", sans-serif;
    background-color: #090b16;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  a, button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;