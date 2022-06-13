<template>
  <div>
    <h1>路由</h1>
    <p>props</p>
    <!-- <p>{{ a }}</p>
    <p>{{ b }}</p> -->
    <!-- <p>{{ $route.params }}</p> -->
    <p>{{ id }}</p>
  </div>
</template>
<script>
export default {
  name: "routeDemo",
  props: ["a", "b", "id"],
  mounted() {
    // console.log(this.$route.getRoutes());
    console.log(this.$router.getRoutes());
  },
};
</script>
<style lang="">
</style>