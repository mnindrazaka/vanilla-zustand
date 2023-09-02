import { useAppStore } from "@/store";

export const FormPreview = () => {
  const [state] = useAppStore();
  return (
    <div>
      <p>Name : {state.form.name} </p>
      <p>Address : {state.form.address} </p>
    </div>
  );
};
