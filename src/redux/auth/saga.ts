import { Effect, ForkEffect, call, put, takeEvery } from "redux-saga/effects";
import { authAction } from "./slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { AuthLogin, AuthRegister } from "./type";
import * as authCalls from "./call";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../../util/notificationManager";
import { AxiosResponse } from "axios";
import { isRequestSuccessful } from "../../util/isRequestSuccessful";
import { ROUTE_HOME_PAGE, ROUTE_LOGIN_PAGE } from "../../util/routes";
import { setTokens } from "../../services/axiosInstance";

export function* loginSaga({
  payload,
}: PayloadAction<AuthLogin>): Generator<Effect, void> {
  try {
    const response = (yield call(
      authCalls.callLogin,
      payload
    )) as unknown as AxiosResponse;
    if (isRequestSuccessful(response.status)) {
      console.log(response.data["user"]);

      setTokens(response.data["token"], response.data["refreshToken"]);
      yield put(authAction.loginSuccess(response.data));
      showSuccessNotification("Logged in Successfully!");
      payload.navigate(ROUTE_HOME_PAGE);
    }
  } catch (error) {
    console.log(error);
    yield put(authAction.loginFailure(error));
    showErrorNotification("An unexpected error occurred.");
  }
}

export function* registerSaga({
  payload,
}: PayloadAction<AuthRegister>): Generator<Effect, void> {
  try {
    const response = (yield call(
      authCalls.callRegister,
      payload
    )) as unknown as AxiosResponse;
    if (isRequestSuccessful(response.status)) {
      yield put(authAction.registerSuccess(response.data));
      showSuccessNotification("Registered Successfully!");
      payload.navigate(ROUTE_LOGIN_PAGE);
    }
  } catch (error) {
    yield put(authAction.loginFailure(error));
    showErrorNotification("An unexpected error occurred.");
  }
}

export function* meSaga(): Generator<Effect, void> {
  try {
    const response = (yield call(authCalls.callMe)) as unknown as AxiosResponse;
    if (isRequestSuccessful(response.status)) {
      yield put(authAction.meSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
    // yield put(authAction.meFailure(error));
    // showErrorNotification("An unexpected error occurred.");
  }
}

export function* watchAuth(): Generator<ForkEffect, void> {
  yield takeEvery(authAction.login, loginSaga);
  yield takeEvery(authAction.register, registerSaga);
  yield takeEvery(authAction.me, meSaga);
}

const authSaga = watchAuth;
export default authSaga;
