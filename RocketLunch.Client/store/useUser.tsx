import { create } from "zustand";

type User = {
  logged: boolean;
  UserData: {
    Id: String | null;
    firstName: String | null;
    lastName: String | null;
    admin: boolean | null;
    orderer: boolean | null;
  };
  logIn: () => void;
  logOut: () => void;
  fetchUser: (data: any) => void;
};

const useUser = create<User>()((set) => ({
  logged: false,
  UserData: {
    Id: null,
    firstName: null,
    lastName: null,
    admin: null,
    orderer: null,
  },
  logIn: () => set(() => ({ logged: true })),
  logOut: () => set(() => ({ logged: false })),
  fetchUser: (data) =>
    set((state) => ({
      UserData: {
        ...state.UserData,
        Id: data.userId,
        firstName: data.firstName,
        lastName: data.lastName,
        admin: data.admin,
        orderer: data.orderer,
      },
    })),
}));

export default useUser;
