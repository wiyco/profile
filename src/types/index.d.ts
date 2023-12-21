type Archive = {
  title: string;
  thumbnail: string;
  url: string;
};

type RouteParams = { id: string };

type SearchParams = { [key: string]: string | string[] | undefined };

export type { Archive, RouteParams, SearchParams };
