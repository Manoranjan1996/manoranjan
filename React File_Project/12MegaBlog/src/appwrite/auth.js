import conf from "../conf/Conf";

import { Clint, Account, ID } from "appwrite";

export class AuthService {
  Client = new this.Client();
  account;

  constructor() {
    this.Client.setEndpoint(conf.appwrteUrl).setProject(conf.appwrteProjectId);
    this.account = new Account(this.Client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // return userAccount;
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser ::error", error);
    }
    return null;
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout ::error", error);
    }
  }
}

const AuthService = new AuthService();

export default AuthService;
