export class SoftwareRelease {
    version: string;
  
    title: string;
  
    description: string;
  
    binaryStoragekey: string;
  
    constructor(props: SoftwareRelease) {
      Object.assign(this, props);
    }
  }
  