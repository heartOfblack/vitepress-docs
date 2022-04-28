## 基础块

### 基础用法

:::demo
```html
<template>
  <base-tag>
    我是内容
  </base-tag>
</template>
```
:::

### 其他色

:::demo
```html
<base-tag
  type="blue"
>
  我是内容
</base-tag>
<base-tag
  type="yellow"
>
  我是内容
</base-tag>
<base-tag
  type="red"
>
  我是内容
</base-tag>
```
:::

### 自定义宽度 （默认70px)

:::demo
```html
<base-tag
  :width="70"
>
  我是内容
</base-tag>

<base-tag
  width="70px"
>
  我是内容
</base-tag>

<base-tag
  width="100%"
>
  我是内容
</base-tag>
```
:::

### 小尺寸

:::demo
```html
<base-tag
  :width="32"
  small="small"
>
  内容
</base-tag>
```
:::