import Mock from 'mockjs'

import { getUserInfo } from './response/user'
const Random = Mock.Random
// Mock.mock('http://localhost:3000/getUserInfo', getUserInfo)
Mock.mock(/\/getUserInfo/, getUserInfo)

// Mock.setup({
//   timeout: '2000-6000'
// })
Random.extend({
  fruit() {
    const f = ['apple', 'peach', 'asdf']
    return this.pick(f)
  }
})
export default Mock
