import { AuthState } from "@/types/authstate";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = {
    isAuth: false,
    token: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<AuthState>) =>
        {
            state.isAuth = action.payload.isAuth;
            state.token = action.payload.token;
        },
        logout: (state) =>
        {
            state.isAuth = false;
            state.token = "";
        },
    },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
