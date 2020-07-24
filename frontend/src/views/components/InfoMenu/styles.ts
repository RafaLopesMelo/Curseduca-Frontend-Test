import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 8vh 0;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.01);

    border-radius: 12px;

    width: 400px;
    margin-right: 40px;

    white-space: nowrap;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 90%;

      > h1 {
        font-size: 24px;
      }

      p {
        font-size: 20px;
        cursor: pointer;

        &:hover {
          color: var(--secondary);
        }
      }
    }
  }

  > div + div {
    margin-top: 8vh;
  }
`;

export const MostPopularTopics = styled.div`
  padding-top: 20px;

  > ul {
    font-size: 18px;
    width: 100%;

    li:first-child {
      margin-top: 2vh;
    }

    > li {
      border-top: 1pt solid rgba(0, 0, 0, 0.04);
      padding-top: 2vh;

      text-indent: 5%;
      cursor: pointer;

      &:hover strong {
        color: var(--secondary);
      }
    }

    > li + li {
      margin: 2vh 0;
    }

    > li strong {
      font-size: 22px; 
    }
  }
`;

export const MostPopularUsers = styled.div`
  padding: 20px 0;
  border-radius: 12px;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    margin: 2vh 20px 0 20px;
  
    > li div {
      margin: 10px 20px;

      width: 60px;
      height: 60px;

      > img {
        border-radius: 50%;

        width: 60px;
        height: 60px;

        cursor: pointer;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;