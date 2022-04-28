<template>
  <el-container class="base-block">
    <el-main class="base-block__main">
      <slot />
    </el-main>
  </el-container>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.base-block {
  position: relative;
  padding: 20px;
  background-color: var(--hd--background-color-block-80);
  border: 1px solid var(--hd--border-color-other);

  &__main{
    overflow-y: auto;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 12px;
    height: 12px;
  }

  &::before {
    top: -1px;
    left: -1px;
    border-top: 1px solid var(--hd--color-primary);
    border-left: 1px solid var(--hd--color-primary);
  }

  &::after {
    right: -1px;
    bottom: -1px;
    border-right: 1px solid var(--hd--color-primary);
    border-bottom: 1px solid var(--hd--color-primary);
  }
}
</style>
