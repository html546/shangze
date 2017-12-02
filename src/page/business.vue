<template>
  <div class="business" v-scroll="scrollFn">
      <div class="business_1">
        <h1>我们的服务</h1>
        <p>OUR SERVICE</p>
        <Row :gutter="30">
          <i-col :xs="24" :sm="12" :md="6" :lg="6">
            <div class="circle">
              <img src="../assets/app2.png" alt="">
            </div>
            <h3>APP开发</h3>
            <p>Android/IOS原生开发</p>
            <p>个性定制APP</p>  
            <p>电商APP开发</p>  
            <p>餐饮APP开发</p>  
            <p>社交APP开发</p>  
            <p>物流APP开发</p>  
            <p>教育APP开发</p>  
          </i-col>  
          <i-col :xs="24" :sm="12" :md="6" :lg="6">
            <div class="circle">
              <img src="../assets/wechat2.png" alt="">
            </div>
            <h3>微信开发</h3>
            <p>微信公众号开发</p>
            <p>微分销平台</p>
            <p>微商城平台</p>
            <p>定制微网站</p>
            <p>微信p开发</p>
            <p>微信活动定制</p>
            <p>微信营销工具</p>  
          </i-col>  
          <i-col :xs="24" :sm="12" :md="6" :lg="6">
            <div class="circle">
              <img src="../assets/site2.png" alt="">
            </div>  
            <h3>高端定制网站</h3>
            <p>企业品牌官网</p>
            <p>综合门户网站</p>
            <p>电商O2O网站</p>
            <p>个性定制网站</p>
            <p>HTML5自适应网站</p>
            <p>PC+手机站</p>
            <p>团购商城网站</p>
          </i-col>  
          <i-col :xs="24" :sm="12" :md="6" :lg="6">
            <div class="circle">
              <img src="../assets/design2.png" alt="">
            </div>  
            <h3>设计服务</h3>
            <p>微分销平台</p>
            <p>微商城平台</p>
            <p>定制微网站</p>
            <p>微信p开发</p>
            <p>微信活动定制</p>
            <p>微信营销工具</p>
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
    // $(".business").height(height1);
  },
  methods:{
    scrollFn:function(direction){
      console.log(direction);
      if(direction==='down'){
        this.$router.push('/document');
      }else if(direction==='up'){
        this.$router.push('/');
      }
    }
  }
};
</script>
<style scoped>
.business {
  background-image: url(../assets/gywm.png);
  background-repeat: repeat-y;
  background-size: cover;
  background-position: center;
  height: calc(100% - 63px);
}
.business_1 {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
}
.business_1 h1 {
  margin: 0 0 .67em;
  padding-top: .67em;
  font-size: 40px;
}
.circle{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
  left: 50%;
  border: 1px solid #AEB0B1;
  margin: 100px 0px 50px -100px;
  transition: all .3s;
}
.circle img{
  position: absolute;
  top: 50%;
  margin-top: -40px;
  left: 50%;
  margin-left: -40px;
  transition: all .3s;
}
.circle:hover{
  border: 1px solid #23ADE5;
}
.circle:hover img{
  transform: rotateY(360deg);
}
.circle:hover+h3{
  color: #23ADE5;
}
.business_1 p{
  line-height: 25px;
}
</style>
