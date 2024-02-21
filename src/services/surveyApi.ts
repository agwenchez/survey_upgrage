import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
export const surveyApi = createApi({
  reducerPath: "surveyFeedbackApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  tagTypes: ["Survey"],
  endpoints: (builder) => ({
    addSurveyFeedback: builder.mutation({
      query: (body) => ({
        url: "survey/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Survey"],
    }),
  }),
});

export const { useAddSurveyFeedbackMutation } =surveyApi;
