<template>
  <div>
    <h1>home</h1>
    <el-row>
      <el-button type="primary">
        <router-link to="/home/computedDemo" tag="span">计算属性</router-link>
      </el-button>
      <el-button type="success">
        <router-link to="/home/watchDemo" tag="span">监听属性</router-link>
      </el-button>
      <el-button type="info">
        <router-link to="/home/condListRender" tag="span">条件渲染/列表渲染</router-link>
      </el-button>
      <el-button>
        <router-link to="/home/eventListener" tag="span">事件处理及修饰符</router-link>
      </el-button>
      <el-button type="warning">
        <router-link to="/home/comInfo" tag="span">组件通信</router-link>
      </el-button>
      <el-button type="warning">
        <router-link to="/home/slotDemo" tag="span">插槽</router-link>
      </el-button>
      <el-button type="warning">
        <router-link to="/home/mixinDemo" tag="span">混入</router-link>
      </el-button>
      <el-button type="danger">
        <router-link to="/home/directiveDemo" tag="span">自定义指令</router-link>
      </el-button>
      <el-button type="info">
        <router-link to="/home/pluginDemo" tag="span">插件plugin</router-link>
      </el-button>
      <el-button type="success">
        <router-link to="/home/filterDemo" tag="span">过滤器filter</router-link>
      </el-button>
      <el-button type="warning">
        <router-link :to="`/home/routeDemo1?id=${num}`" tag="span">路由传参1</router-link>
      </el-button>
      <el-button type="warning">
        <router-link
          :to="{
            path: '/home/routeDemo2',
            query: {
              id: 666,
              title: '你好',
            },
          }"
          tag="span"
        >路由传参2</router-link>
      </el-button>
      <el-button type="warning">
        <router-link
          :to="{
            name: 'routeDemo3',
            params: {
              id: 888,
              name: 'hello',
            },
          }"
          tag="span"
        >路由传参3</router-link>
      </el-button>
      <el-button type="warning">
        <!-- <router-link to="/home/routeDemo4" tag="span">路由传参4</router-link> -->
        <!-- <router-link
          :to="{
            name: 'routeDemo4',
            params: {
              id: 888,
            },
          }"
          tag="span"
          >路由传参4</router-link
        >-->
        <router-link
          :to="{
            path: '/home/routeDemo4',
            query: {
              id: 666,
            },
          }"
          tag="span"
        >路由传参4</router-link>
      </el-button>
      <el-button type="success">
        <router-link to="/home/vuexDemo" tag="span">状态管理VueX</router-link>
      </el-button>
      <el-button type="success">
        <router-link to="/home/nextTickDemo" tag="span">nextTick</router-link>
      </el-button>
      <el-button type="info">
        <router-link to="/home/debounceDemo" tag="span">防抖</router-link>
      </el-button>
    </el-row>
    <el-card>
      <div slot="header">展示区</div>
      <div>
        <router-view></router-view>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      num: 777,
    };
  },
};
</script>
<style lang="">
</style>