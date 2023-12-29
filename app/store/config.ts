import { StateCreator, StoreApi, UseBoundStore, create } from "zustand";
import { StateStorage, createJSONStorage, persist } from "zustand/middleware";
import { del, get, set } from 'idb-keyval'

import { immer } from "zustand/middleware/immer";

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

const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    console.log(`  %c${name}`, "color:deepskyblue;font-weight:bold;", 'initialized')
    return (await get(name)) || null
  },
  setItem: async (name: string, value: string): Promise<void> => {
    console.log(`  %c${name}`, "color:rgb(74 222 128);font-weight:bold;", JSON.parse(value))
    await set(name, value)
  },
  removeItem: async (name: string): Promise<void> => {
    console.log(`  %c${name}`, "color:red;font-weight:bold;", 'has been deleted')
    await del(name)
  },
}

const createStore = <T>(storageName: string, config: MainStateCreator<T>) => {
  return create<T>()(
    immer(
      persist(config, {
        name: storageName,
        storage: createJSONStorage(() => storage),
      })
    )
  );
};

export { createStore, createSelectors };
