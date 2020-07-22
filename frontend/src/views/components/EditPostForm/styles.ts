import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  height: 80vh;

  margin: auto;

  h1 {
    font-size: 5rem;
    margin-bottom: 10vh;
  }

  .wrapper {
    font-size: 2.8rem;
    width: 60%;
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

    background-color: var(--input-background);

    &:hover,
    &:focus {
      transition: 0.4s;
      box-shadow: 0 0 0 6px var(--input-shadow);
    }
  };

  > button {
    color: var(--white);
    background-color: var(--primary);

    font-size: 2.8rem;

    width: 160px;
    height: 6vh;
    margin-top: 12vh;

    border: none;
    border-radius: 12px;

    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      color: var(--secondary);
    }
  }
`

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 60%;

  * {
    font-size: 2.8rem;
    text-indent: 1rem;
    border-radius: 12px;
  }

  > select {
    background-color: var(--input-background);

    &:hover,
    &:focus {
      transition: 0.4s;
      box-shadow: 0 0 0 6px var(--input-shadow);
    }
  }

  > input {
    width: 40%;
    height: 6vh;
    border-radius: 10px;

    background-color: var(--input-background);

    &:hover,
    &:focus {
      transition: 0.4s;
      box-shadow: 0 0 0 6px var(--input-shadow);
    }
  }

`