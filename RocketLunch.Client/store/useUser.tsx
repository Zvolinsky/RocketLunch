import { create } from "zustand";

type User = {
  logged: boolean;
  //   UserData: {
  //     Id: String;
  //     firstName: String;
  //     lastName: String;
  //   };
  logIn: () => void;
  logOut: () => void;
};

const useUser = create<User>()((set) => ({
  logged: false,
  logIn: () => set(() => ({ logged: true })),
  logOut: () => set(() => ({ logged: false })),
}));

export default useUser;
