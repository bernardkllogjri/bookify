import { StateCreator, StoreApi, UseBoundStore, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { immer } from "zustand/middleware/immer";

// it should be immer(devtools(...)) always because devtools needs to have the latest update in order to log the result https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#using-middlewares

type State<T> = StateCreator<
    T,
    [
      ["zustand/immer", never],
      ["zustand/devtools", never],
      ["zustand/persist", unknown]
    ],
    []
  >

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

  // <S extends UseBoundStore<Write<WithDevtools<WithImmer<StoreApi<T>>>, StorePersist<T, T>>>>

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  let store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

const createStore = <T>(
  storageName: string,
  config: State<T>
) => {
  return create<T>()(immer(devtools(persist(config, { name: storageName }))))
}

export { createStore, createSelectors };
