import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AsideMenuContext } from '../Context';

import photo from '../../assets/Users/Eu.jpeg';
import { Wrapper, Profile, Options } from './styles';
import { GoPencil, MdChatBubble, FaExclamation, BsBookHalf } from '../../styles/icons';

const Aside: React.FC = () => {
  const AsideCtx = useContext(AsideMenuContext);
  const location = useLocation();

  return (
    <Wrapper isOpen={AsideCtx.isOpen ? true : false}>
      <Profile>
        <div className="image-container">
          <img src={photo} alt="Profile" />
        </div>
        <h2>Rafael Melo</h2>
        <div className="info-container">
          <p>Seguidores: <strong>324</strong></p> <p>Seguindo: <strong>734</strong></p>
        </div>
      </Profile>
      <Options>
        <ul>
          <li className={location.search === '?id_category=1' ? 'active' : ''}>
            <Link 
              to={`${location.pathname}?id_category=1`}      
            >
              <GoPencil />
              Artigos
            </Link>
          </li>
          <li className={location.search === '?id_category=2' ? 'active' : ''}>
            <Link 
              to={`${location.pathname}?id_category=2`}
            >
              <MdChatBubble />
              Pensamentos
            </Link>
          </li>
          <li className={location.search === '?id_category=3' ? 'active' : ''}>
            <Link 
              to={`${location.pathname}?id_category=3`}
            >
              <FaExclamation />
              Avisos
            </Link>
          </li>
          <li className={location.search === '?id_category=4' ? 'active' : ''}>
            <Link 
              to={`${location.pathname}?id_category=4`}  
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