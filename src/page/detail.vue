<template>
  <div>
      <img src="../assets/anli03.png" alt="" v-if="this.$route.params.id==='1'" >
      <img src="../assets/anli05.png" alt="" v-if="this.$route.params.id==='2'">
      <img src="../assets/anli07.png" alt="" v-if="this.$route.params.id==='3'">
      <img src="../assets/anli09.png" alt="" v-if="this.$route.params.id==='4'">
      <i-button type="primary" @click.native="handleClick">返回上一层</i-button>
  </div>
</template>
<script>
import bus from '../components/public';
export default {
  mounted () {
      console.log(this.$route.params)
  },
  methods:{
    handleClick(){
      // this.$router.go(-1);
      this.$router.push('/template');
      bus.$emit('change');
    }
  }
}
</script>
<style scoped>

</style>
