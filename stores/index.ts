import { configureStore } from '@reduxjs/toolkit';
import surveyReducer from './completedSurveysSlice';
import { surveyApi } from './todoSurveysApi';

export const store = configureStore({
    reducer: {
        survey: surveyReducer, // sono i completed survey (quindi array String di ID)
        [surveyApi.reducerPath]: surveyApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(surveyApi.middleware),
});

// tipi per TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
