/* eslint-disable prettier/prettier */
import { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '..';
import { useUserContext } from '../../context/UserContext';

const GuestBanner: FC = () => {
  const { userName, setUserName } = useUserContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleOut = () => {
    setUserName('');
    localStorage.removeItem('name');
    navigate('/');
  }

  return (
    <div className="flex w-full items-center justify-between">
      {!userName &&
        <span className="hidden text-xl font-light text-white md:block">
          Se cadastre a faça parte dessa comunidade!
        </span>
      }
      {userName &&
        <h2>{userName}</h2>
      }
      <div className="flex w-full items-center justify-around gap-6 md:w-auto">
        {!userName &&
          <Link to="/entrar">
            <Button title="Entrar" type="outlined" />
          </Link>
        }
        {userName && pathname !== '/' &&
          <Link to="/">
            <Button title="Inicio" type="white" />
          </Link>
        }
        {userName && pathname === '/' &&
          <Link to="/coletas">
            <Button title="Coletas" type="white" />
          </Link>
        }
        {userName &&
          <Button title="Sair" type="outlined" onClick={handleOut} />
        }
        {!userName &&
          <Link to="/cadastro">
            <Button title="Cadastrar" type="white" />
          </Link>
        }

      </div>
    </div>
  );
};

export default GuestBanner;
