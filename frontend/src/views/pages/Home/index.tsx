import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { fetchPosts, fetchUsers } from '../../../redux_setup/actions';

import NavBar from '../../components/NavBar';
import Aside from '../../components/Aside';
import Footer from '../../components/Footer';
import PostsFeed from '../../components/PostsFeed';

import { Wrapper } from './styles';

const Home: React.FC = () => {
  const { category } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

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
      <PostsFeed />
      <Aside />
      <Footer />
    </Wrapper>
  );
};

export default Home;