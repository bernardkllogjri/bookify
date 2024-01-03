import { createStore } from "@/app/__shared/store/config";
import { withZustandards } from 'zustand-ards';

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

export const useUserStore = withZustandards(
  createStore<State & Actions>("user-storage", (set) => ({
    users: [],
    setUsers: (users) => {
      set({ users });
    },
  }))
);
