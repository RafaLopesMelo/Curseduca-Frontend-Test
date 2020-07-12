import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

const Routes: React.FC = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Login }/>
        <Route path="/home" component={ Home }/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;