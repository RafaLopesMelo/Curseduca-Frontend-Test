import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 70vw;
  grid-template-rows: 12vh auto 8vh;
  grid-template-areas:  'navbar navbar'
                        'aside main'
                        'footer footer';

  min-height: 100vh;

  @media(max-width: 1200px) {
    display: flex;
    flex-direction: column;
  } 
`

export const FeedWrapper = styled.div`
  grid-area: main;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8% 8%;
`

export const AddPost = styled.div`

  width: 80%;

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