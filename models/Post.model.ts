type MediaType = {
  data: [];
};

export type PostAttributes = {
  publishedAt: string;
  title: string;
  description: string;
  media?: MediaType;
};

export type PostType = {
  id: number;
  attributes: PostAttributes;
};

export interface Announcement {
  id: number;
  title: string;
  description: string;
  creator: string;
  date: string;
  media: string;
}
