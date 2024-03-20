import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
		--color-black: #090b16;
		--color-white: #e6edf3;
		--color-gray: #b3b3b3;

		--text-sm: 16px;
		--text-md: 24px;
		--text-lg: 32px;

    --layout-width: 1200px;
	}

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
    background-color: var(--color-black);
    color: var(--color-white);
    font-weight: 400;
    font-family: "Schibsted Grotesk", sans-serif;
    font-size: var(--text-sm);
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