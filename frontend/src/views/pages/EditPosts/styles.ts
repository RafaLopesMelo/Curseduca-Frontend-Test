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