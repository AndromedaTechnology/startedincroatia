export interface Link {
  _id: string;
  name?: string;
  description?: string;
  href?: string;
  avatar_url?: string;
  favicon_url?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface LinkState {
  links: Array<Link>;
  isLoading: boolean;
}
