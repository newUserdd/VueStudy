import Mock from 'mockjs'
const Random = Mock.Random
/* eslint-disable */
export const getUserInfo = options => {
  // console.log(options, '成功回调')
  const template = {
    // 'str|2-4': 'mary',
    // 'name|4': 'h',
    // 'age|+2': 5,
    // 'num|4-10': 0,
    'float|3-10.2-5': 0,
    'bool|1': true,
    'boo2|1-9': true,
    // 'obj|2': {
    //   a: 'aa',
    //   b: 'bb',
    //   c: 'cc'
    // },
    // 'obj|1-2': {
    //   a: 'aa',
    //   b: 'bb',
    //   c: 'cc'
    // },
    // 'arr|2-4': [1, 2],
    // 'arr2|3': ['a', 'b'],
    func: () => {
      return 'this is created by function'
    },
    reg: /\d{4}/,
    // email: Random.email()
    email: Mock.mock('@email'),
    range: Random.range(3, 6),
    date: Random.date('yyyy-MM-dd'),
    now:Random.now('hour:mm:ss'),
    img:Random.image(),
    img_base64:Random.dataImage(),
    color:Random.color(),
    cword:Random.cword(2,5),
    fruit:Random.fruit(),
    fruit:'@fruit'
  }

  return Mock.mock(template)
}

// export const getUserInfo = options => {
//   // console.log(options, '成功回调')
//   const template = {
//     'str|2-4': 'mary',
//     'name|4': 'h',
//     'age|+2': 5
//   }
//   let i = 3
//   let arr = []
//   while (i--) {
//     arr.push(template)
//   }
//   return Mock.mock(arr)
//   // return {
//   //   'str|min-max': 'jack',
//   //   age: 12
//   // }
// }
