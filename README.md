# vuex基础用法教程





# 1.安装vuex 
``` npm install vuex --save```
<hr >

# 2. 创建store.js 文件
 文件目录 ``` ./src/store/store.js ```
<hr >

# 3. main.js 文件中引入 store

实例化 vuex
<pre>
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
});
</pre>
<hr >

# 4.store.js文件

<pre>
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({

  state:{
    ...
  },
  mutations:{
  // 修改 state 方法
    ...
  },
  // 相当于计算属性
  getters:{
   ...
  },

  //  进行多个操作是使用
  actions:{
    ...
  }


});

export default store;

</pre>
<hr >

# 5. 用法
  参考index.vue里的操作


