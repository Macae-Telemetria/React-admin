import { BrowserLocalStorage } from "../infra/repositories/browser-local-storage";
import { AxiosHttpClient } from "../infra/services/axios-http-client";
import { HttpClient } from "../infra/services/http-client";
import AuthenticationService from "./services/apis/authentication/authentication-service";

const apiUrl = "https://telemetria-macae.online/api/v1" 

export const authenticationStorage = new BrowserLocalStorage<{
  accessToken: string;
  user: any;
}>("@admin:accessTokens");

const httpClient: HttpClient = new AxiosHttpClient(
  apiUrl,
  authenticationStorage
);

export function MakeAuthenticationServices(): AuthenticationService {
  const service = new AuthenticationService(httpClient);
  return service;
}

