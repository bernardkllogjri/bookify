import { createSelectors, createStore } from "@/app/__shared/store/config";

type State = {
  users: {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
  }[];
};

type Actions = {
  setUsers: (users: {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
  }[]) => void;
};

export const useUserStore = createSelectors(
  createStore<State & Actions>("user-storage", (set) => ({
    users: [],
    setUsers: (users) => {
      set({ users });
    },
  }))
);
