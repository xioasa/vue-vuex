<template>
  <div class="view">
    <p>当前页面是：{{title}}</p>
    <headTitle :title="title" />

       <router-view/>

    <div class="foot_nav">
      <footNav @_cutNav = '_cutNav' />
    </div>
  </div>
</template>

<script>
  import headTitle from '../components/head';
  import footNav from '../components/footNav';

  export default {
    data(){
      return{
        title:'vuex',
        clickTarget:''
      }
    },
    components:{
      headTitle,
      footNav
    },
    methods:{
      _cutNav(item){
          this.title = item.item;
      }
    }
  }


</script>

<style scoped>
  .view{
    height: 100%;
    position: relative;
  }

  .foot_nav{
     position: absolute;
    bottom: 40vh;
    width: 100%;
  }

</style>
