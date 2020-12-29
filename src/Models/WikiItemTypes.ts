export type WikiItemTypes = {
  title: string;
  type: string;
  _id: string;
  slug: Slug;
  mainImage?: MainImage;
  body?: string[];
  author?: string;
};

export type Slug = {
  source?: string;
  current: string;
  _type?: string;
  maxLength?: number;
};

export type MainImage = {
  asset?: {
    _id?: string;
    url?: string;
  };
};
