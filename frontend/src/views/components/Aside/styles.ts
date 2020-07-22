import styled from 'styled-components';

interface Props {
  isOpen: boolean;
}

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${props => props.isOpen === false ? '0' : 'min(100%, 25vw)'};
  height: 100vh;

  background-color: var(--input-shadow);

  position: sticky;
  top: 0;

  overflow-x: hidden;
  white-space: nowrap;
  transition: 1s;

  box-shadow: 5px 0 5px -5px rgba(8, 59, 138, 0.4);
`
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 50%;
    margin: 4vh 0;
  }

  > h2 {
    font-size: 5rem;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;

  font-weight: bold;

  margin-top: 40%;

  width: 100%;

  > ul {
    width: 100%;
    text-indent: 8%;

    > li {
      font-size: 3.7rem;

      &.active{
        border-left: 2pt solid var(--secondary);
      }

      &.active a{
        color: var(--secondary);
      }

      &:hover {
        border-left: 1pt solid var(--secondary);
      }

      &:hover a {
        color: var(--secondary);
        filter: brightness(1.2);
      }

      > a {
        color: var(--black);

        > svg {
        font-size: 2.8rem;
        margin-right: 4%;
        }
      }
    }

    > li + li{
        margin-top: 6vh;
    }
  }
`
