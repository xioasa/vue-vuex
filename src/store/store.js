import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({

  state:{
    count:0,
    isShow:true,
    arr: [9999],
    index: 0,
  },
  mutations:{
    add(state){
      state.count++
    },
    del(state){
      state.count--
    },
    show(state){
      state.isShow = !state.isShow
    },
  },
  // 相当于计算属性
  getters:{
    count:function(state){
      return state.count +=100;
    },
    arrIndex(state){
      return  state.arr[state.index]
    }
  },

  //  进行多个操作是使用
  actions:{
    changes (context){
      console.log('action操作');
      context.commit('add');
      context.commit('show');
    }
  }


});

export default store;
