import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 70vw;
  grid-template-rows: 12vh auto 8vh;
  grid-template-areas:  'navbar navbar'
                        'aside main'
                        'footer footer';

  min-height: 100vh;
`

export const Main = styled.div`
  grid-area: main;
  
  display: flex;
  justify-content: center;

  padding: 8% 12%;
`

export const AddPost = styled.div`
  padding: 0 4%;

  width: 80%;
  height: 20%;

  font-size: 1.4rem;
  
  svg {
    font-size: 3.8rem;
    transition-duration: 1s;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #000;

    transition-duration: 1s;
  }

  a:hover, a:hover svg {
    color: #FF9C00;
    transform: scale(1.05);
  }

  a:hover svg {
    transform: rotate(225deg);
  }
`