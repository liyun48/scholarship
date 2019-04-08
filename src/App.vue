<template>
  <div id="app">
    <div class="header">
      <img src="@/assets/header_logo.png" alt="">
      <div class="title">奖学金评定系统</div>
      <div class="userInfo">
        用户名 &nbsp;
        <a style="color:red;border-bottom:1px solid red;cursor:pointer;" @click="quit">退出登录</a>
      </div>
    </div>
    <div class="content">
      <div class="content_nav">
        <el-menu
          default-active="2"
          height="100%"
          class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>教务处模块</span>
            </template>
            <el-menu-item index="1-1">
              <router-link to='/applicationReview'>
                申请书复审
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to='/announce'>
                公告栏管理
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link to='/user'>
                用户管理
              </router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>辅导员模块</span>
            </template>
            <el-menu-item index="2-1">
              <router-link to='/application'>
                申请书审核
              </router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>学生模块</span>
            </template>
            <el-menu-item index="3-1">
              <router-link to='/apply'>
                申请书
              </router-link>
            </el-menu-item>
            <el-menu-item index="3-2">
              <router-link to='/'>
                公告栏
              </router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>学生信息管理</span>
            </template>
            <el-menu-item index="4-1">
              <router-link to='/changePassword'>
                修改密码
              </router-link>
            </el-menu-item>
            <el-menu-item index="4-2">
              <router-link to='/personalDetails'>
                学生信息
              </router-link>
            </el-menu-item>
            <el-menu-item index="4-3">
              <router-link to='/scoreInquiry'>
                学生成绩查询
              </router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="content_container">
        <div class="wrapper">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods: {
    // 退出登录
    quit(){
      
    }
  }
}
</script>

<style>
/* 页面整体布局 */
input:-webkit-autofill {
  -webkit-box-shadow:0 0 0px 1000px white inset !important;
}
html {
  font: normal normal 12px '微软雅黑','Microsoft YaHei';
  color: #666;
}
body,ul,ol,dl,p,h1,h2,h3 {
  margin: 0;
  padding: 0;
}
ul,ol {
  list-style: none;
}
a {
  color: #666;
  text-decoration: none;
}
div {
  box-sizing: border-box;
}
/* 头部 */
.header {
  position: absolute;
  width: 100%;
  height: 120px;
  top: 0;
  background-color: #193885;
  line-height: 120px;
  padding-left: 100px;
}
.header .userInfo {
  position: absolute;
  top: 3em;
  right: 4em;
  color: #fff;
}
.header .title {
  font-size: 2.5em;
  position: absolute;
  top: -10px;
  right: 50px;
  color: #fff;
}
/* 内容区 */
.content {
  position: absolute;
  width: 100%;
  top: 120px;
  bottom: 0;
}
/* 导航栏 */
.content .content_nav {
  width: 200px;
  height: 100%;
  float: left;
  background-color: #fff;
  /* border-right: 1px solid #ededed; */
}
/* 公共部分 */
.content .content_container {
  box-sizing: border-box;
  margin-left: 200px;
  height: 100%;
  /* background-color: #f0f0f0; */
  padding: .5em
}
.content .content_container .wrapper {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #fff;
  padding: 20px;
  overflow-y: auto;
}
</style>
