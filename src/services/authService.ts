import { ISignInData } from "../models/Auth";
import { IUser } from "../models/User";

import { movieApi } from "./movieService";

export const authApi = movieApi.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<IUser, string>({
      query: (id: string) => ({
        url: "/auth/me",
        params: {
          userId: id,
        },
      }),
      // invalidatesTags: result => ['Auth']
    }),
    signIn: build.mutation<IUser, ISignInData>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
    // signUp: build.mutation({
    //   query: (body) => ({
    //       url: '/auth/register',
    //       method: 'POST',
    //       body,
    //   }),
    //   invalidatesTags: ['Auth']
    // }),
    // deleteProduct: build.mutation({
    //     query: (id) => ({
    //         url: `goods/${id}`,
    //         method: 'DELETE',
    //     }),
    //     invalidatesTags: [{type: 'Products', id: 'LIST'}]
    // })
  }),
});

export const { useGetMeQuery, useSignInMutation } = authApi;
