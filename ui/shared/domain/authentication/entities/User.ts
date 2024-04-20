export interface User {
  id: string;

  name: string;

  email: string;

  password: string;

  role: number;

  status: number;

  imageUrl?: string;

  imagePreviewUrl?: string;
}