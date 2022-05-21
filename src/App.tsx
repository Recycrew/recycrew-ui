/* eslint-disable prettier/prettier */
import { FC, useEffect } from 'react';
import AppRoutes from './AppRoutes';
import { useLocation } from 'react-router-dom';
import { Header } from './components';
import UserContextProvider from './context/UserContext';

const App: FC = () => {
  const location = useLocation().pathname;

  return (
    <UserContextProvider>
      {(location === '/' || location === '/coletas') && <Header />}
      <div className="mx-auto sm:px-6 lg:px-8">
        <AppRoutes />
      </div>
    </UserContextProvider>
  );
};

export default App;
