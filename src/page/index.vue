<template>
<div class="classname">
  <Carousel v-model="value1" loop >
        <CarouselItem>
            <div class="demo-carousel">
              <img src="../assets/banner2.png" alt="" >
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              <img src="../assets/banner3.png" alt="" >
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              <img src="../assets/sybj.png" alt="" >
            </div>
        </CarouselItem>
    </Carousel>  
</div>
</template>
<script>
import $ from 'jquery'
export default {
  data() {
    return {
      value1: 0
    };
  },
  mounted(){
    // var height1 = $(window).height()-63;
    // var height1 = $(window)[0].scrollHeight;
    // $('.ivu-carousel-list').height(height1);
  }
};
</script>
<style>
.classname .ivu-carousel-list{
  width: 100%;
  height: calc(100% - 63px);
}
</style>
