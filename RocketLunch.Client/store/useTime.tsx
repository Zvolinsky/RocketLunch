import { create } from "zustand";

type Time = {
  after: boolean | null;
  setAfter: (bool: boolean) => void;
};

export const useTime = create<Time>()((set) => ({
  after: null,
  setAfter: (bool) => set(() => ({ after: bool })),
}));
