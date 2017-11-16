<template>
<div style="margin-top:-60px;">
  <Carousel v-model="value1" loop height='auto'>
        <CarouselItem>
            <div class="demo-carousel">
              <img src="../../static/banner3.png" alt="" style="margin-top:-60px;">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              <img src="../../static/banner3.png" alt="" style="margin-top:-60px;">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              <img src="../../static/banner3.png" alt="" style="margin-top:-60px;">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              <img src="../../static/banner3.png" alt="" style="margin-top:-60px;">
            </div>
        </CarouselItem>
    </Carousel>  
</div>
</template>
<script>
export default {
  data() {
    return {
      value1: 0
    };
  },
  mounted(){
    // document.getElementsByClassName('.ivu-carousel-list').innerHeight = window.innerHeight-100;
    // console.log(window.innerHeight);
    console.log(document.getElementsByClassName('.ivu-carousel-list')[0]);
  }
};
</script>
<style>
.ivu-carousel-list{
  width: 100%;
}
</style>
