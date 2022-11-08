import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, SignUpIn, Wall } from './pages';
import CollectsWall from './pages/CollectsWall';

const AppRoutes: FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/doacoes" element={<Wall />} />
    <Route path="/minhas-coletas" element={<CollectsWall />} />
    <Route path="/cadastro" element={<SignUpIn signUp />} />
    <Route path="/entrar" element={<SignUpIn />} />
  </Routes>
);

export default AppRoutes;
