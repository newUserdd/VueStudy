import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
import CountTo from '_c/count-to'
// const isDev = process.env.NODE_ENV !== 'production'
// if (isDev) {
//   require('./mock')
// }
require('./mock')
Vue.config.productionTip = false

Vue.prototype.$bus = Bus
const handleClick = e => {
  console.log(e, 'self')
  e.stopPropagation()
}
let list = [{ name: 'mary' }, { name: 'lili' }]
const getLiElArr = h => {
  return list.map((item, index) =>
    h(
      'li',
      {
        on: {
          click: handleClick
        },
        key: `list_item_${index}`
      },
      item.name
    )
  )
}
new Vue({
  router,
  store,
  // render: h => h(App)
  // 能够设置的值
  // render: h => {
  //   return h(CountTo, {
  //     'class': ['count-to'],
  //     attrs: {},
  //     style: {},
  //     props: {
  //       endVal: 100
  //     },
  //     // domProps: {
  //     //   innerHTML: '123'
  //     // },
  //     on: {
  //       'on-animation-end': val => {
  //         console.log('end:' + val)
  //       }
  //     },
  //     nativeOn: {
  //       click: () => {
  //         console.log('click...')
  //       }
  //     },
  //     directives: [],
  //     scopedSlots: {},
  //     slot: '',
  //     key: '',
  //     ref: ''
  //   })
  // }
  // render: h => h(App)
  // render: h =>
  //   h('div', [
  //     h(
  //       'ul',
  //       {
  //         on: {
  //           click: handleClick
  //         }
  //       },
  //       getLiElArr(h)
  //     )
  //   ])
  render: h => h(App)
}).$mount('#app')
