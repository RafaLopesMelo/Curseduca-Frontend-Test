import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';



import NavBar from '../../components/NavBar';
import Aside from '../../components/Aside';
import Footer from '../../components/Footer';
import EditPostForm from '../../components/EditPostForm';

import { Wrapper } from './styles';

const EditPosts: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <NavBar />
        <EditPostForm />
      <Aside />
      <Footer />
    </Wrapper>
  );
};

export default EditPosts;