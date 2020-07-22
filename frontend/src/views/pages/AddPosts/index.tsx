import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchUsers } from '../../../redux_setup/actions';

import NavBar from '../../components/NavBar';
import Aside from '../../components/Aside';
import Footer from '../../components/Footer';
import AddPostForm from '../../components/AddPostForm';

import { Wrapper, MainWrapper } from './styles';

const AddPosts: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    fetchUsers()
    .then(action => dispatch(action))
    .catch(() => history.push('/'))
  })

  return (
    <Wrapper>
      <NavBar />
      <MainWrapper>
        <Aside />
        <AddPostForm />
      </MainWrapper>
      <Footer />
    </Wrapper>
  );
};

export default AddPosts;