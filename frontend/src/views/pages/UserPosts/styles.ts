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

export const FeedWrapper = styled.div`
  grid-area: main;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8% 8%;
`