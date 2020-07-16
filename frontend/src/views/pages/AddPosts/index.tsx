import React from 'react';

import NavBar from '../../components/NavBar';
import Aside from '../../components/Aside';
import Footer from '../../components/Footer';
import AddPostForm from '../../components/AddPostForm';

import { Wrapper } from './styles';

const AddPosts: React.FC = () => {

  return (
    <Wrapper>
      <NavBar />
        <AddPostForm />
      <Aside />
      <Footer />
    </Wrapper>
  );
};

export default AddPosts;