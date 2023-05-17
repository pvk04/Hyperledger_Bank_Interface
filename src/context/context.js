import { createContext, useReducer } from "react";

const initialState = {
  name: null,
  login: null,
  id: null,
  role: null,
  balance: null,
  org: "org1",
  activeRole: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      const { name, login, id, role, balance } = action.payload;
      return {
        ...state,
        name,
        login,
        id,
        role,
        balance,
        activeRole: role,
      };
    case "CHANGE_ACTIVE_ROLE":
      const activeRole = state.role == state.activeRole ? "0" : state.role;
      return { ...state };
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
