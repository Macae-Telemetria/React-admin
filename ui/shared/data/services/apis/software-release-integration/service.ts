import { HttpClient } from "@ui/shared/infra/services/http-client";
import { SoftwareReleaseIntegrationServiceTypes } from "./types";

export class SoftwareReleaseIntegrationService {
  constructor(private readonly httpClient: HttpClient) {}

  async list(): Promise<SoftwareReleaseIntegrationServiceTypes.ListResponse> {
    const response = await this.httpClient.request({
      url: "/software-release-integrations",
      method: "GET",
    });

    if (response.statusCode !== 200) {
      throw new Error("Invalid");
    }

    return response.body;
  }

  async pushOtaUpdate(
    dto: SoftwareReleaseIntegrationServiceTypes.PushOtaUpdate
  ): Promise<void> {

    const response = await this.httpClient.request({
      url: "/software-release/push-ota-update",
      method: "POST",
      body: dto,
    });

    if (response.statusCode > 204) {
      throw new Error(response.body.message || "Invalid");
    }

    return response.body;
  }

  async cancelOtaUpdate(
    integrationId: string
  ): Promise<void> {

    const response = await this.httpClient.request({
      url: `/software-release-integrations/${integrationId}/cancel`,
      method: "PATCH",
    });

    if (response.statusCode > 204) {
      throw new Error(response.body.message || "Invalid");
    }

    return response.body;
  }

  async delete(
    integrationId: string
  ): Promise<void> {

    const response = await this.httpClient.request({
      url: `/software-release-integrations/${integrationId}`,
      method: "DELETE",
    });

    if (response.statusCode > 204) {
      throw new Error(response.body.message || "Invalid");
    }

    return response.body;
  }
}

export default SoftwareReleaseIntegrationService;
