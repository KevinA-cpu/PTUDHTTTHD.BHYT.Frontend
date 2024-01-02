import { create } from "zustand";
import { persist } from "zustand/middleware";
interface IToken {
  accessToken: string;
  expiredAt: string;
  issuedAt: string;
  refreshToken: string;
}

interface IAccount {
  id: string;
  username: string;
}

interface IState {
  token: IToken | null;
  account: IAccount | null;
  setToken: (token: IToken | null) => void;
  setAccount: (account: IAccount | null) => void;
}

export const useStore = create<IState>()(
  persist(
    (set) => ({
      token: null,
      account: null,
      setToken: (token) => set((state) => ({ ...state, token })),
      setAccount: (account) => set((state) => ({ ...state, account })),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useStore;
