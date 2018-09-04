// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  strict: process.env.NODE_ENV !== 'production'
})

//动态加载vuex模块
const storeContext = require.context('@/store/modules', true, /\.js$/)

storeContext.keys().forEach(modules => {
  store.registerModule(
    modules.replace(/(^\.\/)|(\.js$)/g, ''),
    storeContext(modules).default
  )
})

export default store
