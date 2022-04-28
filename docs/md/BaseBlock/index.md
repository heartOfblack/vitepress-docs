### 页面中的块级元素



:::demo
```vue
<template>
  <base-block>
    我是内容
  </base-block>
</template>

<style lang='scss'>
.base-block:before{
content: '';
display: 'block';
width: 10px;
height: 10px;
background:red;
}
</style>
```
:::