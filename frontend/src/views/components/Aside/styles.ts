import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-area: aside;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8% 0;

  img {
    width: 50%;
    margin: 4% 0;
  }

  @media(max-width: 1200px) {
    flex-direction: row;
  }
  @media(max-width: 900px) {
    flex-direction: column;
  } 
`

export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  font-weight: bold;

  width: 100%;

  ul {
    width: 100%;
    text-indent: 30%;
  }

  li {
    font-size: 3.7rem;
    margin-top: 4vh;
  }

  svg {
    font-size: 2.8rem;
    margin-right: 4%;
  }

  a {
    color: var(--black);
  }

  .active {
    color: var(--secondary);
  }

  a:hover {
    color: var(--secondary);
    filter: brightness(1.2);
  }

  @media(max-width: 1200px) {
    ul {
      text-indent: 10%;
    }
    li {
      font-size: 5rem;
    }
    svg {
      font-size: 5rem;
    }
  } 
  
  @media(max-width: 900px) {
    ul {
      text-indent: 0;
    }
    text-align: center;
  } 
`
