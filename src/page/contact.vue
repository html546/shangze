<template>
  <div class="contact">
    <div class="contact1">
      <h3>联系我们</h3>
      <p>CONTACT US</p>
      <span>临沂尚泽文化传媒有限公司</span>
      <span>座机：05398525765        05398367639</span>
      <span>手机：15265390126        15553997976</span>
      <span>Q Q：930305602            290536639</span>
      <span>地址：山东省临沂市兰山区广场世纪城AB单元902室</span>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  mounted() {
    // var height1 = $(window).height() - 62;
    // var height1 = $(window)[0].scrollHeight;
    // $(".contact").height(height1);
  }
};
</script>
<style scoped>
.contact{
  background-image: url(../assets/lxwm.jpg);
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  height: calc(100% - 63px);
}
.contact1{
  width: 400px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -180px;
}
.contact1 h3{
  margin: 0 0 .67em;
  padding-top: .67em;
  font-size: 30px;
}
.contact1 p{
  font-size: 16px;
  margin-bottom: 20px;
}
.contact1 span{
  font-size: 16px;
  display: block;
  width: 100%;
  text-align: left;
  line-height: 50px;
}
</style>
