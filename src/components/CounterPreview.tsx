import { useAppStore } from "../store";

export const CounterPreview = () => {
  const [state] = useAppStore();

  return (
    <div>
      <p>counter : {state.counter} </p>
    </div>
  );
};
