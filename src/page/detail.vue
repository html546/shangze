<template>
  <div>
      <img src="static/anli03.png" alt="" v-if="this.$route.params.id==='1'" >
      <img src="static/anli05.png" alt="" v-if="this.$route.params.id==='2'">
      <img src="static/anli07.png" alt="" v-if="this.$route.params.id==='3'">
      <img src="static/anli09.png" alt="" v-if="this.$route.params.id==='4'">
  </div>
</template>
<script>
export default {
  mounted () {
      console.log(this.$route.params)
  }
}
</script>
<style scoped>

</style>
