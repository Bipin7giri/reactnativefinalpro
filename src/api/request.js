/** @format */

import axios, { withAuthHeader } from './axios';

export const METHOD_TYPE = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete',
  SIGNUP: 'signup',
};

const _request = ({ url, method, data, query, headers }) => {
  switch (method) {
    case METHOD_TYPE.GET:
      return axios.get(!query ? url : `${url}?${query.join('&')}`);
    case METHOD_TYPE.SIGNUP:
      return axios.post(url, data, headers);
    case METHOD_TYPE.POST:
      return axios.post(url, data, headers);
    case METHOD_TYPE.PUT:
      return axios.put(url, data, headers);
    case METHOD_TYPE.PATCH:
      return axios.patch(url, data, headers);
    case METHOD_TYPE.DELETE:
      return axios.delete(url, headers);
    default:
      return;
  }
};

export default _request;
