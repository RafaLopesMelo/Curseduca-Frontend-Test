import React, { useRef, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import api from '../../../services/api';

import logo from '../../assets/curseduca.svg';
import illustration from '../../assets/estudos.svg';

import {
  Wrapper,
  Aside,
  LogoWrapper,
  LoginForm,
  SubmitButton,
  Main,
  ErrorWrapper
} from './styles';

const Login: React.FC = () => {
  const [hasError, setHasError] = useState(false);

  const history = useHistory();

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const response: ITokenResponse = await api.post('/auth/login', {
        email: emailInputRef.current?.value,
        password: passwordInputRef.current?.value
      });

      localStorage.setItem('token', response.data.access_token);
      history.push('/posts');
    } catch {
      setHasError(true);
    }
  };

  return (
    <Wrapper>
      <Aside>
        <LogoWrapper>
          <img alt="Cureseduca Logo" src={logo} />
          <h1>Curseduca Social</h1>
        </LogoWrapper>
        <LoginForm>
          <h1>Entrar</h1>
          {hasError &&
            <ErrorWrapper>
              <h2>Usuário ou senha incorretos</h2>
            </ErrorWrapper>
          }
          <label>
            <h3>Usuário:</h3>
            <input type="text" ref={emailInputRef} placeholder="dev1@curseduca.com" />
          </label>
          <label>
            <h3>Senha:</h3>
            <input type="text" ref={passwordInputRef} placeholder="dev1" />
          </label>
          <SubmitButton onClick={handleSubmit}>
            <FaArrowRight />
          </SubmitButton>
        </LoginForm>
      </Aside>
      <Main>
        <img alt="Illustration" src={illustration} />
      </Main>
    </Wrapper>
  );
};

export default Login;