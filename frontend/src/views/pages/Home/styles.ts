import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  min-height: 100vh;
`

export const MainWrapper = styled.div`
  display: flex;
`;

export const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 8vh 0;
`

export const AddPost = styled.div`
  margin-bottom: 8vh;
  width: 50%;

  font-size: 2.1rem;
  
  svg {
    font-size: 5rem;
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