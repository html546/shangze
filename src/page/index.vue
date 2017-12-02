<template>
<div class="classname">
  <Carousel v-model="value1" loop autoplay>
        <CarouselItem>
            <div class="demo-carousel">
              <img src="../assets/sywx.png" class="img3" alt="">
              <img src="../assets/banner2.jpg" alt="" >
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              <img src="../assets/sywz.png" class="img3" alt="">
              <img src="../assets/banner3.jpg" alt="" >
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              <img src="../assets/syapp.png" class="img3" alt="">
              <img src="../assets/sybj.jpg" alt="" >
            </div>
        </CarouselItem>
    </Carousel>  
</div>
</template>
<script>
import $ from 'jquery';
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
}
.demo-carousel{
  position: relative;
}
.img3{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 1;
}
</style>
