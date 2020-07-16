import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-area: main;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 8% 8%;
`


export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2%;
  margin-bottom: 4vh;

  border-radius: 12px;
  border: 1px solid rgba(0,0,0,0.2);
  box-shadow: 10px 15px 10px 0px rgba(0,0,0,0.1);
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
