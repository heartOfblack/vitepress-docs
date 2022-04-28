// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core'

import {
  LineChart, // 折线图
  BarChart, // 柱形图
  PieChart, // 饼图
  ScatterChart // 散点图
} from 'echarts/charts'

import {
  // TitleComponent, // 标题
  LegendComponent, // 图例
  TooltipComponent, // 提示框
  GridComponent, // 直角坐标系
  DataZoomComponent, // 区域缩放
  GeoComponent // 地图坐标系
} from 'echarts/components'

// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'

// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'

// 注册必须的组件
echarts.use([
  LineChart,
  BarChart,
  PieChart,
  ScatterChart,

  // TitleComponent,
  LegendComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  GeoComponent,

  LabelLayout,
  UniversalTransition,

  CanvasRenderer
])

export default echarts
