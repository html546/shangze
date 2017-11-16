<template>
  <div class="business">
      <div class="business_1">
        <h1>我们的服务</h1>
        <Row>
          <i-col :xs="24" :sm="12" :md="6" :lg="6">111</i-col>  
          <i-col :xs="24" :sm="12" :md="6" :lg="6">222</i-col>  
          <i-col :xs="24" :sm="12" :md="6" :lg="6">333</i-col>  
          <i-col :xs="24" :sm="12" :md="6" :lg="6">444</i-col>  
        </Row>
      </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  mounted() {
    var height1 = $(window).height()-62;
    $('.business').height(height1);
  }
};
</script>
<style scoped>
.business {
  background-image: url(../../static/gywm.png);
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
}
.business_1{
  width: 1200px;
  margin: 0 auto;
  text-align: center;
}
</style>
