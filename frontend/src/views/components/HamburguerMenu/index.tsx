import React, { useContext } from 'react';

import { AsideMenuContext } from '../Context';
import { Container, MenuToggle, Bar } from './styles';

const HamburguerMenu: React.FC = () => {
  const AsideCtx = useContext(AsideMenuContext);

  return (
    <Container className={AsideCtx.isOpen === true ? 'on' : ''} onClick={AsideCtx.toggleState}>
      <MenuToggle>
          <Bar></Bar>
          <Bar></Bar>
          <Bar></Bar>
      </MenuToggle>
    </Container>
  );
};

export default HamburguerMenu;
