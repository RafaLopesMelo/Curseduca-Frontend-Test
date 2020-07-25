import React, { useEffect } from 'react';

import { ContextProvider } from './components/Context';
import Routes from '../Routes';
import GlobalStyles from './styles/global.styles';

const App: React.FC = () => {
  // useEffect(() => localStorage.removeItem('token'));

  return (
    <>
      <ContextProvider>
        <GlobalStyles />
        <Routes />
      </ContextProvider>
    </>
  );
};

export default App;