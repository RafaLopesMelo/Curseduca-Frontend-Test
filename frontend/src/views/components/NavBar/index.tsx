import React from 'react';
import { Link } from 'react-router-dom';

import HamburguerMenu from '../HamburguerMenu';

import { 
  AiFillHome,
  FaPowerOff, 
  MdSettings,  
} from '../../styles/icons';

import logo from '../../assets/curseduca.svg';

import { Wrapper, LogoWrapper, IconsWrapper } from './styles';

const NavBar: React.FC = () => {
  return (
    <Wrapper>
      <HamburguerMenu />
      <LogoWrapper>
        <img alt="Curseduca Logo" src={ logo } />
        <h1>Curseduca Social</h1>
      </LogoWrapper>
      <IconsWrapper>
        <Link to="/posts"><AiFillHome /></Link>
        <Link to="/posts"><MdSettings /></Link>
        <Link to="/"><FaPowerOff /></Link>
      </IconsWrapper>
    </Wrapper>
  );
};

export default NavBar;