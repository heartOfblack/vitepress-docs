## components

系统通用组件存放目录，只要多于1个业务模块调用的都要抽离到这里（views里第1层文件夹为1个业务模块）。

### 目录
```html
├─ components
│ ├─ BaseBlock
│ ├─ BaseChart
│ ├─ BaseEmpty
│ ├─ BaseFooter
│ ├─ BaseShadow
│ ├─ BaseTag
│ ├─ BaseTitle
│ ├─ index.ts
│ └─ README.md
```

### 目录说明
- BaseBlock: 页面布局UI模块，用于`背景`。
- BaseChart: 系统echarts图表组件。
- BaseEmpty: 页面布局UI模块，用于`空状态提示`。
- BaseFooter: 页面布局UI模块，用于`底部`。
- BaseShadow: 页面布局UI模块，用于`阴影`。
- BaseTag: 页面布局UI模块，用于`标签`。
- BaseTitle: 页面布局UI模块，用于`标题`。
- index.ts: 全局组件引入。如果组件使用率比较高，例如基本组件（比如`BaseChart`），不想频繁地在文件里import的话可以在这里注册。
- README.md: 固有说明文件。

### 命名要求
- 大写字母开头，驼峰连接，**组件名必须是多个单词**。
- images目录除了common文件夹，其他同级的文件夹命名需要与views下的业务文件命名保持一致。

### 其他
- 放入index.ts的全局组件，需提前和组员沟通，确认必要性。
- 如果文件弃用了，需要对应删除。