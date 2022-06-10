<template>
  <div>
    <p>props组件通信{{ toSonProps }}</p>
  </div>
</template>
<script>
export default {
  name: "comProps",
  // props: ["toSonProps"],
  props: {
    toSonProps: { type: Array },
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style lang="">
</style>