interface ContextState {
    isLoggedIn: boolean;
    logIn: () => void;
    logOut: () => void;
}

export default ContextState;