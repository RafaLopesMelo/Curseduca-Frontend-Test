import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchPosts } from '../../../redux_setup/actions'

import NavBar from '../../components/NavBar';
import Aside from '../../components/Aside';
import Footer from '../../components/Footer';
import EditPostForm from '../../components/EditPostForm';

import { Wrapper } from './styles';

const EditPosts: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPosts()
    .then(action => {
      dispatch(action)
    })
    .catch(() => history.push('/'))
  }, [dispatch, history])

  return (
    <Wrapper>
      <NavBar />
      <Aside />
      <EditPostForm />
      <Footer />
    </Wrapper>
  );
};

export default EditPosts;