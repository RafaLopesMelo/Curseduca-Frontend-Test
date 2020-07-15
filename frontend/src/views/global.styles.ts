import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto';
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  :root {
    --primary: #083b8a;
    --secondary: #FF9C00;
    --black: #000;
    --white: #fff;
  }
`

export default GlobalStyles;