import { PartObjFromArrOfKeys, withZustandards } from "zustand-ards";
import {
  PersistOptions,
  StateStorage,
  createJSONStorage,
  persist,
} from "zustand/middleware";
import { StateCreator, StoreApi, UseBoundStore, create } from "zustand";
import { del, get, set } from "idb-keyval";

import { Draft } from "immer";
import { immer } from "zustand/middleware/immer";

type PersistListener<S> = (state: S) => void;
type StorePersist<S, Ps> = {
  persist: {
    setOptions: (options: Partial<PersistOptions<S, Ps>>) => void;
    clearStorage: () => void;
    rehydrate: () => Promise<void> | void;
    hasHydrated: () => boolean;
    onHydrate: (fn: PersistListener<S>) => () => void;
    onFinishHydration: (fn: PersistListener<S>) => () => void;
    getOptions: () => Partial<PersistOptions<S, Ps>>;
  };
};
type Write<T, U> = Omit<T, keyof U> & U;
type SkipTwo<T> = T extends {
  length: 0;
}
  ? []
  : T extends {
      length: 1;
    }
  ? []
  : T extends {
      length: 0 | 1;
    }
  ? []
  : T extends [unknown, unknown, ...infer A]
  ? A
  : T extends [unknown, unknown?, ...infer A]
  ? A
  : T extends [unknown?, unknown?, ...infer A]
  ? A
  : never;

type StoreImmer<S> = S extends {
  getState: () => infer T;
  setState: infer SetState;
}
  ? SetState extends (...a: infer A) => infer Sr
    ? {
        setState(
          nextStateOrUpdater: T | Partial<T> | ((state: Draft<T>) => void),
          shouldReplace?: boolean | undefined,
          ...a: SkipTwo<A>
        ): Sr;
      }
    : never
  : never;
type WithImmer<S> = Write<S, StoreImmer<S>>;

type MainStateCreator<T> = StateCreator<
  T,
  [
    ["zustand/immer", never],
    ["zustand/devtools", never],
    ["zustand/persist", unknown]
  ],
  []
>;

const withSelectors = withZustandards as <T>(
  storeHook: UseBoundStore<
    Write<WithImmer<StoreApi<T>>, StorePersist<T, unknown>>
  >
) => (<U, A extends (keyof T)[]>(
  selector: A,
  equals?:
    | ((
        a: PartObjFromArrOfKeys<T, A>,
        b: PartObjFromArrOfKeys<T, A>
      ) => boolean)
    | undefined
) => PartObjFromArrOfKeys<T, A>) & {
  (): T;
  <U_1>(
    selector: (state: T) => U_1,
    equals?: ((a: U_1, b: U_1) => boolean) | undefined
  ): U_1;
} & StoreApi<T>;

// it should be immer(devtools(...)) always because devtools needs to have the latest update in order to log the result https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#using-middlewares

const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    console.log(
      `  %c${name}`,
      "color:deepskyblue;font-weight:bold;",
      "initialized"
    );
    return (await get(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    console.log(
      `  %c${name}`,
      "color:rgb(74 222 128);font-weight:bold;",
      JSON.parse(value)
    );
    await set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    console.log(
      `  %c${name}`,
      "color:red;font-weight:bold;",
      "has been deleted"
    );
    await del(name);
  },
};

const createStore = <T>(storageName: string, config: MainStateCreator<T>) => {
  return withSelectors(
    create<T>()(
      immer(
        persist(config, {
          name: storageName,
          storage: createJSONStorage(() => storage),
          partialize: (state: any) =>
            Object.fromEntries(
              Object.entries(state).filter(
                ([key]) => !["braintreeClient"].includes(key)
              )
            ),
        })
      )
    )
  );
};

export { createStore };
