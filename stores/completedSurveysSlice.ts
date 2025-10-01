import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// zod: obbligatorio o no?, aggiungere input testo (zod lunghezza massima)

interface SurveyState
{
    completedSurveys: string[];
}

const initialState: SurveyState = {
    completedSurveys: [],
};

const surveySlice = createSlice({
    name: 'survey',
    initialState,
    reducers: {
        markAsCompleted: (state, action: PayloadAction<string>) =>
        {
            if (!state.completedSurveys.includes(action.payload))
            {
                state.completedSurveys.push(action.payload);
            }
        },
    },
});

export const { markAsCompleted } = surveySlice.actions;
export default surveySlice.reducer;