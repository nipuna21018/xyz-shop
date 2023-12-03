import { AuthTokens } from "../interfaces/auth-token.interface";
import { STORAGE_KEY_AUTH_TOKENS, STORAGE_KEY_USER } from "../constants";
import StorageService from "../../shared/services/storage.service";
import { User } from "../interfaces/user.interface";

const AuthStorageService = {

  /** Set auth token in local storage  */
  setAuthTokens: (authTokens: AuthTokens): void => {
    StorageService.setItem(STORAGE_KEY_AUTH_TOKENS, authTokens);
  },

  /** Get stored auth tokens from local storage */
  getAuthTokens: (): AuthTokens => {
    return StorageService.getItem<AuthTokens>(STORAGE_KEY_AUTH_TOKENS) || {} as AuthTokens;
  },

  /** Set user in local storage  */
  setUserProfile: (user: User): void => {
    StorageService.setItem(STORAGE_KEY_USER, user);
  },

  /** Get stored user from local storage */
  getUserProfile: (): User => {
    return StorageService.getItem<User>(STORAGE_KEY_USER) || {} as User;
  },

  /** Remove auth tokens from storage */
  removeAuthTokens: (): void => {
    StorageService.removeItem(STORAGE_KEY_AUTH_TOKENS);
    StorageService.removeItem(STORAGE_KEY_USER);
  }
};

export default AuthStorageService;