import { BrowserLocalStorage } from "../infra/repositories/browser-local-storage";
import { AxiosHttpClient } from "../infra/services/axios-http-client";
import { HttpClient } from "../infra/services/http-client";
import AuthenticationService from "./services/apis/authentication/authentication-service";
import SoftwareReleaseIntegrationService from "./services/apis/software-release-integration/service";
import SoftwareReleaseService from "./services/apis/software-release/service";
import StationService from "./services/apis/station/service";

const apiUrl = "https://telemetria-macae.online/api/v1" // 'http://localhost:9000/api/v1' //

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

export function MakeSoftwareReleaseService(): SoftwareReleaseService {
  const service = new SoftwareReleaseService(httpClient);
  return service;
}

export function MakeSoftwareReleaseIntegrationService(): SoftwareReleaseIntegrationService {
  const service = new SoftwareReleaseIntegrationService(httpClient);
  return service;
}


export function MakeStationService(): StationService {
  const service = new StationService(httpClient);
  return service;
}


