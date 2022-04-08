import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';

const AppRoutes: FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default AppRoutes;
