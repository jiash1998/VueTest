<template>
  <div>
    <h1>plugins</h1>
  </div>
</template>
<script>
export default {
  name: "pluginDemo",
  mounted() {
    console.log(this.$pluginDemo);
    console.log(this.pluginNum);
  },
};
</script>
<style lang="">
</style>