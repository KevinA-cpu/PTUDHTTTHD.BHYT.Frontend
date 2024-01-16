import { create } from "zustand";
import { getFromLocalStorage } from "../helpers/localStorage";

interface IToken {
  accessToken: string;
  expiredAt: string;
  refreshToken: string;
}

interface IAccount {
  id: string;
  username: string;
}

interface IState {
  token: IToken | null;
  account: IAccount | null;
  userId: number | null;
  setToken: (token: IToken | null) => void;
  setAccount: (account: IAccount | null) => void;
  setUserId: (userId: number | null) => void;
}

export const useStore = create<IState>()((set) => ({
  token: {
    accessToken: getFromLocalStorage("token"),
    expiredAt: getFromLocalStorage("expiredAt"),
    refreshToken: getFromLocalStorage("refreshToken"),
  },
  account: getFromLocalStorage("account"),
  userId: getFromLocalStorage("userId"),
  setToken: (token) => set((state) => ({ ...state, token })),
  setAccount: (account) => set((state) => ({ ...state, account })),
  setUserId: (userId) => set((state) => ({ ...state, userId })),
}));
