import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,400..900;1,400..900&display=swap');

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
    font-family: "Schibsted Grotesk", sans-serif;
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