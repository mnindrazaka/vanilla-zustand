import { useStore } from "@/lib";
import { store } from "@/store";

export const FormPreview = () => {
  const form = useStore(store, (state) => state.form);
  return (
    <div>
      <p>Name : {form.name} </p>
      <p>Address : {form.address} </p>
    </div>
  );
};
