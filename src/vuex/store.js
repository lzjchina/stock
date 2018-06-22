import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    visitor: false,
    visitorImg: 'static/images/logos/search.png',
    jumpRoterName: 0,
    isShowpersonLogin: false,
    isShowChangeCity: false,
    isShowCheckIn: true,
    StockDetailsMsg: ''
  },
  mutations: {
    newVisitor (state, msg) {
      state.visitor = msg.isSuccess
      state.visitorImg = msg.imgUrl
    },
    getJumpRouterName (state, msg) {
      state.jumpRoterName = msg
    },
    emitisShowpersonLogin (state, msg) {
      state.isShowpersonLogin = msg
    },
    emitisShowChangeCity (state, msg) {
      state.isShowChangeCity = msg
    },
    emitisShowCheckIn (state, msg) {
      state.isShowCheckIn = msg
    },
    emitStockDetailsMsg (state, msg) {
      state.StockDetailsMsg = msg
    }
  }
})

export default store
