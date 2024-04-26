type Archive = {
  title: string;
  thumbnail: string;
  isOGImage?: boolean;
  url: string;
  year?: number | null;
};

type RouteParams = { id: string };

type SearchParams = { [key: string]: string | string[] | undefined };

export type { Archive, RouteParams, SearchParams };
