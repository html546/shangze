<template>
  <div class="imgrow">
                <Row :gutter="16">
                    <i-col :lg="4" :md="6" :sm="8" :xs="12">
                        <router-link to='/detail/1'>
                            <img-show2 src="@/src/assets/anli03.png" number="001" demo="创享云购"></img-show2>
                        </router-link>
                    </i-col>
                    <i-col :lg="4" :md="6" :sm="8" :xs="12">
                        <router-link to='/detail/2'>
                            <img-show2 src="../assets/anli05.png" number="002" demo="咚冬"></img-show2>
                        </router-link>
                    </i-col>
                    <i-col :lg="4" :md="6" :sm="8" :xs="12">
                        <router-link to='/detail/3'>
                            <img-show2 src="../assets/anli07.png" number="003" demo="省多宝"></img-show2>
                        </router-link>
                    </i-col>
                    <i-col :lg="4" :md="6" :sm="8" :xs="12">
                        <router-link to='/detail/4'>
                            <img-show2 src="../assets/anli09.png" number="004" demo="水站商城"></img-show2>
                        </router-link>
                    </i-col>
                    <i-col :lg="4" :md="6" :sm="8" :xs="12">
                        <img-show2 src="../assets/anli03.png" number="005" demo="咚冬"></img-show2>
                    </i-col>
                    <i-col :lg="4" :md="6" :sm="8" :xs="12">
                        <img-show2 src="../assets/anli05.png" number="006" demo="咚冬"></img-show2>
                    </i-col>
                </Row>
                <Row :gutter="16">
                    <i-col :lg="4" :md="6" :sm="8" :xs="12">
                        <img-show2 src="../assets/anli07.png" number="008" demo="省多宝"></img-show2>
                    </i-col>
                    <i-col :lg="4" :md="6" :sm="8" :xs="12">
                        <img-show2 src="../assets/anli09.png" number="009" demo="水站商城"></img-show2>
                    </i-col>
                    <i-col :lg="4" :md="6" :sm="8" :xs="12">
                        <img-show2 src="../assets/anli03.png" number="010" demo="创享云购"></img-show2>
                    </i-col>
                    <i-col :lg="4" :md="6" :sm="8" :xs="12">
                        <img-show2 src="../assets/anli05.png" number="011" demo="咚冬"></img-show2>
                    </i-col>
                    <i-col :lg="4" :md="6" :sm="8" :xs="12">
                        <img-show2 src="../assets/anli07.png" number="012" demo="省多宝"></img-show2>
                    </i-col>
                    <i-col :lg="4" :md="6" :sm="8" :xs="12">
                        <img-show2 src="../assets/anli09.png" number="013" demo="水站商城"></img-show2>
                    </i-col>
                </Row>
                <Row :gutter="16">
                    <i-col :lg="4" :md="6" :sm="8" :xs="12">
                        <img-show2 src="../assets/anli03.png" number="014" demo="创享云购"></img-show2>
                    </i-col>
                    <i-col :lg="4" :md="6" :sm="8" :xs="12">
                        <img-show2 src="../assets/anli05.png" number="015" demo="咚冬"></img-show2>
                    </i-col>
                    <i-col :lg="4" :md="6" :sm="8" :xs="12">
                        <img-show2 src="../assets/anli07.png" number="016" demo="省多宝"></img-show2>
                    </i-col>
                </Row>
            </div>
</template>
<script>
import imgShow2 from './imgshow2.vue'
export default {
    components:{
        imgShow2
    }
};
</script>
<style scoped>
.imgrow {
  width:100%;
  margin: 20px auto;
}
</style>
