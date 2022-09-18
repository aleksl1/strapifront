import { PostType } from "./Post.model";

export type ParseDateType = {
  (dbDate: string): string;
};

export type PaginationType = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type PostsWithPagination = {
  posts: PostType[];
  pagination: PaginationType;
};
