import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-area: main;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 8% 8%;
`

export const AddPost = styled.div`
  margin-bottom: 6vh;

  width: 80%;

  font-size: 1.4rem;
  
  svg {
    font-size: 3.8rem;
    transition-duration: 1s;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: var(--black);

    transition-duration: 1s;
  }

  a:hover, a:hover svg {
    color: var(--secondary);
    transform: scale(1.05);
  }

  a:hover svg {
    transform: rotate(225deg);
  }
`

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2%;

  width: 80%;

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
    font-size: 1.2rem;
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
    font-size: 1.4rem
  }

  a:hover {
    color: var(--secondary);
  }
`

export const Text = styled.div`
  padding: 4% 0 4% 8%;

  h2 {
    font-size: 2.2rem;
  }

  div {
    margin-top: 2%;
    font-size: 1.4rem;
  }
`

export const Options = styled.div`
  display: flex;

  font-size: 2rem;
  margin-left: auto;

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
    color: rgb(220, 53, 69);
  };
`
