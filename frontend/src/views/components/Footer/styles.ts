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
    font-size: 2.8rem;
  }

  @media(max-width: 800px) {
    h1 {
      font-weight: normal;
      font-size: 2.1rem;
    }

    svg {
      font-size: 2.8rem;
    }
  }

  @media(max-width: 480px) {
    h1 {
      font-weight: normal;
      font-size: 2.8rem;
    }

    svg {
      font-size: 3.7rem;
    }
  }
`;

export const SocialMediasWrapper = styled.div`
  font-size: 5rem;

  svg {
    margin: 0 1vh;

    color: var(--white);
  }

  svg:hover {
    color: var(--secondary);
    transform: scale(1.2);
  }
`