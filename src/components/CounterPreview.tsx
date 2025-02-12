import { useStore } from "@/lib";
import { store } from "../store";

export const CounterPreview = () => {
  const counter = useStore(store, (state) => state.counter);
  return (
    <div>
      <p>counter : {counter} </p>
    </div>
  );
};
