import React from "react";

type Listener<T> = (prevState: T, nextState: T) => void;

type Store<T> = {
  getState: () => T;
  setState: (fn: (state: T) => T) => void;
  subscribe: (listener: Listener<T>) => () => void;
};

export function createStore<T>(initialState: T): Store<T> {
  let state = initialState;

  const listeners = new Set<Listener<T>>();

  const getState: Store<T>["getState"] = () => state;

  const setState: Store<T>["setState"] = (fn) => {
    const nextState = fn(state);
    const prevState = { ...state };
    state = nextState;
    listeners.forEach((listener) => listener(prevState, nextState));
  };

  const subscribe: Store<T>["subscribe"] = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { getState, setState, subscribe };
}

// using force update pattern
export function useStore<State, PartialState>(
  store: Store<State>,
  mapper: (state: State) => PartialState = (state) =>
    state as unknown as PartialState
) {
  const [_, forceUpdate] = React.useReducer((c) => c + 1, 0);

  React.useEffect(() => {
    const unsubscribe = store.subscribe((prevState, nextState) => {
      const partialPrevState = mapper(prevState);
      const partialNextState = mapper(nextState);
      if (partialPrevState !== partialNextState) {
        forceUpdate();
      }
    });
    return unsubscribe;
  }, [mapper, store]);

  return mapper(store.getState());
}

// using new React hooks
export function useStoreExternal<T>(store: Store<T>) {
  const state = React.useSyncExternalStore(store.subscribe, store.getState);
  return [state, store.setState] as const;
}
