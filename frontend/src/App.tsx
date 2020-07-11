import React from 'react';

import Routes from './routes';
import GlobalStyles from './global.styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
};

export default App;