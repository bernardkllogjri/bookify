import { MainStateCreator, WithSelectors } from "../types";
import { StateStorage, createJSONStorage, persist } from "zustand/middleware";
import { del, get, set } from "idb-keyval";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { withZustandards } from "zustand-ards";

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

const withSelectors = withZustandards as WithSelectors;

type JsonStorageOptions = {
  reviver?: (key: string, value: unknown) => unknown;
  replacer?: (key: string, value: unknown) => unknown;
};

// Extend the JsonStorageOptions with a debounceTime property
interface DebouncedJsonStorageOptions extends JsonStorageOptions {
  debounceTime: number;
}

// Function to create a debounced JSON storage
export function createDebouncedJSONStorage(
  storageApi: StateStorage,
  options: DebouncedJsonStorageOptions
) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  let pendingValue: string | null = null;

  // Function to set an item with debouncing
  async function debouncedSetItem(name: string, value: string): Promise<void> {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    pendingValue = value;

    // Set a timeout to set the item after the debounce time has passed
    timeoutId = setTimeout(async () => {
      if (pendingValue !== null) {
        await storageApi.setItem(name, pendingValue);
        pendingValue = null;
      }
    }, options.debounceTime);
  }

  // Create a new storage API with the debounced setItem function
  const debouncedStorageApi: StateStorage = {
    ...storageApi,
    setItem: debouncedSetItem,
  };

  const { debounceTime, ...restOptions } = options;

  // Create and return a JSON storage with the debounced storage API and the rest of the options
  return createJSONStorage(() => debouncedStorageApi, restOptions);
}

const createStore = <T>(
  storageName: string,
  config: MainStateCreator<T>,
  debounced = false
) => {
  return withSelectors(
    create<T>()(
      immer(
        persist(config, {
          name: storageName,
          storage: debounced
            ? createDebouncedJSONStorage(storage, {
                debounceTime: 500,
              })
            : createJSONStorage(() => storage),
          partialize: (state: any) =>
            Object.fromEntries(
              Object.entries(state).filter(
                ([key]) => !["braintreeClient", "formsStatus"].includes(key)
              )
            ),
        })
      )
    )
  );
};

export { createStore };
