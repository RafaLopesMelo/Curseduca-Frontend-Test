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
`

export const Options = styled.div`
  display: flex;
  justify-content: center;

  font-weight: bold;

  li {
    width: 16vw;
    font-size: 2.5rem;
    padding-left: 8%;
    margin: 16% 0;
  }

  svg {
    font-size: 2rem;
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
`
