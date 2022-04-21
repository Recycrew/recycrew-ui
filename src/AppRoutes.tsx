import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, SignUpIn, Wall } from './pages';

const AppRoutes: FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/coletas" element={<Wall />} />
    <Route path="/cadastro" element={<SignUpIn signUp />} />
    <Route path="/entrar" element={<SignUpIn />} />
  </Routes>
);

export default AppRoutes;
