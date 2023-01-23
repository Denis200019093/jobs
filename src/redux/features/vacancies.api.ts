import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../models/User";
import { IVacancy } from "../../models/Vacancy";

interface FilteringVacancyScheme {
  search_value: string;
  industries?: string[];
  locations?: string[];
  positions?: string[];
  types?: string[];
}

export const vacanciesApi = createApi({
  reducerPath: "vacancies",
  tagTypes: ["Vacancies", "Auth", "File", "User"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4444",
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem("token");

      if (token) headers.set("Authorization", token);

      return headers;
    },
  }),
  endpoints: (build) => ({
    fetchAllVacancies: build.query<IVacancy[], number>({
      query: (limit: number = 5) => ({
        url: `/vacancies`,
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ["Vacancies"],
    }),
    createVacancy: build.mutation<IVacancy[], IVacancy>({
      query: (vacancy) => ({
        url: "/vacancies",
        method: "POST",
        body: vacancy,
      }),
      // providesTags: (result) => ["Vacancies"],
    }),
    fetchVacancyDetails: build.query<IVacancy, string | undefined>({
      query: (id: string) => ({
        url: `/vacancies/${id}`,
      }),
      providesTags: (result) => ["Vacancies"],
    }),
    filteringVacancies: build.query<IVacancy[], FilteringVacancyScheme>({
      query: ({ search_value, industries, locations, positions, types }) => ({
        url: `/result?search_query=${search_value}&industries=${industries}&locations=${locations}&positions=${positions}&types=${types}`,
      }),
      providesTags: (result) => ["Vacancies"],
    }),
    searchingCandidates: build.query<IUser[], string>({
      query: (search_value) => ({
        url: `/candidates?search_query=${search_value}`,
      }),
      providesTags: (result) => ["Vacancies"],
    }),
    autocompleteVacancies: build.query<readonly IVacancy[], string>({
      query: (search_value) => ({
        url: `/vacancies/autocomplete?search_query=${search_value}`,
      }),
      providesTags: (result) => ["Vacancies"],
    }),
    searchingVacancies: build.query<IVacancy[], string>({
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
  useSearchingVacanciesQuery,
  useCreateVacancyMutation,
  useFetchVacancyDetailsQuery,
  useAutocompleteVacanciesQuery,
  useLazyAutocompleteVacanciesQuery,
  useSearchingCandidatesQuery
} = vacanciesApi;
