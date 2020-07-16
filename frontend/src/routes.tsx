import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';

import Login from './views/pages/Login';
import Home from './views/pages/Home';
import UserPosts from './views/pages/UserPosts';
import AddPosts from './views/pages/AddPosts';
import EditPosts from './views/pages/EditPosts';


const Routes: React.FC = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Login }/>
        <Route exact path="/posts" component={ Home }/>
        <Route exact path="/user/:id_user" component={ UserPosts }/>
        <Route exact path="/add" component={ AddPosts }/>
        <Route exact path="/edit/:id_post" component={ EditPosts }/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;