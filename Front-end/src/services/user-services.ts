import { getInfoAuth, getUserByName, getUsers } from 'api/user';

export const userServices = {
  async fetchUsers(limit: number | undefined, page: number) {
    return await getUsers(limit, page);
  },
  async fetchOneUser(userName: string) {
    return await getUserByName(userName);
  },
  async fetchAuthUser() {
    return await getInfoAuth();
  },
};
