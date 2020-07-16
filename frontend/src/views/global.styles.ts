import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto';
  }

  html {
    font-size: 62.5%;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input, select, button {
    border: 1.5pt solid var(--black);

    outline: transparent;
  }

  :root {
    --primary: #083b8a;
    --secondary: #FF9C00;
    --danger: #DC3545;
    --black: #000;
    --white: #fff;
  }

  @media(max-width: 480px) {
    html {
      font-size: 25%;
    }
  }
`

export default GlobalStyles;