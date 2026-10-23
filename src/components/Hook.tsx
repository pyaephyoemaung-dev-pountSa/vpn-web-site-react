import { useCounter } from "../providers/CounterProvider";

const Hook = () =>
{
    const { state, dispatch } = useCounter();
    return (
        <>
            <p className="text-2xl text-red-400">{state.count}</p>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>-</button>
            <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>+</button>
            <Card/>
        </>
    )
}
const Card = () => {
  return (
    <>
      <Child />
    </>
  );
};

const Child = () => {
  const { state } = useCounter();

  return (
    <div>
      <p>Child - {state.count}</p>
    </div>
  );
};

export default Hook;