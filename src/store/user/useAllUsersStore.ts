import { fundUser, getAllUsers } from 'api/user/user';
import { create } from 'zustand';

import type { IInitialState, storeState } from './type';

const initialState: storeState = {
  users: [],
  isLoading: false,
  user:null,
};

const useUsersStore = create<IInitialState>()((set,get) => ({
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
export const useUsers = () => useUsersStore((state) => state.users);
export const useIsLoading = () => useUsersStore((state) => state.isLoading);
export const fetchUsers = () => useUsersStore.getState().fetchUsers();
export const fetchOneUser = (id:number) => useUsersStore.getState().fetchOneUser(id);
export const useUserId = () => useUsersStore((state) => state.user);