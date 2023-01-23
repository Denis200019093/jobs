import { IUser } from "../../models/User";
import { vacanciesApi } from "./vacancies.api";

export const authApi = vacanciesApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<IUser, { email: string, password: string }>({
      query: (emailPassOfUser) => ({
        url: "/auth/login",
        method: "POST",
        body: emailPassOfUser,
      }),
      // providesTags: (result) => ["Auth"],
    }),
    getMe: build.query<IUser, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      // providesTags: (result) => ["Auth"],
    }),
  }),
});

export const { useLoginMutation, useGetMeQuery } = authApi;
