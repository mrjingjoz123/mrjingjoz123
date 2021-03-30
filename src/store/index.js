import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    number: 0,
    log: [],
    message: null
  },
  mutations: {
    [types.PLUS] (state) {
      state.number++
    },
    [types.MINUS] (state) {
      state.number--
    },
    [types.LOG] (state, payload) {
      state.log.unshift(payload)
    },
    [types.MESSAGE] (state, payload) {
      state.message = payload
    }
  },
  actions: {
    plus ({ commit, state }) {
      commit(types.PLUS)
      commit(types.LOG, {
        time: new Date(),
        message: types.PLUS,
        number: state.number
      })
      commit(types.MESSAGE, {
        type: 'info',
        message: 'ทำการเพิ่มค่าเรียบร้อย'
      })
    },
    minus ({ commit, dispatch, state }) {
      if (state.number === 0) {
        commit(types.MESSAGE, {
          type: 'danger',
          message: 'ไม่สามารถลดได้แล้ว'
        })
        return
      }
      commit(types.MINUS)
      commit(types.LOG, {
        time: new Date(),
        message: types.MINUS,
        number: state.number
      })
      commit(types.MESSAGE, {
        type: 'warning',
        message: 'ทำการลดค่าเรียบร้อย'
      })
    },
    showMessage ({ commit }, payload) {
      commit(types.MESSAGE, payload)
    }
  },
  modules: {
  }
})
