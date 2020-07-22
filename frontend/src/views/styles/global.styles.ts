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
    outline: transparent;
  }

  :root {
    --primary: #083b8a;
    --secondary: #FF9C00;
    --danger: #DC3545;
    --black: #000;
    --white: #fff;
    --input-shadow: rgba(8, 59, 138, 0.1);
    --input-background: rgba(0,0,0, 0.05);
  }
`

export default GlobalStyles;