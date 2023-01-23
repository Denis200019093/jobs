import { vacanciesApi } from "./vacancies.api";

export const fileUploadApi = vacanciesApi.injectEndpoints({
  endpoints: (build) => ({
    uploadFile: build.mutation<{ url: string }, FormData>({
      query: (data) => ({
        url: "/upload",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["File"],
    }),
  }),
});

export const { useUploadFileMutation } = fileUploadApi;
