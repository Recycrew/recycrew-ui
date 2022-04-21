import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '..';

const GuestBanner: FC = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <span className="hidden text-xl font-light text-white md:block">
        Se cadastre a faça parte dessa comunidade!
      </span>
      <div className="flex w-full items-center justify-around gap-6 md:w-auto">
        <Link to="/entrar">
          <Button title="Entrar" type="outlined" />
        </Link>
        <Link to="/cadastro">
          <Button title="Cadastrar" type="white" />
        </Link>
      </div>
    </div>
  );
};

export default GuestBanner;
