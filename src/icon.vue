<template>
  <svg class="icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script lang="ts">
import './svg'
export default {
  name:"DanIcon",
  props:['name']
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
}
</style>