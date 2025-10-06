import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "./authSlice";
import { RootState } from "./index";

export const customBaseQueryAuth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) =>
    {
        const rawBaseQuery = fetchBaseQuery({
            baseUrl: "http://192.168.1.99:3000/",
            prepareHeaders: (headers, { getState }) =>
            {
                const token = (getState() as RootState).auth.token; // getState() dentro redux-query ci fa accedere allo stato (gli slice)

                if (token)
                {
                    headers.set("authorization", `Bearer ${token}`); // è inutile perchè non faccio alcun controllo "backend"
                }

                return headers;
            },
        });

        const result = await rawBaseQuery(args, api, extraOptions);

        console.log("risposta API: ");
        console.log(JSON.stringify(result));

        if (result.error) // TODO: if (result.error || result.error.status === 401)
        {
            console.log("Lancio LOGOUT!");
            // se ricevo 401 faccio il dispatch del logout che aggiornerà lo stato redux di Auth (isAuth, token)
            api.dispatch(logout());
        }

        return result;
    };
