import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 72vw;
  grid-template-rows: 12vh auto 8vh;
  grid-template-areas:  'navbar navbar'
                        'aside main'
                        'footer footer';

  min-height: 100vh;
`

export const Main = styled.div`
  grid-area: main;
`

export const Aside = styled.div`
  grid-area: aside;
`