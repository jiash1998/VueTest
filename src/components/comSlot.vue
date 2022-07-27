<template>
  <div>
    <p>默认插槽子组件</p>
    <slot :num="num"></slot>
    <slot name="slotA"></slot>
    <!-- <slot name="slotB" :obj="obj" :num="num"></slot> -->
    <slot name="slotB" :obj="obj"></slot>
  </div>
</template>
<script>
export default {
  name: "comSlot",
  data() {
    return {
      obj: { a: 1, b: 2 },
      num: [1, 2, 3],
    };
  },
};
</script>
<style lang="">
</style>