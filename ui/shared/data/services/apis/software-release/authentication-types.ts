import { SoftwareRelease } from "@ui/shared/domain/entities/SoftwareRelease";

export namespace SoftwareReleaseServiceTypes {
  export type ListResponse = SoftwareRelease[]

  export type CreateDto = {
    version: string;
    title: string;
    description: string;
    binaryFile: File;
  }
}
