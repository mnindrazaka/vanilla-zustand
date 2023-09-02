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

type UseStoreParams<State> = {
  store: Store<State>;
};

// using force update pattern
export function useStore<State>(params: UseStoreParams<State>) {
  const [_, forceUpdate] = React.useReducer((c) => c + 1, 0);

  React.useEffect(() => {
    const unsubscribe = params.store.subscribe((prevState, nextState) => {
      forceUpdate();
    });
    return unsubscribe;
  }, [params]);

  return [params.store.getState(), params.store.setState] as const;
}

// using new React hooks
export function useStoreExternal<T>(store: Store<T>) {
  const state = React.useSyncExternalStore(store.subscribe, store.getState);
  return [state, store.setState] as const;
}
