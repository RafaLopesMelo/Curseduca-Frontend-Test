import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-area: main;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  padding: 2%;

  background-color: rgba(0, 0, 0, 0.01);

  &:first-child {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  &:last-child {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  &:not(:first-child) {
    border-top: 2pt solid rgba(0, 0, 0, 0.04);
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 2.1rem;
  }
`

export const User = styled.div`
  display: flex;
  align-items: center;

  max-width: 40%;

  margin-bottom: auto;

  img {
    width: 20%;
    height: 25%;
  }

  a {
    color: var(--black);

    font-weight: bold;
    font-size: 2.8rem
  }

  a:hover {
    color: var(--secondary);
  }
`

export const Text = styled.div`
  padding: 4% 0 4% 8%;

  max-width: 80%;

  h2 {
    font-size: 5rem;
  }

  div {
    margin-top: 2%;
    font-size: 2.8rem;
  }
`

export const Options = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;

  font-size: 2.8rem;

  svg {
    margin-left: 2vw;
    cursor: pointer;
  }

  svg:hover {
    transform: scale(1.2)
  }

  svg:first-child {
    color: var(--primary);
  }

  svg:last-child {
    color: var(--danger);
  };
`
