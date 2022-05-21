/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

interface IUserContext {
    userName: string,
    setUserName: React.Dispatch<React.SetStateAction<string>>
}

const UserContext = createContext({} as IUserContext);

const UserContextProvider: React.FC = ({ children }) => {
    const [userName, setUserName] = useState('');
    useEffect(() => {
        const name = localStorage.getItem('name');

        if (!name) return;

        setUserName(name);
    }, [userName])
    return (
        <UserContext.Provider value={{ userName, setUserName } as IUserContext}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
}

export default UserContextProvider;