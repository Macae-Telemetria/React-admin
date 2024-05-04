import { SoftwareReleaseIntegration } from "@ui/shared/domain/entities/SoftwareReleaseIntegration";

export namespace SoftwareReleaseIntegrationServiceTypes {
  export type ListResponse = SoftwareReleaseIntegration[]

  export type PushOtaUpdate = {
    version: string;
    stationId: number;
  }
}
