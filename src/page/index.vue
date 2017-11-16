<template>
<div class="classname">
  <Carousel v-model="value1" loop height='document.body.clientHeight'>
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
    
  }
};
</script>
<style>
.classname .ivu-carousel-list{
  width: 100%;
}
</style>
