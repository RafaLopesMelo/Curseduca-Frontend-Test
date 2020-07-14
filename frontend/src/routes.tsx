import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';

import Login from './views/pages/Login';
import Home from './views/pages/Home';

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