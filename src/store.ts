import { createStore, useStore } from "./lib";

export const store = createStore({
  form: { name: "", address: "" },
  counter: 0,
});

export const useAppStore = () => useStore({ store });
