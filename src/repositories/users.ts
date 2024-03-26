import type CloudDb from "../lib/database";

const usersRepository = (db: CloudDb) => ({
  async getUsers(ids?: number[]) {
    const users = (ids && ids.length < 30)
      ? await db.getSomeUsers(ids)
      : await db.getUsers();

    if (!users?.length) return null;

    return users;
  },

  async getUser(id: number) {
    const user = await db.getUserById(id);
    if (!user) return null;

    return user;
  }
});

export default usersRepository;