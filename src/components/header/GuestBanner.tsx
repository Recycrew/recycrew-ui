/* eslint-disable prettier/prettier */
import { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '..';
import { useUserContext } from '../../context/UserContext';

const GuestBanner: FC = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleOut = () => {
    setUser(undefined);
    localStorage.removeItem('email');
    navigate('/');
  };

  return (
    <div className="flex w-full items-center justify-between">
      {!user?.name && (
        <span className="hidden text-xl font-light text-white md:block">
          Se cadastre a faça parte dessa comunidade!
        </span>
      )}
      {user?.name && <h2>{user?.name}</h2>}
      <div className="flex w-full items-center justify-around gap-6 md:w-auto">
        {!user?.name && (
          <Link to="/entrar">
            <Button title="Entrar" type="outlined" />
          </Link>
        )}
        {user?.name && pathname !== '/' && (
          <Link to="/">
            <Button title="Inicio" type="white" />
          </Link>
        )}
        {(user?.name && pathname === '/') ||
          (pathname.includes('/minhas-coletas') && (
            <Link to="/doacoes">
              <Button title="Doações" type="white" />
            </Link>
          ))}
        {user?.name &&
          user.is_collector &&
          (pathname === '/' || pathname.includes('/doacoes')) && (
            <Link to="/minhas-coletas">
              <Button title="Minhas Coletas" type="white" />
            </Link>
          )}
        {user?.name && (
          <Button title="Sair" type="outlined" onClick={handleOut} />
        )}
        {!user?.name && (
          <Link to="/cadastro">
            <Button title="Cadastrar" type="white" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default GuestBanner;
