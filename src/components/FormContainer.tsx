import { store } from "../store";

export const FormContainer = () => {
  return (
    <form>
      <div>
        <label>
          name
          <input
            type="text"
            onChange={(e) =>
              store.setState((state) => ({
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
            onChange={(e) =>
              store.setState((state) => ({
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
