import Vue from 'vue'
import Router from 'vue-router'
import view from '@/views/view'
import vuex from '@/views/Vuex'
import axios from '@/views/Axios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'View',
      component:view,
      children:[
        {
          path: 'vuex',
          name: 'Vuex',
          component: vuex
        },
        {
          path: 'axios',
          name:'Axios',
          component: axios
        }]

    },

  ]
})
