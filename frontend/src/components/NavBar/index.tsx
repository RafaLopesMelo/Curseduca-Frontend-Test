import React from 'react';

import logo from '../../assets/curseduca.svg';

import { Wrapper, LogoWrapper } from './styles';

const NavBar: React.FC = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <img alt="Curseduca Logo" src={ logo } />
        <h1>Curseduca Social</h1>
      </LogoWrapper>
    </Wrapper>
  );
};

export default NavBar;