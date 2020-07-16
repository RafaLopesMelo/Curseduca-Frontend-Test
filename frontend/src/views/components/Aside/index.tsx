import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { GoPencil } from 'react-icons/go';
import { FaExclamation } from 'react-icons/fa';
import { MdChatBubble } from 'react-icons/md';
import { BsBookHalf } from 'react-icons/bs';

import photo from '../../assets/profileExample.png';

import { Wrapper, Options } from './styles';

const Aside = () => {
  const { category } = useParams();

  return (
    <Wrapper>
      <img src={photo} alt="Profile" />
      <Options>
        <ul>
          <li>
            <Link 
              to={location => `${location.pathname}?id_category=1`}
              className={Number(category) === 1 ? 'active' : ''}
            >
              <GoPencil />
              Artigos
            </Link>
          </li>
          <li>
            <Link 
              to={location => `${location.pathname}?id_category=2`}
              className={Number(category) === 2 ? 'active' : ''}
            >
              <MdChatBubble />
              Pensamentos
            </Link>
          </li>
          <li>
            <Link 
              to={location => `${location.pathname}?id_category=3`}
              className={Number(category) === 3 ? 'active' : ''}
            >
              <FaExclamation />
              Avisos
            </Link>
          </li>
          <li>
            <Link 
              to={location => `${location.pathname}?id_category=4`}
              className={Number(category) === 4 ? 'active' : ''}
            >
              <BsBookHalf />
              Conteúdos
            </Link>
          </li>
        </ul>
      </Options>
    </Wrapper>
  );
};

export default Aside;