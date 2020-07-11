import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;

  width: 30vw;
  height: 100vh;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  

  h1 {

  }
`

export const Logo = styled.img`
  margin: 4%;

  width: 8%;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 20vw;
  height: 28%;

  margin: auto;

  h1 {
    font-size: 4rem;
  }

  input {
    height: 5vh;

    font-size: 1.4rem;
    font-weight: bold;
    text-indent: 5%;

    border: 1.5pt solid black;
    border-radius: 10px;

    outline: transparent;
  }
`;

export const Main = styled.main`
  width: 70vw;
  height: 100vh;

  background-color: #083b8a;
`