import { createContext, useContext, useReducer, type ActionDispatch, type ReactNode } from "react";
import { counterReducer, initialCounter, type CounterAction, type ICountState } from "../components/utils/CounterReducer";

const CounterContext = createContext<{
    state: ICountState;
    dispatch: ActionDispatch<[action: CounterAction]>;
} | null>(null);
interface CounterProvderProps
{
    children: ReactNode;
}
function useCounter()
{
    const context = useContext(CounterContext);
    if (context === null)
    {
        throw new Error("useCounter must be used within a CounterContext");
    }
    return context;
}
const CounterProvider = ({ children }: CounterProvderProps) => {
  const [state, dispatch] = useReducer(counterReducer, initialCounter);

  return (
    <CounterContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { CounterProvider, useCounter, CounterContext };