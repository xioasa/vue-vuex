
import Vue from 'vue';
import Vuex from 'vuex';
import { ADD_COUNT,DEL_COUNT } from "./mutation-types";

Vue.use(Vuex);

const store = new Vuex.Store({

  // 开启严格模式  确保state 中的数据只能 mutations 修改
  strict: true,

  state:{
    count:0
  },
  mutations:{
    [ADD_COUNT](state){
        state.count++
    },
    [DEL_COUNT](state){
      state.count--
    }
  },
  // 类似计算属性
  getters:{
    num:state => {
       return state.count > 5
    }
  },

  // 分发Action  作用 同时操作多个mutation
  actions:{
    add({ commit }){
       commit('ADD_COUNT')
    }
  }

});

export default store;
