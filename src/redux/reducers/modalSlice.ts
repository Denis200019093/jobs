import { createSlice } from "@reduxjs/toolkit";

interface IState {
  showModal: boolean;
}

const initialState: IState = {
  showModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      state.showModal = true;
    },
    closeModal(state) {
      state.showModal = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
