import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// interfaccia singolo questionario
interface Survey
{
    id: string;
    name: string;
    fields: {
        [key: string]: string[];  // ad esempio --> "domanda?": ["si", "no"]
    }; // zod: obbligatorio o no?, aggiungere input testo (zod lunghezza massima)
}

// lo stato dei survey faccio in modo che contenga anche la lista degli id dei questionari 
// completati e lo stato in base alla chiamata API (che farò fittizia per ora)
interface SurveyState
{
    surveys: Survey[];
    completedSurveys: string[];  // id dei questionari
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

// fetchSurvey sarà ciò che utilizzerò per fare la "finta chiamata API"
// usando il dispatch() come se fosse un action del mio slice
export const fetchSurveys = createAsyncThunk(
    'survey/fetchSurveys',
    async () =>
    {
        {
            return new Promise<Survey[]>((resolve) =>
                setTimeout(() =>
                {
                    resolve([
                        {
                            id: '1',
                            name: 'Medicinali',
                            fields: {
                                'Hai assunto i medicinali della mattina?': ['si', 'no'],
                                'Quanto ti hanno dato noia i medicinali?': ['1', '2', '3', '4', '5'],
                            },
                        },
                        {
                            id: '2',
                            name: 'Sintomi',
                            fields: {
                                'Senti di poter dire di star bene oggi?': ['si', 'no', 'non lo so'],
                                'Quanti sintomi hai?': ['1', '2', '3'],
                            },
                        },
                    ]);
                }, 1000)
            );
        }
    });

const initialState: SurveyState = {
    surveys: [],
    completedSurveys: [],
    status: 'idle',
};


const surveySlice = createSlice({
    name: 'survey',
    initialState,
    reducers: {
        // azione per segnare un questionario come completato (passandogli l'ID)
        // (state è lo stato al momento della chiamata)
        markAsCompleted: (state, action) =>
        {
            state.completedSurveys.push(action.payload);
        },
    },
    // con extraReducers a differenza dei reducer non viene creata una funzione "action creator" 
    // l'azione (fetchSurveys) l'abbiamo già definita e non ha bisogno di altro 
    extraReducers: (builder) =>
    {
        builder
            .addCase(fetchSurveys.pending, (state) =>
            {
                state.status = 'loading';  // imposto su "loading" per poi mettere un caricamento
            })
            .addCase(fetchSurveys.fulfilled, (state, action) =>
            {
                state.status = 'succeeded';
                state.surveys = action.payload;  // aggiornamento di state usando il risultato della promise
            })
            .addCase(fetchSurveys.rejected, (state) =>
            {
                state.status = 'failed';
            });
    },
});
// swagger e openAPI
// per chiamate api usare: https://redux-toolkit.js.org/rtk-query/api/createApi

export const { markAsCompleted } = surveySlice.actions;


export default surveySlice.reducer;
