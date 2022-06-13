<template>
  <div>
    <h1>路由</h1>
    <p>直接携带参数</p>
    <p>{{ $route.query }}</p>
    <p>{{ $route.params }}</p>

    <!-- <comRoute /> -->
  </div>
</template>
<script>
export default {
  name: "routeDemo",
  mounted() {
    console.log(this.$route.query);
  },
  activated() {
    console.log("进入路由");
  },
  deactivated() {
    console.log("离开");
  },
};
</script>
<style lang="">
</style>