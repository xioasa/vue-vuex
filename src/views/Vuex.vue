<template>
  <div class="hello">
    <!--<h1>vuex</h1>-->
    <h2>{{count}}</h2>
    <h3>num:{{num}}</h3>
    <button @click = 'add'>Mutation + </button>
    <button @click = 'del'>-</button>
    <button @click = 'add_'>action + </button>
  </div>
</template>

<script>
  import { mapGetters,mapMutations } from 'vuex';
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:'vuex'
    }
  },
  methods:{
   //1. 通过 this.$store.commit 方式调用 Mutations 中方法
       //      add(){
       //        this.$store.commit('ADD_COUNT')
       //      },
       //      del(){
       //        this.$store.commit('DEL_COUNT')
       //      },
   //2. 把能在该页面用到vuex中的Mutation，通过 ...mapMutations 方法映射到 methods 里，


    // 2.1
        //...mapMutations([
        //  'ADD_COUNT','DEL_COUNT'
        //]),

        // add(){
        //   this.ADD_COUNT();
        // },
        // del(){
        //   this.DEL_COUNT();
        // },

    // 2.2
      ...mapMutations(
        {
          addCount:'ADD_COUNT',
          delCount:'DEL_COUNT'
        }),

      add(){
        this.addCount()
      },
      del(){
        this.delCount()
      },
  //   action 方法调用

    add_(){
        this.$store.dispatch('add')
    }


  },
  computed:{
    count(){
      return this.$store.state.count
    },

    // 1.  getters 直接访问方式
        // num(){
        //   return this.$store.getters.num(-1)
        // }
    // 2. 通过...mapGetters 方法把getters 里的内容混入到 computed 里，此时可以直接通过 this.num 获取
    ...mapGetters(['num'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
