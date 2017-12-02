<template>
  <div id="app">
    <app-head></app-head>
    <transition  name="custom-classes-transition" enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutLeft" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import './assets/css/normailze.css'
import './assets/css/animate.min.css';
import appHead from './components/header.vue'

export default {
  name: 'app',
  components:{
    appHead
  },
}
</script>

<style>
#app{
  list-style: none;
  width: 100%;
  height: 100%;
}
</style>
