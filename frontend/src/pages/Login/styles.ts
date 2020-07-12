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
  padding: 4% 0 0 4%;

  h1 {
    font-size: 1.8rem
  }

  img {
    margin-right: 2%;
    width: 8%;
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 20vw;
  height: 40%;

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

export const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
    width: 20%;
    height: 16%;

    margin-left: auto;

    background-color: #083b8a;
    border: 0;
    border-radius: 8px;

    cursor: pointer;

  &:hover {
    filter: brightness(98%);
    transform: scale(0.98);
  }

  svg {
    color: #fff;

    font-size: 3rem;
  }
`

export const Main = styled.main`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 70vw;
  height: 100vh;

  background-color: #083b8a;

  img {
    width: 70%;
  }
`