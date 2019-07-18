<template>
  <div id="app">
    <el-container>
      <el-header>
        <h1 id="header-h5">随机数据显示demo</h1>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="25">
              <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                background-color="#303133"
                text-color="#fff"
                active-text-color="#ffd04b"
                @open="handleOpen"
                @close="handleClose"
                router
              >
                <el-menu-item index="/new">
                  <i class="el-icon-more"></i>
                  <span slot="title">New Random Data</span>
                </el-menu-item>
                <el-menu-item index="/stored">
                  <i class="el-icon-more"></i>
                  <span slot="title"> Stored Random Data</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>

        <el-main>
          <el-card class="box-card">
            <router-view></router-view>
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted () {
    // console.log(this)
    this.$http.headers.common['X-CSRFToken'] = document.getElementsByName('csrfmiddlewaretoken').val()
  }
}
</script>

<style>
html,
body,
#app,
.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
  /* background-color: #545c64; */
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.el-header {
  background-color: #545c64;
}
#header-h5 {
  margin-top: 0.5%;
  /* margin-bottom: 1%; */
  color: #ff9900;
}
.el-aside {
  display: block;
  position: relative;
  /* overflow-y: scroll; */
  background-color: #303133;
}
.el-main {
  background-color: #ffffff;
}
</style>
