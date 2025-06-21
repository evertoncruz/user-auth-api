import admin from "../firebase/firebase.config";
import { User } from "../models/user.model";

export const createUser = async (user: User) => {
  const createdUser = await admin.auth().createUser({
    email: user.email,
    password: user.password,
  });
  return createdUser;
};

export const getUser = async (uid: string) => {
  return await admin.auth().getUser(uid);
};

export const deleteUser = async (uid: string) => {
  return await admin.auth().deleteUser(uid);
};
