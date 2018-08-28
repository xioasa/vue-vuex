<template>

  <div class="title">
     {{title}}
  </div>

</template>

<script>

  export default {

    data(){
      return{
      }
    },
    props:{
      title:{
        type:String
      }
    }
  }

</script>

<style scoped>

  .title{
    width: 100%;
    height: 60px;
    background-color: #c6c6c6;
    color: #fff;
    text-align: center;
    line-height: 60px;
    font-size: 25px;
  }

</style>
