import {
  IUser,
  UserInfoForUpdate,
  ICompanyProfile,
  ISaveVacancy,
} from "../../models/User";
import { IVacancy } from "../../models/Vacancy";
import { vacanciesApi } from "./vacancies.api";

interface IPa {
  success: boolean;
}

interface IDa {
  data: IPa;
}

export const userApi = vacanciesApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<IUser, void>({
      query: () => ({
        url: `/auth/me`,
      }),
      providesTags: () => [{ type: "User" }],
    }),
    updateUserInfo: build.mutation<IDa, UserInfoForUpdate>({
      query: ({ updatedInfo, userId }) => ({
        url: `/update-user-info/${userId}`,
        method: "PATCH",
        body: updatedInfo,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "User", _id: arg.userId },
      ],
    }),
    getSavedVacancies: build.query<IVacancy[], string[]>({
      query: (idSavedVacancies) => ({
        url: `/saved-vacancies`,
        params: {
          idSavedVacancies,
        },
      }),
    }),
    saveVacancy: build.mutation<IDa, ISaveVacancy>({
      query: ({ vacancyId, userId }) => ({
        url: `/save-vacancy/${userId}/${vacancyId}`,
        method: "PATCH",
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "User", _id: arg.userId },
      ],
    }),
    fetchCandidateDetails: build.query<IUser, string | undefined>({
      query: (id: string) => ({
        url: `/candidate/${id}`,
      }),
      providesTags: (result, error, userId) => [{ type: "User", id: userId }],
    }),
    fetchCompanyDetails: build.query<ICompanyProfile, string | undefined>({
      query: (userId: string) => ({
        url: `/company/${userId}`,
      }),
      providesTags: (result, error, userId) => [{ type: "User", id: userId }],
    }),
  }),
});

export const {
  useUpdateUserInfoMutation,
  useFetchCandidateDetailsQuery,
  useFetchCompanyDetailsQuery,
  useSaveVacancyMutation,
  useGetSavedVacanciesQuery,
  useGetUserQuery,
} = userApi;
