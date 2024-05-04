import { HttpClient } from "@ui/shared/infra/services/http-client";
import { SoftwareReleaseServiceTypes } from "./types";
import { Form } from "react-router-dom";

export class SoftwareReleaseService {
  constructor(private readonly httpClient: HttpClient) {}

  async list(): Promise<SoftwareReleaseServiceTypes.ListResponse> {
    const response = await this.httpClient.request({
      url: "/software-release",
      method: "GET",
    });

    if (response.statusCode !== 200) {
      throw new Error("Invalid");
    }

    return response.body;
  }

  async create(dto: SoftwareReleaseServiceTypes.CreateDto ): Promise<SoftwareReleaseServiceTypes.ListResponse> {

    const formData = new FormData();
    formData.append("version", dto.version);
    formData.append("title", dto.title);
    formData.append("description", dto.description);
    formData.append("binary", dto.binaryFile);

    const response = await this.httpClient.request({
      url: "/software-release",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });

    if (response.statusCode !== 200) {
      throw new Error("Invalid");
    }

    return response.body;
  }
}

export default SoftwareReleaseService;
