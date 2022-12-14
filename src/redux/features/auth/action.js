/** @format */

export const action = {
  CREATE_AUTH_REQ: `CREATE_AUTH_REQ`,
  CREATE_AUTH_SUC: `CREATE_AUTH_SUC`,
  CREATE_AUTH_FAIL: `CREATE_AUTH_FAIL`,
  createAuthReq: (payload) => ({
    type: action.CREATE_AUTH_REQ,
    payload,
  }),
};
