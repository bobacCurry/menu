<template>
  <div class="main-page">
    <img v-lazy="'/static/logo.png'" style="width: 100%">
    <router-link to='/menu'>
      <mt-button type="primary">进入点餐</mt-button>
    </router-link>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .main-page{
    height: 100vh;
    background-image: url('/static/homeback.png');
  }
</style>