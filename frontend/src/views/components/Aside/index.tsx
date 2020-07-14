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
      <img src={photo} alt="Profile" />
      <Options>
        <ul>
          <li>
            <a href="/home">
              <GoPencil />
              Artigos
            </a>
          </li>
          <li>
            <a href="/home">
              <MdChatBubble />
              Pensamentos
            </a>
          </li>
          <li>
            <a href="/home">
              <FaExclamation />
              Avisos
            </a>
          </li>
          <li>
            <a href="/home">
              <BsBookHalf />
              Conteúdos
            </a>
          </li>
        </ul>
      </Options>
    </Wrapper>
  );
};

export default Aside;