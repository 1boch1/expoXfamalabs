import { configureStore } from '@reduxjs/toolkit';
import surveyReducer from './surveySlice';

// "store" è lo stato che vogliamo comporre
export const store = configureStore({
    reducer: { // che in realtà sono possibilmente di più, quidni "reducers"
        survey: surveyReducer, // reducer questionari
    },
});

// tipi per TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 
