import { NavigateFunction } from "react-router";

export interface AuthLogin {
    email: string;
    password: string;
    navigate: NavigateFunction;
  }

  export interface AuthRegister {
    name: string;
    email: string;
    password: string;
    navigate: NavigateFunction;
  }