import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto';
  }

  #root {
    min-height: 100vh;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyles;