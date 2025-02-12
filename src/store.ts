import { createStore } from "./lib";

export const store = createStore({
  form: { name: "", address: "" },
  counter: 0,
});
