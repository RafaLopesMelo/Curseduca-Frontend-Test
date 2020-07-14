import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaPowerOff } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

import logo from '../../assets/curseduca.svg';

import { Wrapper, LogoWrapper, IconsWrapper } from './styles';

const NavBar: React.FC = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <img alt="Curseduca Logo" src={ logo } />
        <h1>Curseduca Social</h1>
      </LogoWrapper>
      <IconsWrapper>
      <Link to="/home"><AiFillHome /></Link>
      <Link to="/home"><MdSettings /></Link>
      <Link to="/"><FaPowerOff /></Link>
      </IconsWrapper>
    </Wrapper>
  );
};

export default NavBar;