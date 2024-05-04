export class Station {
  id: number;

  slug: string;

  description: string;

  latitude: string;

  longitude: string;

  isActive: boolean;

  address: string;

  provider: number;

  organizationId?: string;

  imageUrl?: string;

  imagePreviewUrl?: string;

  sponsorId?: string;

  authorId?: string;

  observation: string;

  // Virtual

  isOnline: boolean;

  constructor(props: Station) {
    Object.assign(this, props);
  }
}
