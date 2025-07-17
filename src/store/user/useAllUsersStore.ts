import { fundUser, getAllUsers } from 'api/user/user';
import { create } from 'zustand';

import type { IInitialState, storeState } from './type';

const initialState: storeState = {
  users: [],
  isLoading: false,
  user:null,
  total:0
};

const useAllUsersStore = create<IInitialState>()((set) => ({
  ...initialState,
  fetchUsers: async (limit = 208 ) => {
		set({isLoading:true})
		try {
			const {users, total} = await getAllUsers(limit);
			if(users){
				set({users,total} )
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
			const user = await fundUser(id);
			if(user){
				set({user:user})
			}
		} catch (error:unknown) {
			if (error instanceof Error){
				console.error(error.message)
			}
		}
  }
}));
export const useUsers = () => useAllUsersStore((state) => state.users);
export const useTotal = () => useAllUsersStore((state) => state.total);
export const useIsLoading = () => useAllUsersStore((state) => state.isLoading);
export const fetchUsers = (limit:number) => useAllUsersStore.getState().fetchUsers(limit);
export const fetchOneUser = (id:number) => useAllUsersStore.getState().fetchOneUser(id);
export const useUserId = () =>useAllUsersStore((state) => state.user);