import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PropsToFilterVacancy } from "../../models/Features";
import { IUser } from "../../models/User";
import { IVacancy } from "../../models/Vacancy";

export const vacanciesApi = createApi({
  reducerPath: "vacancies",
  tagTypes: ["Vacancies", "Auth", "File", "User", "Company"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACK_END_API_URL,
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem("token");

      if (token) headers.set("Authorization", token);

      headers.set("Access-Control-Allow-Origin", "*");
      return headers;
    },
  }),
  endpoints: (build) => ({
    fetchAllVacancies: build.query<IVacancy[], number>({
      query: (limit: number = 10) => ({
        url: `/vacancies`,
        params: {
          _limit: limit,
        },
      }),
      providesTags: () => ["Vacancies"],
    }),
    createVacancy: build.mutation<IVacancy[], IVacancy>({
      query: (vacancy) => ({
        url: "/vacancies",
        method: "POST",
        body: vacancy,
      }),
      invalidatesTags: () => ["Vacancies"],
    }),
    fetchVacancyDetails: build.query<IVacancy, string | undefined>({
      query: (id: string) => ({
        url: `/vacancies/${id}`,
      }),
    }),
    filteringVacancies: build.query<IVacancy[], PropsToFilterVacancy>({
      query: ({ search_value, industries, locations, positions, types }) => ({
        url: `/result?search_query=${search_value}&industries=${industries}&locations=${locations}&positions=${positions}&types=${types}`,
      }),
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
  useSearchingCandidatesQuery,
} = vacanciesApi;
