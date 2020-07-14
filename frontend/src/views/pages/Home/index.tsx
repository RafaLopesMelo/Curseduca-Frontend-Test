import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';

import NavBar from '../../components/NavBar';
import Aside from '../../components/Aside';
import Footer from '../../components/Footer';

import { fetchPosts } from './_homeAction';

import { Wrapper, Main, AddPost } from './styles';

const Home: React.FC<IHomeProps> = ({ fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <Wrapper>
      <NavBar />
      <Main>
        <AddPost>
          <Link to="/home">
            <h1>Adicionar Postagem</h1>
            <BsPlus />
          </Link>
        </AddPost>
      </Main>
      <Aside />
      <Footer />
    </Wrapper>
  );
};

const mapStateToProps = (state: any) => {
  return { posts: state.posts};
};

export default connect(mapStateToProps, { fetchPosts })(Home);