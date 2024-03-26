import CloudDb from "../lib/database";
import { firebaseFirestore } from "../lib/firebase";
import usersRepository from "../repositories/users";

export async function getUsers(ids?: number[]) {
  const connection = new CloudDb(firebaseFirestore);
  const products = await usersRepository(connection).getUsers(ids);
  
  return products as TUser[];
}

export async function getUser(id: number) {
  const connection = new CloudDb(firebaseFirestore);
  const product = await usersRepository(connection).getUser(id);

  return product as TUser;
}