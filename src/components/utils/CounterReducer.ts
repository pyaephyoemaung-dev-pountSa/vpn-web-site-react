
export type CounterAction =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number }
  | { type: "RESET" };

export interface ICountState {
  count: number;
}

const initialCounter: ICountState = {
  count: 1,
};

const counterReducer = (state: ICountState, action: CounterAction) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.payload,
      };
    case "DECREMENT": {
      if (state.count <= 1) {
        return {
          count: state.count,
        };
      }
      return {
        count: state.count - action.payload,
      };
    }

    case "RESET":
      return initialCounter;
  }
};

export { counterReducer, initialCounter };