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
         <Row :gutter="20">
           <i-col :md="8" :lg="8">
             <img src="../assets/zs.png" alt="">
             <h4>更为丰富的经验</h4>
             <p>尚泽网络服务商遍布全国70多个城市，
               拥有着极其丰富的实战经验，
               以保证为客户提供更为专业服务。</p>
           </i-col>
           <i-col :md="8" :lg="8">
             <img src="../assets/zs.png" alt="">
             <h4>更为强大的团队</h4>
             <p>尚泽网络致力于用户体验做到最优，
               其由全国IT精英组成，
               实时跟进客户了解其需求，
               帮助客户优化诊断网站可能会出现的各种问题</p>
           </i-col>
           <i-col :md="8" :lg="8">
             <img src="../assets/zs.png" alt="">
             <h4>更为安全的保障</h4>
             <p>尚泽网络在服务器段部署Symantec的集防病毒
               和反恶意软件技术于一体的解决方案，
               7×24小时监控，保证系统正常运营，网站打开迅速。</p>
           </i-col>
           <i-col :md="8" :lg="8">
             <img src="../assets/zs.png" alt="">
             <h4>更为强劲的实力</h4>
             <p>一个好的网站，想要快速吸引到您客户的眼球，
               必须全方位的展现出企业最强最突出的优势，
               而尚泽网络则能完美的展现出您企业的优势所在。</p>
           </i-col>
           <i-col :md="8" :lg="8">
             <img src="../assets/zs.png" alt="">
             <h4>更为低廉的成本</h4>
             <p>与传统的媒体广告相比，企业网站不仅效果好，
               其成本也较为低廉，在使用时不需要考虑开支问题，
               专心关注广告效益。</p>
           </i-col>
           <i-col :md="8" :lg="8">
             <img src="../assets/zs.png" alt="">
             <h4>更为优质的服务</h4>
             <p>尚泽网络拥有着高素质的客服团队，完善的售后体系，
               更为方便的与服务商进行沟通交流。</p>
           </i-col>
         </Row>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  mounted() {
    // var height1 = $(window).height() - 62;
        // var height1 = $(window)[0].scrollHeight;
    $(".about").height(height1);
  }
};
</script>
<style scoped>
.about{
  background-image: url(../assets/gywm.png);
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
    height: calc(100% - 63px);
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
.about1>p{
  font-size: 16px;
  padding: 10px 0px;
}
.about1>p:nth-child(3){
 font-size: 16px;
 text-align: left;
 text-indent: 32px;
 margin-bottom: 50px;
}
.about1 .ivu-row img{
  margin: 20px 0px;
}
.about1 .ivu-row h4{
  font-size: 14px;
  margin: 0px 0px 20px;
}
</style>
