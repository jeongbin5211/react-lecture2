import { createContext } from "react";
import ContextState from "../interface/ContetState";

const defaultContextValue: ContextState = {
    isLoggedIn: false,
    logIn: () => {},
    logOut: () => {},
};

const AuthContext = createContext<ContextState>(defaultContextValue);

export default AuthContext;