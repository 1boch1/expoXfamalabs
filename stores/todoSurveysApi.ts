import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Survey
{
    id: string;
    name: string;
    fields: {
        [key: string]: string[];
    };
}

export const surveyApi = createApi({
    reducerPath: 'surveyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getSurveys: builder.query<Survey[], void>({
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
SIMULO:

openapi: 3.0.0
info:
  title: Survey API
  version: 1.0.0
paths:
  /surveys:
    get:
      summary: Get all surveys
      responses:
        '200':
          description: List of surveys
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Survey'
  /surveys/{id}:
    get:
      summary: Get survey by ID
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Single survey
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Survey'

components:
  schemas:
    Survey:
      type: object
      required:
        - id
        - name
        - fields
      properties:
        id:
          type: string
        name:
          type: string
        fields:
          type: object
          additionalProperties:
            type: array
            items:
              type: string

*/