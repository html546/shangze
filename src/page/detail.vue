<template>
  <div>
      <img src="https://www.uploady.com/download/kK7JsIig8cv/8UJ6MpOahK5OuOPh" width="100%" alt="" v-if="this.$route.params.id==='4'">
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
