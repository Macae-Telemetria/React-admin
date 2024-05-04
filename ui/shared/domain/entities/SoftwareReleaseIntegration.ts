export enum SoftwareReleaseInterationStatus {
  PENDING = 0,
  IN_PROGRESS = 1,
  INSTALING = 2,
  CANCELLED = 3,
  FAILED = 4,
  SUCCESS = 5,
}


export class SoftwareReleaseIntegration {
  id: string;

  version: string;

  stationId: number;

  progress: number;

  status: SoftwareReleaseInterationStatus;

  message: string;

  // Virtual

  stationName?: string;

  constructor(props: SoftwareReleaseIntegration) {
    Object.assign(this, props);
  }
}
