/* eslint-disable */
import vue from 'vue'
const mutations = {
  SET_APP_ANME(state, params) {
    state.appName = params
  },
  SET_APP_VERSION(state) {
    vue.SET(state, 'appVersion', 'v2.0')
  }
}
export default mutations
