import { getUserById, getUsers } from 'api/user/user';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import type { UserStor, UserStoreState } from './type';

const initialState: UserStoreState = {
  users: [],
  isLoading: false,
  user: null,
  total: 0,
};

const useUserStore = create<UserStor>()(
  immer((set) => ({
    ...initialState,
    fetchUsers: async (limit: number | null, page: number) => {
      if (page === 1) {
        set({ isLoading: true });
      }
      try {
        const { users, total } = await getUsers(limit, page);
        if (users) {
          set((state) => {
            page === 1 ? (state.users = users) : (state.users = [...state.users, ...users]);
            state.total = total;
          });
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw error;
        }
      } finally {
        set({ isLoading: false });
      }
    },
    fetchOneUser: async (id) => {
      try {
        const user = await getUserById(id);
        set({ user: user });
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw error;
        }
      }
    },
  })),
);
export const useUsers = () => useUserStore((state) => state.users);
export const useUserTotal = () => useUserStore((state) => state.total);
export const useUserLoading = () => useUserStore((state) => state.isLoading);
export const getAllUsers = (limit: number | null, page: number) =>
  useUserStore.getState().fetchUsers(limit, page);
export const getOneUser = (id: number) => useUserStore.getState().fetchOneUser(id);
export const getSelectedUser = () => useUserStore((state) => state.user);
