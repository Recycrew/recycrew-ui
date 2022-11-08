/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import { apiService } from '../service/api';

export interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  document_type: string;
  document_number: string;
  address: string;
  is_collector: boolean;
}

interface IContextUser {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const UserContext = createContext({} as IContextUser);

const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    (async () => {
      const email = localStorage.getItem('email');
      if (!email) return;

      const user = await apiService.get('/user?email=' + email);
      if (!user) return;

      setUser(user);
    })();
  }, []);
  return (
    <UserContext.Provider value={{ setUser, user } as IContextUser}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};

export default UserContextProvider;
