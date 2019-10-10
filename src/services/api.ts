import { create } from "apisauce";

import * as Constants from "util/constants";

const api = create({
  baseURL: Constants.ENDPOINT_API,
  headers: {
    "Content-Type": "application/json"
  },
  timeout: Constants.API_TIME_OUT
});

export function getResponseData(res: any) {
  if (res.ok) {
    return res.data;
  } else {
    if (res.data && res.data.message) {
      return Promise.reject({ message: res.data.message, status: res.status });
    } else {
      return Promise.reject({
        message: res.originalError.message,
        status: res.status
      });
    }
  }
}

export { api };
