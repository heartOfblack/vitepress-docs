<template>
  <div
    :class="{
      'base-title--small': props.type === 'small',
      'base-title--light': props.type === 'light',
      'base-title':true
    }"
    :style="{'width': typeof props.width === 'number' ? (props.width + 'px') : props.width }"
  >
    <div class="base-title__main">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: [Number, String],
    required: false,
    default: '100%'
  },
  type: {
    type: String,
    required: false,
    default: 'normal',
    validator (value) {
      return ['normal', 'small', 'light'].includes(value)
    }
  }
})
</script>

<style lang="scss" scoped>
  .base-title {

    &::before,
    &::after {
      content: '';
      display: block;
      height: 1px;
      background-image: linear-gradient(270deg, transparent 0%, var(--hd--color-primary-20) 50%, transparent 100%);
    }

    &__main {
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 16px;
      color: var(--hd--color-text-light);
      margin: 2px 0;
      background-image: linear-gradient(270deg, transparent 0%, var(--hd--color-primary-20) 50%, transparent 100%);
    }

    &--small {

      &::before,
      &::after {
        background-image: linear-gradient(270deg, transparent 0%, var(--hd--color-primary) 50%, transparent 100%);
      }

      .base-title__main {
        background-image: linear-gradient(270deg, transparent 0%, var(--hd--background-color-block-60) 50%, transparent 100%);
      }
    }

    &--light {

      &::before,
      &::after {
        background-image: linear-gradient(270deg, transparent 0%, var(--hd--color-primary) 50%, transparent 100%);
      }

      .base-title__main {
        background-image: linear-gradient(270deg, transparent 0%, var(--hd--color-primary-50) 50%, transparent 100%);
      }
    }
  }
</style>
