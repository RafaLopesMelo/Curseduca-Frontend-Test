import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  max-width: 100vw;

  @media(max-width: 1080px) {
    flex-direction: column-reverse;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;

  min-width: 30vw;
  height: 100vh;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4% 0 0 4%;

  h1 {
    font-size: 2.8rem
  }

  img {
    margin-right: 2%;
    width: 8%;
  }
`

export const LoginForm = styled.form`
  width: 80%;

  margin: auto;

  h1 {
    font-size: 6.7rem;
    margin-bottom: 2vh;
  }

  h2 {
    font-size: 2.1rem;
    font-weight: normal;
    text-indent: 2%;
  }

  h3 {
    font-size: 2.8rem;
    margin: 2vh 0;
  }

  label input {
    width: 100%;
    height: 5vh;

    font-size: 2.1rem;
    font-weight: bold;
    text-indent: 2%;
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 8vh;

  background-color: rgba(220, 53, 69, 0.6);
  border: 1pt solid var(--danger);
  border-radius: 8px;

  transition-duration: 1s;

  h2 {
    width: 100%;
  }
`

export const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
    display: block;

    width: 20%;
    height: 6vh;

    margin: 4% 0 0 auto;
    
    background-color: var(--primary);
    color: var(--white);

    border: 0;
    border-radius: 8px;

    cursor: pointer;

  &:hover {
    filter: brightness(98%);
    transform: scale(0.98);
    color: var(--secondary);
  }

  svg {
    font-size: 3.7rem;
  }
`

export const Main = styled.main`
  display: flex;

  align-items: center;
  justify-content: center;

  min-width: 70vw;
  height: 100vh;

  background-color: var(--primary);

  img {
    width: 70%;
    height: 90%;
  }
`