/* eslint-disable prettier/prettier */
import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from '..';
import { useUserContext } from '../../context/UserContext';
import { apiService } from '../../service/api';

const SignInForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = await apiService.post(`/login`, {
        email,
        password
      });

      setUser(user);
      localStorage.setItem('email', user.email);
      navigate('/doacoes');
    } catch (error) {
      alert('Seu email ou senha estão incorretos');
    }
  };

  return (
    <div className="flex-1 flex-col justify-center py-16 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <h2 className="my-6 text-center text-3xl font-extrabold text-gray-900">
          Entrar
        </h2>
        <p className="font-light">
          Ainda não tem uma conta?
          <Link
            to="/cadastro"
            className="ml-2 font-medium text-primary hover:underline">
            Cadastrar
          </Link>
        </p>

        <div className="mt-6 space-y-6">
          <Input label="Email" type="email" value={email} onChange={setEmail} />
          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <div className="flex flex-col gap-4">
            <Button
              title="Entrar"
              type="primary"
              onClick={handleLogin}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
