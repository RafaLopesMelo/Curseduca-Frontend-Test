import React from 'react';

import NavBar from '../../components/NavBar';
import Aside from '../../components/Aside';
import Footer from '../../components/Footer';

import { Wrapper, Main } from './styles';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <NavBar />
      <Main>

      </Main>
      <Aside />
      <Footer />
    </Wrapper>
  );
};

export default Home;