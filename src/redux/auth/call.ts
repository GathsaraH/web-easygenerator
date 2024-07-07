import { apiCall, publicApiCall } from "../../util/apiUtils";
import { ApiEndpointUrl, ApiMethod } from "../../util/constants";
import { AuthLogin, AuthRegister } from "./type";

export const callRegister = async (registerData: AuthRegister) => {
  try {
    const { navigate, ...res } = registerData;
    return await publicApiCall({
      endpoint: ApiEndpointUrl.REGISTER,
      method: ApiMethod.POST,
      data: res,
    });
  } catch (error) {
    throw error;
  }
};

export const callLogin = async (loginData: AuthLogin) => {
  try {
    const { navigate, ...res } = loginData;
    return await publicApiCall({
      endpoint: ApiEndpointUrl.LOGIN,
      method: ApiMethod.POST,
      data: res,
    });
  } catch (error) {
    throw error;
  }
};

export const callMe = async () => {
  try {
    return await apiCall({
      endpoint: ApiEndpointUrl.ME,
      method: ApiMethod.GET,
    });
  } catch (error) {
    throw error;
  }
};
