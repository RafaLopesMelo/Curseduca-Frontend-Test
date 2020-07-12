import React from 'react';
import { GoPencil } from 'react-icons/go';
import { FaExclamation } from 'react-icons/fa';
import { MdChatBubble } from 'react-icons/md';
import { BsBookHalf } from 'react-icons/bs';

import photo from '../../assets/profileExample.png';

import { Wrapper, Options } from './styles';

const Aside = () => {
  return (
    <Wrapper>
      <img src={ photo } alt="Profile" />
      <Options>
        <ul>
          <li>
            <GoPencil />
            Artigos
          </li>
          <li>
            <MdChatBubble />
            Pensamentos
          </li>
          <li>
            <FaExclamation />
            Avisos
          </li>
          <li>
            <BsBookHalf />
            Conteúdos
          </li>
        </ul>
      </Options>
    </Wrapper>
  );
};

export default Aside;