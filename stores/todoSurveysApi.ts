import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Survey } from "../types/survey";

export const surveyApi = createApi({
  reducerPath: 'surveyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.19:3000/' }),
  endpoints: (builder) => ({
    getSurveys: builder.query<Survey[], void>({ // la definizione di tipo serve poi ...
      query: () => 'surveys',
    }),
    getSurveyById: builder.query<Survey, string>({ // TODO ricontrolla tipizzazione qui 
      query: (id) => `surveys/${id}`,
    }),
  }),
});

// hooks auto-generati da RTK Query
export const { useGetSurveysQuery, useGetSurveyByIdQuery } = surveyApi;

/*
SIMULO:

openapi: 3.0.0
info:
  title: Survey API
  version: 1.0.0
paths:
 ...

*/