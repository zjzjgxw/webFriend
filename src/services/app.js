import request from '../utils/request';

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