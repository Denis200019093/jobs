export interface FilterValues {
  years: number[];
  rating: number[];
  budget: number[];
  dues: number[];
  startYear: string;
  endYear: string;
  type: string;
  genres: string[];
  country: string;
  status: string;
  filterBy: string;
}

export interface SortValues {
  sortBy: string;
  itemsPerPage: string;
}