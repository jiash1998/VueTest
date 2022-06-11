<template>
  <div>
    <h1>home</h1>
    <el-row>
      <el-button type="primary">
        <router-link to="/home/computedDemo" tag="span"
          >计算属性</router-link
        ></el-button
      >
      <el-button type="success">
        <router-link to="/home/watchDemo" tag="span"
          >监听属性</router-link
        ></el-button
      >
      <el-button type="info"
        ><router-link to="/home/condListRender" tag="span"
          >条件渲染/列表渲染</router-link
        ></el-button
      >
      <el-button>
        <router-link to="/home/eventListener" tag="span"
          >事件处理及修饰符</router-link
        ></el-button
      >
      <el-button type="warning">
        <router-link to="/home/comInfo" tag="span"
          >组件通信</router-link
        ></el-button
      >
      <el-button type="warning">
        <router-link to="/home/slotDemo" tag="span"
          >插槽</router-link
        ></el-button
      >
      <el-button type="danger">内置指令和自定义指令</el-button>
    </el-row>
    <el-card>
      <div slot="header">展示区</div>
      <div><router-view></router-view></div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "home",
};
</script>
<style lang="">
</style>