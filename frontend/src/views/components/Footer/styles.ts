import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-area: footer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 16vh;
  padding: 4%;

  background-color: var(--primary);
  color: var(--white);

  h1 {
    font-weight: normal;
  }
  
`;

export const SocialMediasWrapper = styled.div`
  font-size: 3rem;

  svg {
    margin: 0 1vh;

    color: var(--white);
  }

  svg:hover {
    color: var(--secondary);
    transform: scale(1.2);
  }
`