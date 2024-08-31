/** @see {@link https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes} */
type RouteParams = { id: string };

/** @see {@link https://nextjs.org/docs/app/api-reference/file-conventions/page} */
type SearchParams = { [key: string]: string | string[] | undefined };

export type { RouteParams, SearchParams };
