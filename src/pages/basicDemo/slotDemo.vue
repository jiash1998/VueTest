<template>
  <div>
    <el-button type="primary">插槽</el-button>
    <comSlot>
      <p>默认：123</p>
      <template v-slot:slotA><p>具名：312</p></template>
      <template v-slot:slotB="slotBScope">
        <p>作用域1：{{ slotBScope }}</p>
      </template>
      <!-- <template v-slot:slotB="{ obj, num }">
        <p>作用域1：{{ obj }} 作用域1：{{ num }}</p>
      </template> -->
    </comSlot>
  </div>
</template>
<script>
import comSlot from "../../components/comSlot";
export default {
  name: "slotDemo",
  components: {
    comSlot,
  },
};
</script>
<style lang="">
</style>