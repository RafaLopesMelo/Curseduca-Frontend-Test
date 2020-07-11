import React from 'react';
import logo from '../../assets/curseduca.svg';

import { Wrapper, Aside, LogoWrapper, Logo, LoginForm, Main } from './styles';

const Login: React.FC = () => {
  return (
    <Wrapper>
      <Aside>
        <LogoWrapper>
          <Logo src={ logo }/>
          <h1>Curseduca Social</h1>
        </LogoWrapper>
        <LoginForm>
          <h1>Login</h1>
          <input type="text" placeholder="Usuário"/>
          <input type="text" placeholder="Senha"/>
        </LoginForm>
      </Aside>
      <Main>

      </Main>
    </Wrapper>
  );
};

export default Login;