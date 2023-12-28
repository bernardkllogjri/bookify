import { StateCreator, StoreApi, UseBoundStore, create } from "zustand";

import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

// it should be immer(devtools(...)) always because devtools needs to have the latest update in order to log the result https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#using-middlewares

type MainStateCreator<T> = StateCreator<
  T,
  [
    ["zustand/immer", never],
    ["zustand/devtools", never],
    ["zustand/persist", unknown]
  ],
  []
>;
type Logger = <T>(f: MainStateCreator<T>) => MainStateCreator<T>;
type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

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


const logger: Logger = (config) => (set, get, api) =>
  config(
    (...args) => {
      console.log("  %capplying", 'color:red;', args);
      set(...args);
      console.log("  %cnew state", 'color:rgb(74 222 128);', get());
    },
    get,
    api
  );

const createStore = <T>(storageName: string, config: MainStateCreator<T>) => {
  return create<T>()(immer(persist(logger(config), { name: storageName })));
};

export { createStore, createSelectors };
