<template>
  <div>
    <p>$children/$parent组件通信</p>
  </div>
</template>
<script>
export default {
  name: "comChildParent",
  data() {
    return {
      childList: [3, 3, 3],
    };
  },
  mounted() {
    console.log(this.$parent);
  },
  methods: {
    test() {
      console.log("test");
    },
  },
};
</script>
<style lang="">
</style>