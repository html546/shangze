<template>
 <div class="join">
     <div class="join1">
         <h1>加入我们</h1>
         <p>JOIN US</p>
         <Row >
             <i-col :md="8" :lg="8">
                 <div class="joinus">
                     <p>Android开发</p>
                     <p>5k-8k/月 3-5年 5人 临沂 全职</p>
                 </div>
             </i-col>
             <i-col :md="8" :lg="8">
                 <div class="joinus">
                     <p>招聘销售总监</p>
                     <p>5k-8k/月 3-5年 5人 临沂 全职</p>
                 </div>
             </i-col>
             <i-col :md="8" :lg="8">
                 <div class="joinus">
                     <p>PHP开发工程师</p>
                     <p>面议 3-5年 5人 临沂 全职</p>
                 </div>
             </i-col>
         </Row>
         <Row >
             <i-col :md="8" :lg="8">
                 <div class="joinus">
                     <p>IOS开发工程师</p>
                     <p>面议 3-5年 5人 临沂 全职</p>
                 </div>
             </i-col>
             <i-col :md="8" :lg="8">
                 <div class="joinus">
                     <p>java开发工程师</p>
                     <p>5k-8k/月 3-5年 1人 临沂 全职</p>
                 </div>
             </i-col>
             <i-col :md="8" :lg="8">
                 <div class="joinus">
                     <p>web前端开发</p>
                     <p>5k-8k/月 3-5年 5人 临沂 全职</p>
                 </div>
             </i-col>
         </Row>
     </div>
 </div>
</template>
<script>
import $ from "jquery";
export default {
  mounted() {
    var height1 = $(window).height() - 62;
    $(".join").height(height1);
  }
};
</script>
<style scoped>
.join {
  background-image: url(../../static/jrwm.png);
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
}
.join1 {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  color: #fff;
}
.join1 h1 {
  font-size: 40px;
  margin: 0 0 0.67em;
  padding-top: 0.67em;
}
.join1 > p {
  margin-bottom: 50px;
}
.join1 div.joinus {
  width: 80%;
  height: 140px;
  background: #23ade5;
  color: #fff;
  border: none;
  margin: 0 auto;
  outline: none;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
}
.joinus p {
  line-height: 30px;
}
.joinus p:nth-of-type(1) {
  margin-top: 40px;
}
.join1 .ivu-row {
  margin-bottom: 30px;
}
</style>
