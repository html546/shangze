<template>
  <div>
      <div class="layout">
            <Menu mode="horizontal" active-name="1" @on-select="changeview">
                <div class="layout-logo"></div>
                <div class="layout-nav">
                    <MenuItem name="/">
                        首页
                    </MenuItem>
                    <MenuItem name="/business" >
                        业务
                    </MenuItem>
                    <MenuItem name="/template">
                        案例
                    </MenuItem>
                    <MenuItem name="/document">
                        网站模板
                    </MenuItem>
                    <MenuItem name="/about">
                        关于我们
                    </MenuItem>
                    <MenuItem name="/contact">
                        联系我们
                    </MenuItem>
                    <MenuItem name="/join">
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
        changeview(name){
            this.$router.push(name);
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
  background-image: url(../assets/logo.png);
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
