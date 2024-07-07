export enum ApiEndpointUrl {
  LOGIN = "/auth/login",
  REGISTER = "/auth/register",
  LOGOUT = "/auth/logout",
  ME = "/auth/me",
}

export enum ApiMethod {
  POST = "POST",
  GET = "GET",
  PUT = "PUT",
  DELETE = "DELETE",
}

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
