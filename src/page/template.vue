<template>
 <div>
   <colation></colation>
   <router-view />
   <img-show></img-show>
</div>
</template>
<script>
import colation from "../components/colation.vue";
import imgShow from "../components/imgshow.vue";
export default {
  components: {
    colation,
    imgShow
  },
  /* methods: {
    scrollFn: function(direction) {
      console.log(direction);
      if (direction === "down") {
        this.$router.push("/about");
      } else if (direction === "up") {
        this.$router.push("/document");
      }
    }
  } */
};
</script>
<style scoped>

</style>
