import React, { createContext } from 'react';

export const AtuhContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const login = () => {
        console.log('Logueado');
    }

    const register = () => {
        console.log('Registrado');
    }

    const resetPassword = () => {
        console.log('Contraseña recuperada');
    }

    return ( 
        <AtuhContext.Provider value={{ login, register, resetPassword }} > 
            { children } 
        </AtuhContext.Provider> 
    )
}