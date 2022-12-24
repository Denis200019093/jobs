import { ISignInData } from "../models/Auth";
import { IUser } from "../models/User";

import { movieApi } from "./movieService";

export const fileUploadApi = movieApi.injectEndpoints({
  endpoints: (build) => ({
    uploadFile: build.mutation<File, File>({
      query: (body) => ({
        url: "/upload",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

// export const {  } = fileUploadApi;
