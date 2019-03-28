/* eslint-disable */
// 初始化调用
export default store => {
  // 创建的时候会初始化
  // console.log('初始化...')
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  store.subscribe((mutation, state) => {
    console.log(mutation, '提交mutation')
    console.log(state, 'state')
    if (mutation.type === 'SET_APP_ANME') {
      console.log('hello world.')
    }
    localStorage.state = JSON.stringify(state)
  })
}

// export default function(store) {
//   store.subscribe((mutatios, state) => {

//   })
// }
