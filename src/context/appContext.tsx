import { createContext, ReactNode, useContext, useReducer } from "react";
import { appAction, appState } from "./type";
import { appReducer, initialState } from "./reducer";

interface appContextProps {
  state: appState;
  dispatch: React.Dispatch<appAction>;
}

//Create context

const AppContext = createContext<appContextProps | undefined>(undefined);

//Create provider
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Create hook for easy usage
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppProvider");
  return context;
};
