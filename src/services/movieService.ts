import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie } from "../models/Movie";

export const movieApi = createApi({
  reducerPath: "movie",
  tagTypes: ["Movie", "Auth"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4444",
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem("token");

      if (token) headers.set("Authorization", token);

      return headers;
    },
  }),
  endpoints: (build) => ({
    fetchAllMovies: build.query<IMovie[], number>({
      query: (limit: number = 5) => ({
        url: `/movies`,
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ["Movie"],
    }),
    searchMovie: build.query<string, string>({
      query: (value: string) => ({
        url: `/search`,
        body: {
          searchValue: value
        }
      }),
      providesTags: (result) => ["Movie"],
    }),
    // addProduct: build.mutation({
    //     query: (body) => ({
    //         url: 'goods',
    //         method: 'POST',
    //         body,
    //     }),
    //     invalidatesTags: [{type: 'Products', id: 'LIST'}]
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

export const { useFetchAllMoviesQuery, useSearchMovieQuery } = movieApi;
