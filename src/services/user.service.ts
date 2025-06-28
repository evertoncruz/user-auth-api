import 'dotenv/config';
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

export const listUsers = async (maxResults = 1000) => {
  const listUsersResult = await admin.auth().listUsers(maxResults);
  return listUsersResult.users.map(userRecord => ({
    uid: userRecord.uid,
    email: userRecord.email,
    disabled: userRecord.disabled
  }));
};

