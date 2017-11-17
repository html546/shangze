<template>
<transition name="fade">
    <div class="box" v-show="show1">
       <div class="box_1">
           <header>
               <slot name="title"></slot>
           </header>
           <main>
               <slot></slot>
           </main>
           <header>
               <slot name="title2"></slot>
           </header>
           <main>
               <slot name="main2"></slot>
           </main>
       </div>
    </div>
</transition>
</template>
<script>
export default {
  props: ["show1"]
};
</script>

<style scoped>
.box {
  width: 55%;
  height: auto;
  background: #fff;
  color: #000;
  padding: 10px 10px;
  border-radius: 6px;
  position: absolute;
  z-index: 10;
  left: 20%;
  top: -10%;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter,
.fade-leave-active {
  /* transform: translateX(100px); */
  transform: rotateY(180deg);
}
</style>
