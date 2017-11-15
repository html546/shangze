<template>
    <div class="nav">
        <Row>
            <i-col :lg="{span:8,offset:8}">
        <h1>模版网站</h1>
        <p>TEMPLATE WEB</p>
        <!-- <template>
            <input v-model="value" icon="ios-clock-outline" style="width:300px;" placeholder="请输入您要搜索的关键词 例如:按什么检索就例如什么"></input>
        </template> -->
        <i-input v-model="value" icon="search" style="width:500px;margin:30px auto 20px;display:block;" placeholder="请输入您要搜索的关键词 例如:按什么检索就例如什么"></i-input>
        <div class="retrieve">
            <router-link to="">
                <img src="../../static/computer.png" alt=""><span>PC站</span>
            </router-link>
            <router-link to="">
                <img src="../../static/mobile.png" alt=""><span>手机站</span>
            </router-link>
            <router-link to="">
                <img src="../../static/pcmobile.png" alt=""><span>响应式</span>
            </router-link>
            <div class="fix"></div>
        </div>
        <div class="colorfil">
            <router-link to="">
                <img src="../../static/color.png" alt="">
            </router-link>
            <router-link to="">
                <p class="red"></p>
            </router-link>
            <router-link to="">
                <p class="org"></p>
            </router-link>
            <router-link to="">
                <p class="yew"></p>
            </router-link>
            <router-link to="">
                <p class="grn"></p>
            </router-link>
            <router-link to="">
                <p class="pur"></p>
            </router-link>
            <router-link to="">
                <p class="pin"></p>
            </router-link>
            <router-link to="">
                <p class="gry"></p>
            </router-link>
            <div class="fix"></div>
        </div>
        <div class="classify">
            <h2 @click="changeShow">按分类检索</h2>
        </div>
            
            </i-col>
        </Row>
        <Row>
            <i-col span='24'>
                <div v-show='show' class="classify2">
                <span>房产建筑</span>
                <span>机械设备</span>
                <span>广告创意</span>
                <span>机械设备</span>
                <span>餐饮美食</span>
                <span>苗木花卉</span>
                <span>首饰服装</span>
                <span>商务通讯</span>
                <span>物流家政</span>
                <span>机械设备</span>
                <span>种植养殖</span>
                <span婚纱摄影</span>
                <span>休闲娱乐</span>
                <span>包装工贸</span>
                <span>医疗健康</span>
                <span>美容整形</span>
                <span>物流家政</span>
                <span>机械设备</span>
                <span>种植养殖</span>
                <span>婚纱摄影</span>
                <span>休闲娱乐</span>
            </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      show: true
    };
  },
  methods: {
    changeShow() {
      this.show = !this.show;
    }
  }
};
</script>
<style scoped>
/* .nav {
  width: 1200px;
  margin: 0 auto;
  display: block;
} */
h1 {
  margin-top: 60px;
  text-align: center;
  font-size: 40px;
}
h1 + p {
  text-align: center;
  font-size: 16px;
}
.retrieve {
  width: 255px;
  margin: 0 auto;
}
.retrieve img {
  padding: 0px 4px;
  float: left;
}
.retrieve span {
  color: #23afe4;
  font-size: 12px;
  line-height: 24px;
  display: block;
  margin: 0px 20px 0px 0px;
  float: left;
}
.fix {
  clear: both;
}
.colorfil {
  width: 580px;
  margin: 20px auto;
}
.colorfil img {
  float: left;
}
.colorfil p {
  width: 40px;
  height: 20px;
  float: left;
  margin: 0px 20px;
}
.colorfil p.red {
  background: #e71717;
}
.colorfil p.org {
  background: #e76a18;
}
.colorfil p.yew {
  background: #ffc600;
}
.colorfil p.grn {
  background: #19800d;
}
.colorfil p.pur {
  background: #246ce5;
}
.colorfil p.pin {
  background: #e623c7;
}
.colorfil p.gry {
  background: #666666;
}
.classify {
  width: 500px;
  margin: 0 auto;
  text-align: center;
}
.classify2{
  width: 100%;
  background: #fff;
  font-size: 16px;
  padding-left: 27px;
  transition: all 0.3s;
}
.classify2 span {
  margin: 20px 30px 20px 0px;
}
</style>
