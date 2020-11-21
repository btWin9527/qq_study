import request from "../utils/request";

const BASEURL = 'https://casino-api.gbank.team/api';

export async function login(params) {
  return request(`${BASEURL}/center/login`, {
    method: 'POST',
    data: params,
  });
}

export async function getUserInfo(params) {
  return request(`${BASEURL}/bet/user/userInfo`, {
    method: 'POST',
    data: params,
  });
}
