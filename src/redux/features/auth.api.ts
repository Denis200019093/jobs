import { ISignUpData } from "../../models/Auth";
import { IUser } from "../../models/User";
import { vacanciesApi } from "./vacancies.api";

export const authApi = vacanciesApi.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<IUser, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: (result, error, args) => [
        { type: "User" },
        { type: "User", id: "LOGIN" },
      ],
    }),
    login: build.mutation<IUser, { email: string; password: string }>({
      query: (emailPassOfUser) => ({
        url: "/auth/login",
        method: "POST",
        body: emailPassOfUser,
      }),
      // invalidatesTags: (result, error, arg) => [{ type: "User", id: "LOGIN" }],
    }),
    register: build.mutation<IUser, ISignUpData>({
      query: (registerData) => ({
        url: "/auth/register",
        method: "POST",
        body: registerData,
      }),
      // invalidatesTags: (result, error, arg) => [{ type: "User", id: "LOGIN" }],
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: "/",
        method: "POST",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "User", id: "LOGIN" }],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetMeQuery, useLazyGetMeQuery, useLogoutMutation } = authApi;
