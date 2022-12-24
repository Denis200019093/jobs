import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VacancyScheme } from "../../models/Vacancy";

interface FilteringVacancyScheme {
  search_value: string;
  tags?: string[];
  positions?: string[];
  placesToWork?: string[];
}

export const vacanciesApi = createApi({
  reducerPath: "vacancies",
  tagTypes: ["Vacancies", "Auth"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4444",
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem("token");

      if (token) headers.set("Authorization", token);

      return headers;
    },
  }),
  endpoints: (build) => ({
    fetchAllVacancies: build.query<VacancyScheme[], number>({
      query: (limit: number = 5) => ({
        url: `/vacancies`,
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ["Vacancies"],
    }),
    filteringVacancies: build.query<VacancyScheme[], FilteringVacancyScheme>({
      query: ({ search_value, tags, positions, placesToWork }) => ({
        url: `/filter?search_query=${search_value}&tags=${tags}&positions=${positions}&placesToWork=${placesToWork}`,
      }),
      providesTags: (result) => ["Vacancies"],
    }),
    searchingVacancies: build.query<VacancyScheme[], string>({
      query: (search_value) => ({
        url: `/search?search_query=${search_value}`,
      }),
      providesTags: (result) => ["Vacancies"],
    }),
  }),
});

export const {
  useFetchAllVacanciesQuery,
  useFilteringVacanciesQuery,
  useLazyFilteringVacanciesQuery,
  useSearchingVacanciesQuery
} = vacanciesApi;
