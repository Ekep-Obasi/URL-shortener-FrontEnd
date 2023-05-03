import { createContext } from "react";

const AppContext = createContext();
const AppProvider = AppContext.Provider;

export { AppProvider, AppContext };
