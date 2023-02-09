import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "./../../models/User";
import axios from "../../configs/axios";
import { ISignInData, ISignUpData } from "../../models/Auth";

export const handleLogin = createAsyncThunk(
  "auth/handleLogin",
  async (params: ISignInData) => {
    const { data } = await axios.post<IUser>("/auth/login", params);
    return data;
  }
);

export const handleRegister = createAsyncThunk(
  "auth/handleregister",
  async (params: ISignUpData) => {
    const { data } = await axios.post<IUser>("/auth/register", params);
    return data;
  }
);

export const handleGetMe = createAsyncThunk("auth/handleGetMe", async () => {
  const { data } = await axios.get<IUser>("/auth/me");
  return data;
});

interface IState {
  user: IUser | null;
  refetchUser: boolean;
  status: "loading" | "success" | "rejected";
}

const initialState: IState = {
  user: null,
  refetchUser: false,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLogOut(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleLogin.pending, (state) => {
      state.status = "loading";
      state.user = null;
    });
    builder.addCase(handleLogin.fulfilled, (state, action) => {
      state.status = "success";
      state.user = action.payload;
    });
    builder.addCase(handleLogin.rejected, (state) => {
      state.status = "rejected";
      state.user = null;
    });
    builder.addCase(handleRegister.pending, (state) => {
      state.status = "loading";
      state.user = null;
    });
    builder.addCase(handleRegister.fulfilled, (state, action) => {
      state.status = "success";
      state.user = action.payload;
    });
    builder.addCase(handleRegister.rejected, (state) => {
      state.status = "rejected";
      state.user = null;
    });
    builder.addCase(handleGetMe.pending, (state) => {
      state.status = "loading";
      state.user = null;
    });
    builder.addCase(handleGetMe.fulfilled, (state, action) => {
      state.status = "success";
      state.user = action.payload;
    });
    builder.addCase(handleGetMe.rejected, (state) => {
      state.status = "rejected";
      state.user = null;
    });
  },
});

export const { handleLogOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
