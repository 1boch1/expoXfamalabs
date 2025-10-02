import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import authReducer from './authSlice';
import surveyReducer from './completedSurveysSlice';
import { surveyApi } from './todoSurveysApi';

export const store = configureStore({
    reducer: {
        survey: surveyReducer, // sono i completed survey (quindi array String di ID)
        auth: authReducer,
        [surveyApi.reducerPath]: surveyApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(surveyApi.middleware)
            .concat(authApi.middleware)
});

// tipi per TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
