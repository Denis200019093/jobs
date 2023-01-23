import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./reducers/authSlice";
import { snackbarReducer } from "./reducers/snackbarSlice";
import { imagesReducer } from "./reducers/imagesSlice";
import { vacanciesApi } from "./features/vacancies.api";
import { modalReducer } from "./reducers/modalSlice";

const rootReducer = combineReducers({
  [vacanciesApi.reducerPath]: vacanciesApi.reducer,
  snackbar: snackbarReducer,
  modal: modalReducer,
  auth: authReducer,
  images: imagesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(vacanciesApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
