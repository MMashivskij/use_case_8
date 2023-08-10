import React, { createContext, useReducer, useContext } from "react";
import { rootReducer } from "./reducers";  // Adjust the path

const ReduxStoreContext = createContext();

export const ReduxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  return (
    <ReduxStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </ReduxStoreContext.Provider>
  );
};

export const useReduxStore = () => {
  const context = useContext(ReduxStoreContext);
  if (!context) {
    throw new Error("useReduxStore must be used within a ReduxProvider");
  }
  return context;
};
