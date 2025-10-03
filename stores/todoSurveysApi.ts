import { createApi } from '@reduxjs/toolkit/query/react';
import { Survey } from "../types/survey";
import { customBaseQueryAuth } from "./customBaseQueryAuth";

export const surveyApi = createApi({
  reducerPath: 'surveyApi',
  baseQuery: customBaseQueryAuth,
  endpoints: (builder) => ({
    getSurveys: builder.query<Survey[], void>({ // la definizione di tipo serve poi ...
      query: () => 'surveys',
    }),
    getSurveyById: builder.query<Survey, string>({
      query: (id) => `surveys/${id}`,
    }),
  }),
});

// hooks auto-generati da RTK Query
export const { useGetSurveysQuery, useGetSurveyByIdQuery } = surveyApi;

/*
SIMULO LO Swagger:

openapi: 3.0.0
info:
  title: Survey API
  version: 1.0.0
paths:
 ...

*/