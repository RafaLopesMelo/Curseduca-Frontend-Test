import React, { useEffect } from 'react';

import Routes from '../Routes';
import GlobalStyles from './global.styles';

const App: React.FC = () => {
  // useEffect(() => localStorage.removeItem('token'));

  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
};

export default App;