import styled from 'styled-components'; 

export const Wrapper = styled.div`
  grid-area: navbar;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;
  background-color: var(--primary);
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 40vw;
  height: 60%;

  color: var(--white);
  font-size: 1.4rem;

  img {
    height: 100%;
    margin: 2%;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 12%;
  margin-right: 4%;

  font-size: 3.6rem;

  a {
    color: var(--white);
    margin-right: 2vw;
  }

  a:hover {
    color: var(--secondary);
    transform: scale(1.1);
  }
`;