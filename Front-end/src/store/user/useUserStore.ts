import { getInfoAuth, getUserById, getUsers } from 'api/user/user';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import type { UserStore, UserStoreState } from './type';
import { userServices } from 'services/userServices';

const initialState: UserStoreState = {
  users: [],
  isLoading: false,
  user: null,
  total: 0,
};

const useUserStore = create<UserStore>()(
  devtools(
    immer((set) => ({
      ...initialState,
      fetchUsers: async (limit: number | null, page: number) => {
        if (page === 1) {
          set({ isLoading: true });
        }
        try {
          const { users, total } = await userServices.fetchUsers(limit,page);
          set((state) => {
            state.users =
              page === 1
                ? users
                : Array.from(new Map([...state.users, ...users].map((u) => [u.id, u])).values());
            state.total = total;
          });
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
          const user = await userServices.fetchOneUser(userName);
          set({ user: user });
        } catch (error: unknown) {
          if (error instanceof Error) {
            throw error;
          }
        }
      },
      fetchAuthUser: async () => {
        try {
          const user = await userServices.fetchAuthUser();
          set({ user: user });
        } catch (error: unknown) {
          if (error instanceof Error) {
            throw error;
          }
        }
      },
    })),
    { name: 'UserStore' },
  ),
);
export const useUsers = () => useUserStore((state) => state.users);
export const useUserTotal = () => useUserStore((state) => state.total);
export const useUserLoading = () => useUserStore((state) => state.isLoading);
export const getAllUsers = (limit: number | null, page: number) =>
  useUserStore.getState().fetchUsers(limit, page);
export const getOneUser = (userName: string) => useUserStore.getState().fetchOneUser(userName);
export const useSelectedUser = () => useUserStore((state) => state.user);
export const getAuthUser = () => useUserStore.getState().fetchAuthUser();
