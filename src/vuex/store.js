import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    visitor: false,
    visitorImg: 'static/images/logos/search.png'
  },
  mutations: {
    newVisitor (state, msg) {
      state.visitor = msg.isSuccess
      state.visitor = msg.imgUrl
    }
  }
})

export default store
