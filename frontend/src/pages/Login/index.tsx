import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import logo from '../../assets/curseduca.svg';
import illustration from '../../assets/estudos.svg';

import { Wrapper, Aside, LogoWrapper, LoginForm, SubmitButton, Main } from './styles';

const Login: React.FC = () => {
  return (
    <Wrapper>
      <Aside>
        <LogoWrapper>
          <img alt="Cureseduca Logo" src={ logo }/>
          <h1>Curseduca Social</h1>
        </LogoWrapper>
        <LoginForm>
          <h1>Entrar</h1>
          <input type="text" placeholder="Usuário"/>
          <input type="text" placeholder="Senha"/>
          <SubmitButton>
            <FaArrowRight/>
          </SubmitButton>
        </LoginForm>
      </Aside>
      <Main>
        <img alt="Illustration" src={ illustration } />
      </Main>
    </Wrapper>
  );
};

export default Login;