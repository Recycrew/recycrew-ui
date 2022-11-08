/* eslint-disable prettier/prettier */

import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from '..';
import { useUserContext } from '../../context/UserContext';
import { apiService } from '../../service/api';

const SignUpForm: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [isCollector, setIsCollector] = useState(false);
  const [documentNumber, setDocumentNumber] = useState('');
  const [documentType, setDocumentType] = useState<'CPF' | 'CNPJ'>('CPF');

  const { setUser } = useUserContext();

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (
      !email ||
      !name ||
      !password ||
      !address ||
      !documentNumber ||
      !documentType
    )
      return;

    const user = await apiService.post('/register', {
      email,
      name,
      password,
      address,
      document_number: documentNumber,
      document_type: documentType,
      is_collector: isCollector
    });

    setUser(user);
    localStorage.setItem('email', user.email);
    navigate('/doacoes');
  };

  return (
    <div className="flex-1 flex-col justify-center py-16 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <h2 className="my-6 text-center text-3xl font-extrabold text-gray-900">
          Cadastro
        </h2>
        <p className="font-light">
          Já tem uma conta?
          <Link
            to="/entrar"
            className="ml-2 font-medium text-primary hover:underline">
            Entrar
          </Link>
        </p>

        <div className="mt-6 space-y-6">
          <Input label="Nome" type="text" value={name} onChange={setName} />
          <Input label="Email" type="email" value={email} onChange={setEmail} />
          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <Input
            label="Endereço"
            type="text"
            value={address}
            onChange={setAddress}
          />
          <div>
            <select
              id="countries"
              onChange={(event) =>
                setDocumentType(event.currentTarget.value as 'CPF' | 'CNPJ')
              }
              defaultValue={documentType}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
              <option value="CPF">CPF</option>
              <option value="CNPJ">CNPJ</option>
            </select>
            <Input
              label="Nº documento"
              type="text"
              value={documentNumber}
              onChange={setDocumentNumber}
            />
          </div>
          <div className="flex flex-row items-center gap-2">
            <input
              type="checkbox"
              className="leading-[0]"
              onClick={() => setIsCollector((isCollector) => !isCollector)}
              defaultChecked={isCollector}
            />
            <span className="leading-[0]"> É coletor?</span>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              title="Cadastrar"
              type="primary"
              onClick={handleRegister}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
