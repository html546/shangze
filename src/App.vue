<template>
  <div id="app">
    <app-head></app-head>
    <router-view/>
  </div>
</template>

<script>
import './assets/css/normailze.css'
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
  list-style: none;
  width: 100%;
  height: 100%;
}
</style>
