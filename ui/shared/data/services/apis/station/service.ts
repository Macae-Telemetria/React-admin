import { HttpClient } from "@ui/shared/infra/services/http-client";
import { StationServiceTypes } from "./types";

export class StationService {
  constructor(private readonly httpClient: HttpClient) {}

  async list(): Promise<StationServiceTypes.ListResponse> {
    const response = await this.httpClient.request({
      url: "/admin/stations",
      method: "GET",
    });

    if (response.statusCode !== 200) {
      throw new Error("Invalid");
    }

    return response.body;
  }
}

export default StationService;
