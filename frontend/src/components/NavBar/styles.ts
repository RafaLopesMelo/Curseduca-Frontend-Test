import styled from 'styled-components'; 

export const Wrapper = styled.div`
  grid-area: navbar;

  display: flex;
  align-items: center;

  padding: 0 24px;
  background-color: #083b8a;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 20%;
  height: 60%;

  color: white;
  font-size: 1.4rem;

  img {
    height: 100%;
  }
`