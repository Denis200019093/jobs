import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "./../../models/User";
import axios from "../../configs/axios";
import { ISignInData, ISignUpData } from "../../models/Auth";
import { IMovie } from "../../models/Movie";

export const fetchLatestRealeses = createAsyncThunk(
  "movies/fetchLatestRealeses",
  async () => {
    const { data } = await axios.get("/movies/releases");
    return data;
  }
);

export const handleSearchMovie = createAsyncThunk(
  "movies/handleSearchMovie",
  async (obj: { searchValue: string }) => {
    const { data } = await axios.get(`/search/${obj.searchValue}`);
    console.log(data);

    return data;
  }
);

interface IState {
  foundMovies: IUser[] | [];
  latestReleases: IMovie[] | [],
  status: "loading" | "success" | "rejected";
}

const initialState: IState = {
  foundMovies: [],
  latestReleases: [],
  status: "loading",
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLatestRealeses.pending, (state) => {
      state.status = "loading";
      state.latestReleases = [];
    });
    builder.addCase(fetchLatestRealeses.fulfilled, (state, action) => {
      state.status = "success";
      state.latestReleases = action.payload;
    });
    builder.addCase(fetchLatestRealeses.rejected, (state) => {
      state.status = "rejected";
      state.latestReleases = [];
    });
    builder.addCase(handleSearchMovie.pending, (state) => {
      state.status = "loading";
      state.foundMovies = [];
    });
    builder.addCase(handleSearchMovie.fulfilled, (state, action) => {
      state.status = "success";
      state.foundMovies = action.payload;
    });
    builder.addCase(handleSearchMovie.rejected, (state) => {
      state.status = "rejected";
      state.foundMovies = [];
    });
  },
});

export const movieReducer = movieSlice.reducer;
