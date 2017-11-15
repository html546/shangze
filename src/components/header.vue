<template>
  <div>
      <div class="layout">
            <Menu mode="horizontal" active-name="1">
                <div class="layout-logo"></div>
                <div class="layout-nav">
                    <MenuItem name="1" @click.native="changeview1">
                        首页
                    </MenuItem>
                    <MenuItem name="2">
                        业务
                    </MenuItem>
                    <MenuItem name="3">
                        案例
                    </MenuItem>
                    <MenuItem name="4" @click.native="changeview4">
                        网站模板
                    </MenuItem>
                    <MenuItem name="5">
                        关于我们
                    </MenuItem>
                    <MenuItem name="6">
                        联系我们
                    </MenuItem>
                    <MenuItem name="7">
                        加入我们
                    </MenuItem>
                </div>
            </Menu>
        </div>
  </div>
</template>
<script>
export default {
    methods:{
        changeview1(){
            this.$router.push('/');
        },
        changeview2(){
            this.$router.push('/template');
        }
    }
};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
}
.layout-logo {
  width: 100px;
  height: 30px;
  border-radius: 3px;
  float: left;
  position: relative;
  background-image: url(../../static/logo.png);
  background-repeat: no-repeat;
  background-size: 100px 30px;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 600px;
  margin: 0 auto;
  float: right;
}
</style>
