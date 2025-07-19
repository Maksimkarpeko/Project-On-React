import { findUser, getAllUsers } from 'api/user/user';
import { create } from 'zustand';

import type { UserStor, UserStoreState } from './type';
import { immer } from 'zustand/middleware/immer';

const initialState: UserStoreState = {
  users: [],
  isLoading: false,
  user:null,
  total:0
};

const useUserStore = create<UserStor>()(immer((set) => ({
  ...initialState,
  fetchUsers: async (limit:number|null = 30,page:number= 1 ) => {
		set({isLoading:true})
		try {
			const {users, total} = await getAllUsers(limit,page);
			if(users){
				set((state) => {
				if (page === 1) {
					state.users = users;
				} else {
					state.users.push(...users);
				}
				state.total = total;
				});
			}
		} catch (error:unknown) {
			if (error instanceof Error){
				console.error(error.message)
			}
		}finally{
			set({isLoading:false})
		}
  },
  fetchOneUser: async (id) =>{
		try {
			const user = await findUser(id);
			if(user){
				set({user:user})
			}
		} catch (error:unknown) {
			if (error instanceof Error){
				console.error(error.message)
			}
		}
  }
})));
export const useUsers = () => useUserStore((state) => state.users);
export const useUserTotal = () => useUserStore((state) => state.total);
export const useUserLoading = () => useUserStore((state) => state.isLoading);
export const fetchUsers = (limit:number|null,page:number) => useUserStore.getState().fetchUsers(limit,page);
export const fetchOneUser = (id:number) => useUserStore.getState().fetchOneUser(id);
export const useSelectedUser = () =>useUserStore((state) => state.user);