import React, { useState } from 'react';

const ContextValue = {
  isOpen: false,
  toggleState: () => {}
}

const AsideMenuContext = React.createContext(ContextValue);

const ContextProvider: React.FC = ({children}) => {
  const [ isOpen, setIsOpen ] = useState(false);

  function toggleState() {
    setIsOpen(prevState => !prevState)
  };

  return (
    <AsideMenuContext.Provider value={{isOpen, toggleState}}>
      {children}
    </AsideMenuContext.Provider>
  );
};

export { ContextProvider, ContextValue, AsideMenuContext };