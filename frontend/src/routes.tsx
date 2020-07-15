import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';

import Login from './views/pages/Login';
import Home from './views/pages/Home';
import AddPost from './views/pages/AddPost';

const Routes: React.FC = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Login }/>
        <Route exact path="/posts/:category?" component={ Home }/>
        <Route path="/add" component={ AddPost }/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;