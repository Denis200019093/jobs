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

export const companyApi = vacanciesApi.injectEndpoints({
  endpoints: (build) => ({
    getCompanyDetails: build.query<ICompanyProfile, string | undefined>({
      query: (ownerId) => ({
        url: `/company/${ownerId}`,
        method: "GET",
      }),
      providesTags: (resutlt, error, ownerId) => [
        { type: "Company", _id: ownerId },
      ],
    }),
    registerCompany: build.mutation<ICompanyProfile, ICompanyProfile>({
      query: (companyInfo) => ({
        url: `/company`,
        method: "POST",
        body: companyInfo,
      }),
    }),
    updateCompanyInfo: build.mutation<ICompanyProfile, UpdatedCompanyInfo>({
      query: ({ companyId, updatedInfo }) => ({
        url: `/update-company/${companyId}`,
        method: "PATCH",
        body: updatedInfo,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Company", _id: arg.companyId },
      ],
    }),
  }),
});

export const {
  useRegisterCompanyMutation,
  useGetCompanyDetailsQuery,
  useUpdateCompanyInfoMutation,
} = companyApi;
