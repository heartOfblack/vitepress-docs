<template>
  <div class="base-empty">
    <img src="/images/components/base_empty.png">
    <p>{{ props.label }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: false,
    default: '暂无数据'
  }
})
</script>

<style lang="scss" scoped>
.base-empty {
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  color: var(--hd--color-text-regular);

  p {
    margin-top: -70px;
  }
}
</style>
