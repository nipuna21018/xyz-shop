import { AuthTokens } from "../interfaces/auth-token.interface";
import { STORAGE_KEY_AUTH_TOKENS } from "../constants";
import StorageService from "../../shared/services/storage.service";

const AuthStorageService = {
    
    /** Set auth token in local storage  */
  setAuthTokens: (authTokens: AuthTokens): void => {
    StorageService.setItem(STORAGE_KEY_AUTH_TOKENS, authTokens);
  },

  /** Get stored auth tokens from local storage */
  getAuthTokens: (): AuthTokens => {
    return StorageService.getItem<AuthTokens>(STORAGE_KEY_AUTH_TOKENS) || {} as AuthTokens;
  },

  /** Remove auth tokens from storage */
  removeAuthTokens: (): void => {
    StorageService.removeItem(STORAGE_KEY_AUTH_TOKENS);
  }
};

export default AuthStorageService;