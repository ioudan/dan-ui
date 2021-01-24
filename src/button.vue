<template>
  <button :class="{[`icon-${iconPosition}`]:true,'d-button':true}" @click="$emit('click2')">
    <d-icon v-if="!loading && icon" :name="icon"></d-icon>
    <d-icon v-if="loading" class="loading" name="loading"></d-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {},
    loading:{
      type:Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].indexOf(value) >= 0
      }
    }
  }
}
</script>

<style lang="scss">
@keyframes spin {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.d-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  > .icon {
    order: 1;
    margin-right: .3em;
  }

  > .content {
    order: 2;
  }

  &.icon-right {
    .icon {
      order: 2;
      margin-right: 0;
      margin-left: .3em;
    }

    .content {
      order: 1;
    }
  }
  .loading{
    animation: spin 1s infinite linear;
  }
}


</style>