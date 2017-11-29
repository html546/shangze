<template>
  <div>
      <img src="../assets/anli03.png" alt="" v-if="this.$route.params.id==='1'" >
      <img src="../assets/anli05.png" alt="" v-if="this.$route.params.id==='2'">
      <img src="../assets/anli07.png" alt="" v-if="this.$route.params.id==='3'">
      <img src="../assets/anli09.png" alt="" v-if="this.$route.params.id==='4'">
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
