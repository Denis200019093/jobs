import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  avatarURL: string;
  backgroundURL: string;
  pdf: string;
}

const initialState: IState = {
  avatarURL: "",
  backgroundURL: "",
  pdf: "",
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    uploadAvatarURL(state, action: PayloadAction<string>) {
      state.avatarURL = action.payload;
    },
    uploadBackgroundURL(state, action: PayloadAction<string>) {
      state.backgroundURL = action.payload;
    },
    uploadPdf(state, action: PayloadAction<string>) {
      state.pdf = action.payload;
    },
  },
});

export const { uploadAvatarURL, uploadBackgroundURL, uploadPdf } = imagesSlice.actions;
export const imagesReducer = imagesSlice.reducer;
