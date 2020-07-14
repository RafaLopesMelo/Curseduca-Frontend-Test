import styled from 'styled-components'; 

export const Wrapper = styled.div`
  grid-area: navbar;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;
  background-color: #083b8a;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 20%;
  height: 60%;

  color: #fff;
  font-size: 1.4rem;

  img {
    height: 100%;
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 12%;
  margin-right: 4%;

  font-size: 3.6rem;

  a {
    color: #fff;
  }

  a:hover {
    color: #FF9C00;
    transform: scale(1.1);
  }
`