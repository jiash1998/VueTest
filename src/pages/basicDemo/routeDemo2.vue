<template>
  <div>
    <h1>路由</h1>
    <p>query</p>
    <p>{{ $route.query }}</p>
  </div>
</template>
<script>
export default {
  name: "routeDemo",
  mounted() {
    console.log(this.$route.query);
  },
};
</script>
<style lang="">
</style>