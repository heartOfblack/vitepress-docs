## vendor

第三方插件的统一存放目录

### 目录
```html
├─ plugins
│ ├─ dayjs
│ ├─ echarts
│ ├─ element-plus
│ ├─ lodash
│ ├─ numeral
│ ├─ index.ts
│ └─ README.md
```

### 目录说明
- dayjs: [日期格式化](https://dayjs.fenxianglu.cn/)，[常用语法整理](https://gitlab.huidiancloud.com/cloud-spot/spot-goods-frontend/docs/blob/master/dayjs.md)。
- echarts: [图表库](https://echarts.apache.org/zh/index.html/)。
- element-plus: [UI框架](https://element-plus.gitee.io/zh-CN/)。
- lodash: [实用工具库](https://www.lodashjs.com/)。
- numeral: [数值格式化](http://numeraljs.com/)，[常用语法整理](https://gitlab.huidiancloud.com/cloud-spot/spot-goods-frontend/docs/blob/master/numeral.md)。
- resize-detector: [缩放库](https://www.npmjs.com/package/resize-detector)。
- index.ts: 汇总全局引入的第三方插件库列表。
- README.md: 固有说明文件。

### 命名要求
- 插件名尽量和官网保持一致。

### 其他
- 如果插件弃用了，需要对应删除。