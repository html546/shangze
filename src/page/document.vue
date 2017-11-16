<template>
  <div class="document">
      
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  mounted(){
    var height1 = $(window).height()-62;
    $('.document').height(height1);
  }
}
</script>
<style>
 .document{
   background-image: url(../../static/document.png);
   background-repeat: repeat;
   background-size: 100%;
   background-position: center;
   width: 100%;
 }
</style>
