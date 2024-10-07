import { z } from "zod";

const paginationApiRequest = z.object({
  /* + Controlled in the database */
  limit: z.coerce.number().positive().catch(10),
  offset: z.coerce.number().positive().catch(0),
});

type PaginationApiRequest = z.infer<typeof paginationApiRequest>;
type PaginationApiRequestParams = keyof PaginationApiRequest;

type PaginationApiResponse<T> = {
  results: T[];
  count: number;
};

export { paginationApiRequest };
export type { PaginationApiRequest, PaginationApiRequestParams, PaginationApiResponse };
