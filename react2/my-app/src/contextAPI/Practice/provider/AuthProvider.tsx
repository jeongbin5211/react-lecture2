import React, { useReducer } from 'react'
import AuthContext from '../context/AuthContext';



const reducer = (state: boolean, action: string) => {
    switch (action) {
        case 'logIn':
            return true;
        case 'logOut':
            return false;
        default:
            return state;
    }
};


export default function AuthProvider({children}: {children : React.ReactNode}) {

    const [isLoggedIn, dispatch] = useReducer(reducer, false);
  return (
    <AuthContext.Provider value={{
        isLoggedIn,
            logIn: () => dispatch('login'),
            logOut: () => dispatch('logOut'),
    }}>
        {children}
    </AuthContext.Provider>
  )
}
