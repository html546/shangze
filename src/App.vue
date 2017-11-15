<template>
  <div id="app">
    <app-head></app-head>
    <router-view/>
  </div>
</template>

<script>
import appHead from './components/header.vue'

export default {
  name: 'app',
  components:{
    appHead
  }
}
</script>

<style>
#app{
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
