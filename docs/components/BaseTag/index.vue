<template>
  <div
    class="base-tag"
    :class="{ 'base-tag--small': props.size === 'small' }"
    :style="{ width: typeof props.width === 'number' ? props.width + 'px' : props.width }"
  >
    <div class="base-tag__main">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: [Number, String],
    required: false,
    default: 70
  },
  size: {
    type: String,
    required: false,
    default: 'normal',
    validator (value) {
      return ['normal', 'small'].includes(value)
    }
  },
  type: {
    type: String,
    required: false,
    default: 'primary',
    validator (value) {
      return ['primary', 'blue', 'yellow', 'red'].includes(value)
    }
  }
})

const color = `var(--hd--color-${props.type})`
const bgColor = `var(--hd--color-${props.type}-10)`
</script>

<style lang="scss" scoped>
.base-tag {
  position: relative;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: v-bind(color);
  background-color: v-bind(bgColor);

  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 6px;
    height: 6px;
  }

  &::before {
    top: 0;
    left: 0;
    border-top: 1px solid v-bind(color);
    border-left: 1px solid v-bind(color);
  }

  &::after {
    top: 0;
    right: 0;
    border-top: 1px solid v-bind(color);
    border-right: 1px solid v-bind(color);
  }

  &__main {
    &::before,
    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 6px;
      height: 6px;
    }

    &::before {
      left: 0;
      bottom: 0;
      border-left: 1px solid v-bind(color);
      border-bottom: 1px solid v-bind(color);
    }

    &::after {
      right: 0;
      bottom: 0;
      border-right: 1px solid v-bind(color);
      border-bottom: 1px solid v-bind(color);
    }
  }

  &--small {
    height: 16px;
    line-height: 16px;
    font-size: 12px;

    &::before,
    &::after,
    .base-tag__main::before,
    .base-tag__main::after {
      width: 3px;
      height: 3px;
    }
  }
}
</style>
