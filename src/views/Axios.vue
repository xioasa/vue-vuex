<template>

  <div>
      <button @click="getData">获取数据</button>
  </div>

</template>

<script>

  export default {

    data(){
      return{

      }
    },
    methods:{
      getData(){
        this.$axios.get('/satinApi',{})
          .then((res)=>{
            console.log(res);
          })
          .catch((res)=>{
            console.log(res);
          })
      }
    },
    mounted(){
     this.getData();
    }
  }

</script>

<style scoped>

</style>
