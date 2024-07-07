import { privateRequest, publicRequest } from "../services/axiosInstances";
import { ApiEndpointUrl, ApiMethod } from "./constants"; // Adjust the import path accordingly

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

// Public API call example
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
    return response.data;
  } catch (error) {
    throw error;
  }
};
