import request from '../utils/request';
import { formatParams } from '../utils/func';

export async function information(params) {
  return request({
    url: `/rest/information`,
    method: 'get',
    data: {
      city: params.city,
      page: params.page,
      page_size: params.page_size,
    }
  })
}

export async function checkLogin(params) {
  return request({
    url: `/rest/user/checkLogin`,
    method: 'GET',
    data: formatParams(params)
  })
}

export async function login(params) {
  return request({
    url: `/rest/login`,
    method: 'POST',
    data: formatParams(params)
  })
}

export async function register(params) {
  return request({
    url: `/rest/user`,
    method: 'POST',
    data: formatParams(params)
  })
}
