import { fundUser, getAllUsers } from 'api/user/user';
import { create } from 'zustand';

import type { IInitialState, storeState } from './type';

const initialState: storeState = {
  users: [],
  isLoading: false,
  user:null,
};

const useAllUsersStore = create<IInitialState>()((set) => ({
  ...initialState,
  fetchUsers: async () => {
		set({isLoading:true})
		try {
			const users = await getAllUsers();
			if(users){
				set({users:users})
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
			console.log(user);
		} catch (error:unknown) {
			if (error instanceof Error){
				console.error(error.message)
			}
		}
  }
}));
export const useUsers = () => useAllUsersStore((state) => state.users);
export const useIsLoading = () => useAllUsersStore((state) => state.isLoading);
export const fetchUsers = () => useAllUsersStore.getState().fetchUsers();
export const fetchOneUser = (id:number) => useAllUsersStore.getState().fetchOneUser(id);
export const useUserId = () =>useAllUsersStore((state) => state.user);