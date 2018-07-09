<template>
  <div class="hello">
    <h1>测试</h1>
    <button @click="add">+</button>
    {{this.$store.state.count}}
    <!-- getters 使用方法-->
    {{this.$store.getters.arrIndex}}
    <button @click="del">-</button>
    <!-- action 使用方式 -->
    <button @click="$store.dispatch('changes')">action</button>

    <div v-if="this.$store.state.isShow" style="width: 50px;height: 50px;background-color: aqua"></div>

    <Helloworld />
  </div>
</template>

<script>
  import Helloworld from './HelloWorld.vue';
  export default {
    name: 'Index',
    components:{
      Helloworld
    },
    methods: {

      add(){
        this.$store.commit('add');
      },

      del(){
        this.$store.commit('del');
      },

    },
    mounted(){

    },


    data() {
      return{

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .alertBtn{
    float: right;
  }
</style>
