import { getUserById, getUsers } from 'api/user/user';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import type { UserStor, UserStoreState } from './type';

const initialState: UserStoreState = {
  users: [],
  isLoading: false,
  user: null,
  total: 0,
};

const useUserStore = create<UserStor>()(
  devtools(
  immer((set) => ({
    ...initialState,
    fetchUsers: async (limit: number | null, page: number) => {
      if (page === 1) {
        set({ isLoading: true });
      }
      try {
        const { users, total } = await getUsers(limit, page);
          set((state) => {
            state.users = page === 1 ? users : [...state.users, ...users];
            state.total = total;
          });
          console.log(users);
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw error;
        }
      } finally {
        set({ isLoading: false });
      }
    },
    fetchOneUser: async (userName) => {
      try {
        const user = await getUserById(userName);
        set({ user: user });
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw error;
        }
      }
    },
  })),
  { name: 'UserStore' }
)
);
export const useUsers = () => useUserStore((state) => state.users);
export const useUserTotal = () => useUserStore((state) => state.total);
export const useUserLoading = () => useUserStore((state) => state.isLoading);
export const getAllUsers = (limit: number | null, page: number) =>
  useUserStore.getState().fetchUsers(limit, page);
export const getOneUser = (userName:string) => useUserStore.getState().fetchOneUser(userName);
export const getSelectedUser = () => useUserStore((state) => state.user);
