const paginationSettings = {
  itemsPerPage: Number(process.env.NEXT_PUBLIC_PAGINATION_LIMIT) || 3,
};

export { paginationSettings };
