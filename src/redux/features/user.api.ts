import { DataBooleanResponse } from "../../models/Features";
import {
  IUser,
  UpdatedUserInfo,
  ISaveVacancy,
  UpdatedCompanyInfo,
} from "../../models/User";
import { ICompanyProfile } from "../../models/Company";
import { IVacancy } from "../../models/Vacancy";
import { vacanciesApi } from "./vacancies.api";

export const userApi = vacanciesApi.injectEndpoints({
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUser[], void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: (result, error, args) => ["User"],
      // providesTags: (result, error, args) =>
      //   result
      //     ? [
      //         ...result.map(({ _id }) => ({
      //           type: "User" as const,
      //           _id: "63c5796143cf79bd683b626e",
      //         })),
      //         "User",
      //       ]
      //     : ["User"],
    }),
    getSavedVacancies: build.query<IVacancy[], string[]>({
      query: (idSavedVacancies) => ({
        url: `/saved-vacancies`,
        params: {
          idSavedVacancies,
        },
      }),
    }),
    fetchCandidateDetails: build.query<IUser, string | undefined>({
      query: (id: string) => ({
        url: `/candidate/${id}`,
      }),
      providesTags: (result, error, userId) => [{ type: "User", id: userId }],
    }),
    updateUserInfo: build.mutation<DataBooleanResponse, UpdatedUserInfo>({
      query: ({ updatedInfo, userId }) => ({
        url: `/update-user-info/${userId}`,
        method: "PATCH",
        body: updatedInfo,
      }),
      // invalidatesTags: (result, error, arg) => ["User"],
      invalidatesTags: (result, error, arg) => [
        { type: "User", _id: arg.userId },
      ],
    }),
    saveVacancy: build.mutation<DataBooleanResponse, ISaveVacancy>({
      query: ({ vacancyId, userId }) => ({
        url: `/save-vacancy/${userId}/${vacancyId}`,
        method: "PATCH",
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "User", _id: arg.userId },
      ],
    }),
  }),
});

export const {
  useFetchAllUsersQuery,
  useUpdateUserInfoMutation,
  useFetchCandidateDetailsQuery,
  useSaveVacancyMutation,
  useGetSavedVacanciesQuery,
} = userApi;
