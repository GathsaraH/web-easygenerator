import { Effect, ForkEffect, call, put, takeEvery } from "redux-saga/effects";
import { authAction } from "./slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { AuthLogin, AuthRegister } from "./type";

async function callLogin(payload: AuthLogin): Promise<any> {
  // const url = decodeAxiosRequest(ApiEndpointUrl.AUTH_LOGIN, {
  //   email: payload.email,
  //   password: payload.password,
  // });
  // const email = await publicPostRequest(url, payload);
  // return email;
}
export function* loginSaga({
  payload,
}: PayloadAction<AuthLogin>): Generator<Effect, void> {
  try {
    console.log({ payload });

    const response = yield call(callLogin, payload);

    /** TODO :  Drop email */

    //   localStorage.setItem(Storage.EMAIL, response.email);
    //   localStorage.setItem(Storage.USER_ID, response.userId);
    //   localStorage.setItem(Storage.ROLE, response.roleId.role);
    //   localStorage.setItem(Storage.USERNAME, response.userName);
    //   showSuccessNotification('Logged in Successfully!');
  } catch (error) {
    //   yield put(authAction.loginFailure(AuthErrorType.ERROR));
  }
}

export function* registerSaga({
  payload,
}: PayloadAction<AuthRegister>): Generator<Effect, void> {
  try {
    console.log({ payload }); 
    const response = yield call(callLogin, payload);

    /** TODO :  Drop email */

    //   localStorage.setItem(Storage.EMAIL, response.email);
    //   localStorage.setItem(Storage.USER_ID, response.userId);
    //   localStorage.setItem(Storage.ROLE, response.roleId.role);
    //   localStorage.setItem(Storage.USERNAME, response.userName);
    //   showSuccessNotification('Logged in Successfully!');
  } catch (error) {
    //   yield put(authAction.loginFailure(AuthErrorType.ERROR));
  }
}

export function* watchAuth(): Generator<ForkEffect, void> {
  yield takeEvery(authAction.login, loginSaga);
  yield takeEvery(authAction.register, registerSaga);
}

const authSaga = watchAuth;
export default authSaga;
