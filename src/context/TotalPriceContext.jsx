import { createContext, useContext, useReducer } from "react";

const TotalPriceContext = createContext();

const TotalPriceAction = createContext();

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        total: action.payload.total,
      };
    default:
      throw Error("Unknown Action " + action.type);
  }
};

export const TotalPriceProvider = ({ children }) => {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceAction.Provider value={dispatch}>
        {children}
      </TotalPriceAction.Provider>
    </TotalPriceContext.Provider>
  );
};

export function useTotalPrice() {
  return useContext(TotalPriceContext);
}

export function useTotalPriceAction() {
  return useContext(TotalPriceAction);
}
