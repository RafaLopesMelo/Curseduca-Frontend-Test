import styled from 'styled-components';

export const Wrapper = styled.form`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto auto auto;

  width: 80%;

  padding: 8% 8%;

  h1 {
    font-size: 3rem;

    margin: 0 auto 6vh 0;
  }

  .wrapper {
    font-size: 2rem;
  };

  .toolbar {
    border: 1.5pt solid var(--black);
    border-radius: 6px;
  }

  .editor {
    overflow-y: hidden;
    min-height: 20vh;

    text-indent: 1rem;

    border: 1.5pt solid var(--black);
    border-radius: 12px;
  };
`

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  * {
    font-size: 2rem;
    text-indent: 1rem;
    border-radius: 12px;
  }

  input {
    width: 60%;
    height: 6vh;
    border-radius: 10px;
  }

`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  button {
    font-size: 2rem;

    color: var(--white);
    background-color: var(--primary);

    width: 30%;
    height: 6vh;

    margin-top: 8vh;

    border: none;
    border-radius: 12px;

    cursor: pointer;
  }

  button:hover {
    transform: scale(1.1);
    color: var(--secondary);
  }
`