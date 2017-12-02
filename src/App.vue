<template>
  <div id="app">
    <app-head></app-head>
    <transition  name="custom-classes-transition" enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutLeft" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';
import './assets/css/normailze.css'
import './assets/css/animate.min.css';
import appHead from './components/header.vue'

export default {
  name: 'app',
  components:{
    appHead
  },
}
Vue.directive('scroll',{
  inserted:function(el,binding){
    var cb = binding.value;
    el.addEventListener('mousewheel',function(e){
      var direction = e.deltaY>0?'down':'up';
      cb(direction);
    })
  }
})
</script>

<style>
#app{
  list-style: none;
  width: 100%;
  height: 100%;
}
</style>
