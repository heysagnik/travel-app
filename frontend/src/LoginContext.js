import { createContext } from "react";

const LoginContext = createContext({});

export default LoginContext;

export const { Provider, Consumer } = LoginContext;
