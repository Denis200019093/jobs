import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./reducers/authSlice";
import { movieReducer } from "./reducers/movieSlice";
import { vacanciesApi } from "./features/vacancies.api";

const rootReducer = combineReducers({
  // [movieApi.reducerPath]: movieApi.reducer,
  [vacanciesApi.reducerPath]: vacanciesApi.reducer,
  auth: authReducer,
  movie: movieReducer,
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
