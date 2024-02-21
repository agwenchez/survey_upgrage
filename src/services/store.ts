import { configureStore } from "@reduxjs/toolkit";
import { surveyApi } from "./surveyApi";

const store = configureStore({
  reducer: {
    [surveyApi.reducerPath]: surveyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(surveyApi.middleware),
});

export default store;
