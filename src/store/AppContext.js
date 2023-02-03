import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { initialState } from "./initialState";

const Store = createContext();

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={[state, dispatch]}>{children}</Store.Provider>;
};

export const StoreContext = () => useContext(Store);
