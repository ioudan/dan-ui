<template>
  <div class="d-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'button-group'
};
</script>

<style lang="scss">
.d-button-group {
  display: inline-flex;
  vertical-align: middle;

  > .d-button {
    border-radius: 0;
    margin-left: -1px;

    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }

    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }

    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>