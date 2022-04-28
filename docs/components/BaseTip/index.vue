<template>
  <div class="base-tip">
    <el-icon :size="14">
      <warning-filled />
    </el-icon>
    <span class="desc"> <slot /></span>
  </div>
</template>

<script  setup>
import { WarningFilled } from '@element-plus/icons-vue'
</script>

<style lang='scss' scoped>
.base-tip{
height: 45px;
padding: 14px 20px;
box-sizing: border-box;
background-image: url('/images/components/base_tip.png');
background-repeat: no-repeat;

.el-icon {
  margin-right: 5px;
  color: var(--hd--color-primary);
}
.desc{
  color: var(--hd--color-primary);
  font-size: 16px;
}
}
</style>
