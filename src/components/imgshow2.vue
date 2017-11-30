<template>
  <div class="box" >
        <img :src="src1" alt="">
        <div class="hideimg">
            <img src="../assets/eye.png" alt="">
        </div>
        <p class="catenate">
            <span>模板号 PCB{{number}}</span>
            <span>{{demo}}</span>
        </p>
  </div>
</template>
<script>
export default {
  // props:['src1','number','demo'],
  props: {
    src1: {
      type: String
    },
    number: {
      type: String
    },
    demo: {
      required: true
    }
  }
};
</script>
<style scoped>
.imgrow img {
  width: 100%;
}
.box {
  width: 100%;
  position: relative;
  margin-top: 20px;
}
.box:hover {
  background: black;
  opacity: 0.7;
  cursor: pointer;
}
.box:hover .hideimg{
    display: block;
}
.hideimg{
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%,-50%);
    display: none;
}
.ivu-row {
  margin-left: 0px !important;
  margin-right: 0px !important;
  margin-top: 20px;
}
.catenate {
  position: absolute;
  bottom: 5px;
  /* left: 8px; */
  background: #000;
  color: #fff;
  width: 100%;
}
.catenate span {
  padding: 0px 5px 0px;
}
.catenate span:nth-child(2) {
  float: right;
}
</style>
