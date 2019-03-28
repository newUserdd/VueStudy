import axios from './index'
// import { baseUrl } from '@/config'
export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/getUserInfo',
    method: 'get',
    data: {
      userId
    }
  })
}
