/** @format */

import request, { METHOD_TYPE } from './request';
export const authLoginApi = (data) =>
  request({
    url: `/login`,
    method: METHOD_TYPE.POST,
    data: JSON.stringify(data),
    headers: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  });
