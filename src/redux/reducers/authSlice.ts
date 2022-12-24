import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "./../../models/User";
import axios from "../../configs/axios";
import { ISignInData, ISignUpData } from "../../models/Auth";

export const handleLogin = createAsyncThunk(
  "auth/handleLogin",
  async (params: ISignInData) => {
    const { data } = await axios.post("/auth/login", params);
    return data;
  }
);

export const handleRegister = createAsyncThunk(
  "auth/handleregister",
  async (params: ISignUpData) => {
    const { data } = await axios.post("/auth/register", params);
    return data;
  }
);

export const handleGetMe = createAsyncThunk(
  "auth/handleGetMe",
  async () => {
    const { data } = await axios.get("/auth/me");
    return data;
  }
);

interface IState {
  user: IUser | {};
  status: "loading" | "success" | "rejected";
}

const initialState: IState = {
  user: {},
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleLogin.pending, (state) => {
      state.status = "loading";
      state.user = {};
    });
    builder.addCase(handleLogin.fulfilled, (state, action) => {
      state.status = "success";
      state.user = action.payload;
    });
    builder.addCase(handleLogin.rejected, (state) => {
      state.status = "rejected";
      state.user = {};
    });
    builder.addCase(handleRegister.pending, (state) => {
      state.status = "loading";
      state.user = {};
    });
    builder.addCase(handleRegister.fulfilled, (state, action) => {
      state.status = "success";
      state.user = action.payload;
    });
    builder.addCase(handleRegister.rejected, (state) => {
      state.status = "rejected";
      state.user = {};
    });
    builder.addCase(handleGetMe.pending, (state) => {
      state.status = "loading";
      state.user = {};
    });
    builder.addCase(handleGetMe.fulfilled, (state, action) => {
      state.status = "success";
      state.user = action.payload;
    });
    builder.addCase(handleGetMe.rejected, (state) => {
      state.status = "rejected";
      state.user = {};
    });
  },
});

export const authReducer = authSlice.reducer;
