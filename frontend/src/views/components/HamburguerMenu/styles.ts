import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 1vh;
  cursor: pointer;

  &.on > div > :nth-child(1) {
    transform: rotate(45deg) translate(7px, 7px);
  }

  &.on div > :nth-child(2) {
    opacity: 0;
  }

  &.on div > :nth-child(3) {
    transform: rotate(-45deg) translate(14px, -12px);
  }
`;

export const MenuToggle = styled.div`
  width: 50px;
  margin-right: 1vw;
  padding-top: 1vh;
`;

export const Bar = styled.div`
  background-color: #fff;
  border-radius: 5px;
  height: 8px;
  width: 100%;
  margin: 6px auto;
  transition-duration: 0.5s;
`;
