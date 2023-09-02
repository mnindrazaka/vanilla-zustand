import { useAppStore } from "../store";

export const CounterContainer = () => {
  const [_, setState] = useAppStore();
  return (
    <div>
      <button
        onClick={() =>
          setState((state) => ({ ...state, counter: state.counter + 1 }))
        }
      >
        increase
      </button>
      <button
        onClick={() =>
          setState((state) => ({ ...state, counter: state.counter - 1 }))
        }
      >
        decrease
      </button>
    </div>
  );
};
