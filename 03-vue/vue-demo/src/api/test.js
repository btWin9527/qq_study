import request from '@/utils/request'

export function getTestData (data) {
  return request({
    url: 'test',
    method: 'get',
    params: data
  })
}
