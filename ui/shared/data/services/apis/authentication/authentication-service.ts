import { HttpClient } from "@ui/shared/infra/services/http-client";
import { AuthenticationTypes } from "./authentication-types";

export class AuthenticationService {
  constructor(private readonly httpClient: HttpClient) {}

  async signin(data: {
    username: string;
    password: string;
  }): Promise<AuthenticationTypes.SigninResponse> {
    const response = await this.httpClient.request({
      url: "/auth/admin/signin",
      method: "POST",
      body: data,
    });

    if (response.statusCode !== 200) {
      throw new Error("Invalid");
    }

    return response.body;
  }

  async verifyToken(accessToken: string): Promise<any> {
    const response = await this.httpClient.request({
      url: "/auth/admin/profile",
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (response.statusCode !== 200) {
      throw new Error("Invalid");
    }

    return response.body;
  }
}

export default AuthenticationService;
