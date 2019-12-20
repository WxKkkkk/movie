import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow: true,
    comingList: []
  },
  mutations: {
    show (state) {
      state.isShow = true
    },
    hide (state) {
      state.isShow = false
    },
    getcoming (state, data) {
      state.comingList = data
    }
  },
  actions: {
    getcomingList (store) {
      Axios({
        url:
          `https://m.maizuo.com/gateway?cityId=${localStorage.getItem('city_id')}&pageNum=1&pageSize=10&type=2&k=3392735`,
        method: 'get',
        headers: {
          'X-Client-Info':
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"15764864065394478923794"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        store.commit('getcoming', res.data.data.films)
      })
    }
  },
  modules: {
  }
})
