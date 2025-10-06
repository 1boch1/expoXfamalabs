import { AuthState } from "@/types/authstate";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.1.99:3000/" }),
    endpoints: (builder) => ({
        checkAuth: builder.mutation<AuthState, void>({
            query: () => ({
                url: "auth",
                method: "GET",
            }),
        }),
    }),
});

export const { useCheckAuthMutation } = authApi;
