import { getInfoAuth, getUserById, getUsers } from 'api/user';

export const userServices = {
  async fetchUsers(limit: number | undefined, page: number) {
    return await getUsers(limit, page);
  },
  async fetchOneUser(userName: string) {
    return await getUserById(userName);
  },
  async fetchAuthUser() {
    return await getInfoAuth();
  },
};
