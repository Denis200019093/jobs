import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  open: boolean;
  text: string;
  severity: "error" | "warning" | "info" | "success";
}

const initialState: IState = {
  open: false,
  text: "",
  severity: "success",
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    openSnackbar(state, action: PayloadAction<any>) {
      state.open = true;
      state.text = action.payload.text;
      state.severity = action.payload.severity;
    },
    closeSnackbar(state) {
      state.open = false;
    },
  },
});

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;
export const snackbarReducer = snackbarSlice.reducer;
