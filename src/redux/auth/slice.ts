import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthLogin, AuthRegister } from "./type";

export interface AuthSlice {
  name: string;
  email: string;
  password: string;
  token: string;
  isLoggedIn: boolean;
  loading: boolean;
  error: string;
}

export const initialState: AuthSlice = {
  name: "",
  email: "",
  password: "",
  token: "",
  isLoggedIn: false,
  loading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthLogin>) => {
      state.loading = true;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = "";
    },
    register: (state, action: PayloadAction<AuthRegister>) => {
      state.loading = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { actions: authAction, reducer: authReducer } = authSlice;