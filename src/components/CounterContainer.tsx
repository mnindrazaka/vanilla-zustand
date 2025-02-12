import { useStore } from "@/lib";
import { store } from "@/store";

export const CounterContainer = () => {
  return (
    <div>
      <button
        onClick={() =>
          store.setState((state) => ({ ...state, counter: state.counter + 1 }))
        }
      >
        increase
      </button>
      <button
        onClick={() =>
          store.setState((state) => ({ ...state, counter: state.counter - 1 }))
        }
      >
        decrease
      </button>
    </div>
  );
};
