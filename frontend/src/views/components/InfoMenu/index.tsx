import React from 'react';

import { Wrapper, MostPopularTopics, MostPopularUsers } from './styles';

import User1 from '../../assets/Users/1.jpg';
import User2 from '../../assets/Users/2.jpg';
import User3 from '../../assets/Users/3.jpg';
import User4 from '../../assets/Users/4.jpg';
import User5 from '../../assets/Users/5.jpg';
import User6 from '../../assets/Users/6.jpg';

const InfoMenu: React.FC = () => {
  return (
    <Wrapper>
      <MostPopularTopics>
        <div>
          <h1>Assuntos Populares</h1>
          <p>Ver todos</p>
        </div>
        <ul>
          <li><strong>Tecnologia</strong> - 81 mil posts </li>
          <li><strong>Design</strong> - 77 mil posts </li>
          <li><strong>Artes plásticas</strong> - 50 mil posts </li>
          <li><strong>Programação</strong> - 27 mil posts </li>
          <li><strong>Saúde</strong> - 13 mil posts </li>
        </ul>
      </MostPopularTopics>
      <MostPopularUsers>
        <div>
          <h1>Usuários Populares</h1>
          <p>Ver todos</p>
        </div>
        <ul>
          <li>
            <div>
              <img src={User1} alt="Usuário"/>
            </div>
          </li>
          <li>
            <div>
              <img src={User2} alt="Usuário"/>
            </div>
          </li>
          <li>
            <div>
              <img src={User3} alt="Usuário"/>
            </div>
          </li>
          <li>
            <div>
              <img src={User4} alt="Usuário"/>
            </div>
          </li>
          <li>
            <div>
              <img src={User5} alt="Usuário"/>
            </div>
          </li>
          <li>
            <div>
              <img src={User6} alt="Usuário"/>
            </div>
          </li>
        </ul>
      </MostPopularUsers>
    </Wrapper>
  );
};

export default InfoMenu;