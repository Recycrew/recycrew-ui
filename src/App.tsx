import { FC } from 'react';
import AppRoutes from './AppRoutes';

const App: FC = () => {
  return (
    <div className="mx-auto sm:px-6 lg:px-8">
      <AppRoutes />
    </div>
  );
};

export default App;
