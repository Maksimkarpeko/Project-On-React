import { getAllUsers } from 'api/user/user';
import { create } from 'zustand';

import type { IInitialState, storeState } from './type';

const initialState: storeState = {
  user: [],
  isLoading: false,
};

const useUsersStore = create<IInitialState>()((set) => ({
  ...initialState,
  fetchUser: async () => {
		set({isLoading:true})
		try {
			const users = await getAllUsers();
			if(users){
				set({user:users})
			}
		} catch (error:unknown) {
			if (error instanceof Error){
				console.error(error.message)
			}
		}finally{
			set({isLoading:false})
		}
  },
}));
export const useUser = () => useUsersStore((state) => state.user);
export const useIsLoading = () => useUsersStore((state) => state.isLoading);
export const fetchUser = () => useUsersStore.getState().fetchUser();