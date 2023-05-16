import { createContext, useReducer } from "react";

const initialState = {
  name: null,
  login: null,
  id: null,
  role: null,
  balance: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      const { name, login, id, role, balance } = action.payload;
      console.log(name, login, id, role, balance);
      return {
        ...state,
        name,
        login,
        id,
        role,
        balance,
      };
    case "SET_LOGOUT":
      return initialState;
    default:
      return state;
  }
}

export const AppContext = createContext();

export function AppProvider({ children }) {
  const value = useReducer(reducer, initialState);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
