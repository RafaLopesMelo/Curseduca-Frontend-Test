import styled from 'styled-components'; 

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 12vh;

  padding: 2vw;

  background-color: var(--primary);
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 60%;
  white-space: nowrap;

  color: var(--white);
  font-size: 2.1rem;

  img {
    height: 8.9rem;
    margin-right: 2%;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;

  font-size: 5rem;

  a {
    color: var(--white);
    margin: 1vw;
  }

  a:hover {
    color: var(--secondary);
    transform: scale(1.1);
  }
`;