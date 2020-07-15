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
  width: 20vw;

  margin: auto;

  h1 {
    font-size: 4rem;
    margin-bottom: 2vh;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: normal;
    text-indent: 2rem;
  }

  h3 {
    font-size: 1.6rem;
    margin: 2vh 0;
  }

  label input {
    width: 100%;
    height: 5vh;

    font-size: 1.4rem;
    font-weight: bold;
    text-indent: 4%;

    border: 1.5pt solid black;
    border-radius: 10px;

    outline: transparent;
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 8vh;

  background-color: rgba(220, 53, 69, 0.6);
  border: 1pt solid rgb(220, 53, 69);
  border-radius: 8px;

  transition-duration: 1s;
`

export const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
    display: block;

    width: 4vw;
    height: 6vh;

    margin: 4% 0 0 auto;
    

    background-color: var(--primary);
    border: 0;
    border-radius: 8px;

    cursor: pointer;

  &:hover {
    filter: brightness(98%);
    transform: scale(0.98);
  }

  svg {
    color: var(--white);

    font-size: 3rem;
  }
`

export const Main = styled.main`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 70vw;
  height: 100vh;

  background-color: var(--primary);

  img {
    width: 70%;
  }
`