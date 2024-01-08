import { StateCreator, StoreApi, UseBoundStore } from "zustand";

import { Draft } from "immer";
import { PartObjFromArrOfKeys } from "zustand-ards";
import { PersistOptions } from "zustand/middleware";
import { Product } from "../product/types";

export type FeaturedProducts = Pick<
  Product,
  "name" | "imageSrc" | "imageAlt"
> & { href: string };

export type Link = {
  name: string;
  href: string;
};

export type Section = {
  id: string;
  name: string;
  items: Link[];
};

export type Category = {
  id: string;
  name: string;
  featured: FeaturedProducts[];
  sections: Section[];
};

export type Page = {
  name: string;
  href: string;
};

export type Navigation = {
  categories: Category[];
  pages: Page[];
}

export type Breadcrumb = { 
  id: string;
  name: string;
  href: string;
}

export type PersistListener<S> = (state: S) => void;
export type StorePersist<S, Ps> = {
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
export type Write<T, U> = Omit<T, keyof U> & U;
export type SkipTwo<T> = T extends {
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

export type StoreImmer<S> = S extends {
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
export type WithImmer<S> = Write<S, StoreImmer<S>>;

export type MainStateCreator<T> = StateCreator<
  T,
  [
    ["zustand/immer", never],
    ["zustand/devtools", never],
    ["zustand/persist", unknown]
  ],
  []
>;

export type WithSelectors = <T>(
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

export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};