import { FC } from 'react';
import AppRoutes from './AppRoutes';
import { useLocation } from 'react-router-dom';
import { Header } from './components';

const App: FC = () => {
  const location = useLocation().pathname;

  return (
    <div>
      {(location === '/' || location === '/coletas') && <Header />}
      <div className="mx-auto sm:px-6 lg:px-8">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
