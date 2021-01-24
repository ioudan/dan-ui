<template>
  <button class="d-button">
    <slot v-if="iconPosition ==='right' "></slot>
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <slot v-if="!icon || iconPosition ==='left' "></slot>
  </button>
</template>

<script>
export default {
  props: ['icon', 'iconPosition']
}
</script>
<style>
.icon {
  width: 1em;
  height: 1em;
}
</style>
<style lang="scss">
.d-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
}


</style>