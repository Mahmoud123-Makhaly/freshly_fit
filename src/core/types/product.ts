import type { FacetItemType } from "../types";

export type ProductsSearchParams = {
  page?: number;
  itemsPerPage?: number;
  keyword?: string;
  sort?: string;
  filter?: string;
  fuzzy?: boolean;
  fuzzyLevel?: number;
  categoryId?: string;
  productIds?: string[];
};

export type ProductsFilters = {
  facets: FacetItemType[];
  inStock: boolean;
  branches: string[];
};
