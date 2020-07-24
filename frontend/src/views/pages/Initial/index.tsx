import React from "react";
import { useHistory } from "react-router-dom";

import { Wrapper, Navbar, LogoWrapper, OptionsWrapper, Header, TitleWrapper, Button, Illustration, Section } from './styles';

import Footer from '../../components/Footer';
import logo from '../../assets/curseduca.svg';
import illustration from '../../assets/CurseducaHome.svg';
import Books from '../../assets/Livros.svg';
import Users from '../../assets/Users.svg';

const Initial: React.FC = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Navbar>
        <LogoWrapper>
          <img alt="Curseduca Logo" src={logo} />
          <h1>Curseduca Social</h1>
        </LogoWrapper>
        <OptionsWrapper>
          <li>Sobre</li>
          <li>Ajuda</li>
          <li>Termos</li>
          <li><button>Cadastre-se</button></li>
        </OptionsWrapper>
      </Navbar>
      <Header>
        <TitleWrapper>
          <h1>Descubra um mundo de conhecimento infinito!</h1>
          <p>
            Curseduca Social foi feito para encontrar conhecimento de forma divertida e descontraída. Compartilhe
            artigos, siga seus autores preferidos e interaja com uma comunidade gigantesca!
          </p>
          <div>
            <Button>Cadastre-se</Button>
            <Button outlined onClick={() => history.push('/login')}>Entrar</Button>
          </div>
        </TitleWrapper>
        <Illustration src={illustration} alt="Ilustração" />
      </Header>
      <Section>
        <div className='books-wrapper'>
          <img src={Books} alt="Ilustração Livros"/>
          <div>
            <h1>Promova conhecimento de forma intuitiva e descomplicada!</h1>
            <p>Divulgue seu conhecimento por meio de artigos e postagens, ou aprenda coisas novas navegando pelo mar de conteúdo compartilhado todos os dias.</p>
          </div>
        </div>
        <div className="users-wrapper">
          <div>
            <h1>Faça conexões e siga os criadores de conteúdo que você admira!</h1>
            <p>Conheça uma comunidade enorme que tem o objetivo de espalhar conhecimento para todos e criar um mundo mais consciente.</p>
          </div>
          <img src={Users} alt="Ilustração usuários"/>
        </div>
      </Section>
      <Footer />
    </Wrapper>
  );
};

export default Initial;
