<template>
  <div class="document">
      <div class="reveal">
          <h1>案例展示</h1>
          <p>CASE DEMONSTRATION</p>
          <div class="buttongroup">
            <button>APP</button>
            <button>微信开发</button>
            <button>高端定制网络</button>
            <button>模板网站</button>
          </div>
          <Row :gutter="20">
            <i-col :md="6" :lg="6">
              <img src="../assets/anli03.png" alt="">
              <p>创享云购</p>
            </i-col>
            <i-col :md="6" :lg="6">
              <img src="../assets/anli05.png" alt="">
              <p>冬咚</p>
            </i-col>
            <i-col :md="6" :lg="6">
              <img src="../assets/anli07.png" alt="">
              <p>省多宝</p>
            </i-col>
            <i-col :md="6" :lg="6">
              <img src="../assets/anli09.png" alt="">
              <p>水站商城</p>
            </i-col>
          </Row>
          <a href="/template">
            <button class="more">更多案例</button>
          </a>
      </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  mounted() {
    // var height1 = $(window).height() - 42;
    // var height1 = $(window)[0].scrollHeight;
    $(".document").height(height1);
  }
};
</script>
<style scoped>
.document {
  background-image: url(../assets/document.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
    height: calc(100% - 63px);
}
.reveal {
  width: 1200px;
  margin: 0 auto;
  color: #fff;
  text-align: center;
}
.reveal h1 {
  margin: 0 0 0.67em;
  padding-top: 0.67em;
  font-size: 40px;
}
.reveal button{
  outline: none;
  border: none;
}
.buttongroup button{
  width: 170px;
  height: 30px;
  margin:50px 20px;
  cursor: pointer;
  font-size: 16px;
}
.buttongroup button:hover{
  background: #23ADE5;
  color: #fff;
}
.reveal img{
  width: 235px;
  height: 235px;
  transition: all .3s;
}
.reveal img+p{
  margin-top: 50px;
}
.reveal img:hover{
  transform: scale(1.2);
}
.reveal img:hover+p{
  color: #23ADE5;
}
.more{
  width: 180px;
  height: 40px;
  color: #000;
  margin-top: 100px;
}
.more:hover{
  color: #fff;
  background: #23ADE5;
}
</style>
