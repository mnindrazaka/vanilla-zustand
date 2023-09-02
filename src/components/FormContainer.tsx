import { useAppStore } from "../store";

export const FormContainer = () => {
  const [state, setState] = useAppStore();
  return (
    <form>
      <div>
        <label>
          name
          <input
            type="text"
            value={state.form.name}
            onChange={(e) =>
              setState((state) => ({
                ...state,
                form: { ...state.form, name: e.target.value },
              }))
            }
          />
        </label>
      </div>

      <div>
        <label>
          address
          <input
            type="text"
            value={state.form.address}
            onChange={(e) =>
              setState((state) => ({
                ...state,
                form: { ...state.form, address: e.target.value },
              }))
            }
          />
        </label>
      </div>
    </form>
  );
};
