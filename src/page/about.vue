<template>
  <div class="about">
    <div class="about1">
      <h1>关于我们</h1>
      <p>ABOUT US</p>
      <p>尚泽网络是由一批具有著名网络公司服务背景的网络精英所组成，
         年轻富有活力，注定一开始就是一家成熟的网络公司，是一家专业
         从事网站建站、网站推广和网络营销的互联网基础运营商。尚泽
         网络推出的每一项服务，都本着客户至上的原则，每一个前进的
         脚步都充分体现了对客户的尊重与关怀。正因为如此，我们才能
         赢得客户，赢得将来。在新世纪里，尚泽网络将会在现有的基础上，
         为客户提供更全面，更优质得服务！我们希望能够更好的为客户及
         其产品在国内、国外市场打开知名度。使国内外企业商能迅速的
         浏览客户网页及信息，为客户带来无限商机。</p>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  mounted() {
    var height1 = $(window).height() - 62;
    $(".about").height(height1);
  }
};
</script>
<style scoped>
.about{
  background-image: url(../../static/gywm.png);
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
}
.about1{
  width: 1200px;
  margin: 0 auto;
  text-align: center
}
.about1 h1{
  margin: 0 0 .67em;
  padding-top: .67em;
  font-size: 40px;
}
.about1 p{
  font-size: 16px;
  padding: 10px 0px;
}
.about1 p:nth-child(3){
 font-size: 16px;
 text-align: left;
 text-indent: 32px;
}
</style>
