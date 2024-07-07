import axios from "axios";
import { privateRequest, publicRequest } from "../services/axiosInstances";
import { ApiEndpointUrl, ApiMethod } from "./constants"; // Adjust the import path accordingly
import { showErrorNotification } from "./notificationManager";
import { isErrorWithEmail } from "./isErrorWithEmail";

interface ApiCallConfig {
  endpoint: ApiEndpointUrl;
  method: ApiMethod;
  data?: any;
  params?: any;
}

export const apiCall = async ({
  endpoint,
  method,
  data,
  params,
}: ApiCallConfig) => {
  const config = {
    url: endpoint,
    method,
    data,
    params,
  };

  if (method === ApiMethod.GET || method === ApiMethod.DELETE) {
    delete config.data;
  }

  try {
    const response = await privateRequest.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const publicApiCall = async ({
  endpoint,
  method,
  data,
  params,
}: ApiCallConfig) => {
  const config = {
    url: endpoint,
    method,
    data,
    params,
  };

  if (method === ApiMethod.GET || method === ApiMethod.DELETE) {
    delete config.data;
  }

  try {
    const response = await publicRequest.request(config);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      if (isErrorWithEmail(error)) {
        showErrorNotification(
          "Email already exists. Please try with another email."
        );
      } else {
        showErrorNotification(error.response.data.message);
      }
    } else {
      showErrorNotification("An unexpected error occurred.");
    }
    throw error;
  }
};
