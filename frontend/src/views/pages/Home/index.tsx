import React, { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BsPlus } from 'react-icons/bs';

import { fetchPosts, fetchUsers } from '../../../redux_setup/actions';

import NavBar from '../../components/NavBar';
import Aside from '../../components/Aside';
import Footer from '../../components/Footer';
import PostsFeed from '../../components/PostsFeed';

import { Wrapper, MainWrapper, FeedWrapper, AddPost } from './styles';

const Home: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const query = new URLSearchParams(useLocation().search)
  const category = query.get('id_category') as string

  useEffect(() => {
    fetchPosts(category)
      .then(action => dispatch(action))
      .catch(() => history.push('/'))
  }, [category, dispatch, history])

  useEffect(() => {
    fetchUsers()
      .then(action => dispatch(action))
      .catch(() => history.push('/'));
  })

  return (
    <Wrapper>
      <NavBar />
      <MainWrapper>
      <Aside />
      <FeedWrapper>
        <AddPost>
          <Link to="/add">
            <h1>Adicionar Postagem</h1>
            <BsPlus />
          </Link>
        </AddPost>
      <PostsFeed />
      </FeedWrapper>
      </MainWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Home;