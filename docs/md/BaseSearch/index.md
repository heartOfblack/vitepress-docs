## 查询区域

基于el-form的二次封装，在于统一布局样式及收起展开等交互

### 基础用法

options配置项的顺序就是页面元素展示的顺序

:::demo
```vue
<base-search
  :loading="loading"
  :form="form"
  :options="options"
  @search="search"
/>

<script>
export default {
  data () {
    return {
      // 表单配置项
      options: [
        {
          type: 'input', // input输入框
          prop: 'name',
          label: '名称'
        },
        {
          type: 'select', // 下拉框
          prop: 'gender',
          label: '性别',
          selectList: [ // 下拉数据（动态获取的数据则看下面的select下拉配置项）
            {
              value: 1,
              label: '男'
            },
            {
              value: 2,
              label: '女'
            }
          ]
        }
      ],
      // 表单
      form: {
        name: '',
        gender: '',
      }
    }
  },
  methods: {
    async search () {
      // 这里执行表单查询事件
      try {
        this.loading = true
        await $api.xxx()
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
```
:::


### Attributes

| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| loading | 是否loading状态 | boolean | true/false | false |
| option | 表单配置项，详细查看下方的option | array | - | - |
| form | 表单数据对象，类似v-model | object | - | - |


### option
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| type | 类型 | string | input/select/year/month/date/dates/week/datetime/datetimerange/daterange/monthrange/slot | - |
| label | 显示的标题 | string | — | - |
| prop | 对应的字段名 | string | — | - |
| toggle | 是否受展开、收起影响 | boolean | true/false | - |
| if | 类型v-if，返回true和false表示加载和隐藏 | boolean | true/false | - |

### option的input
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| blur | blur事件 | function | - | - |

### option的select
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| selectList | 下拉列表数据 | array | - | - |
| selectLabel | 匹配下拉列表数据里的label字段 | string | - | - |
| selectValue | 匹配下拉列表数据里的value字段 | string | - | - |

### option的date等日期选择器类型
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| pickerOptions | 日期选择器的快捷方式，使用方法同官网 | object | - | - |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| search | 查询按钮点击事件 | - |
| reset | 重置按钮点击事件 | - |
