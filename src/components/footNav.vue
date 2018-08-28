<template>
  <div>
    <div class="nav">
       <button @click="_cutNav(item)" v-for="(item,i) in navList" :key="i" >{{item}}</button>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{
         navList:['vuex','axios']
      }
    },
    methods:{
      _cutNav(item){
        this.$emit('_cutNav',{item:item});
        this.$router.push(`${item}`);
      }
    }
  }


</script>

<style scoped lang="less">

  .nav{
    height: 60px;
    width: 100%;
    line-height: 60px;
    button{
      height: 35px;
      width: 35%;
      margin-left: 15px;
    }
  }


</style>
