// 图表中的基本色
const blue = '#1f78ff' // 蓝色
const green = '#22e5d1' // 绿色
const orange = '#ff8800' // 橙色
const cyan = '#00c17f' // 青色
const purple = '#a54fe3' // 紫色
const yellow = '#f4d64e' // 黄色
const rose = '#ff2787' // 玫红色
const violet = '#6600ff' // 紫罗蓝
const red = '#fb4750' // 红色

// 文字
const colorTextPrimary = '#fff' // 主要文字。用于一级信息：页面标题，内容模块标题，重要数据文字
const colorTextRegular = '#ccc' // 常规文字。用于二级信息，大部分正文内容
const colorTextSecondary = '#999' // 次要文字。用于三级信息，辅助说明文字，图表坐标数据文字等
const colorTextPlaceholder = '#666' // 占位文字。用于次要辅助说明文字

// 边框
const borderColorBase = '#33373d'

// 功能区块背景色。用于各模块的色块，表格背景色
const backgroundColorBase = 'transparent'

// 滚动条颜色
// const colorScrollbar = '#252c3b'
const inactiveColor = '#666'
const pageIconInactiveColor = '#54575e'
const tooltipBackColor = 'rgba(51, 55, 61, 0.9)'
const dataZoomHandleColor = '#22e5d1'
const dataZoomHandleBorderColor = 'rgba(0, 245, 171, 0.5)'
const dataZoomFillerColor = 'rgba(34, 229, 209, 0.1)'
const dataZoomBackColor = 'rgba(51, 55, 61, 0.21)'


// 颜色数组
const colors = {
  blue,
  green,
  orange,
  cyan,
  purple,
  yellow,
  rose,
  violet,
  red
}

// 返回特定颜色，或第九条开始都为灰色的数组
export function chartColor (value) {
  if (value) {
    return colors[value]
  } else {
    const repeatColor = Object.keys(colors).map(k => colors[k]).splice(0, 8).concat(Array(50).fill(inactiveColor))
    return repeatColor
  }
}

const theme = {
  color: chartColor(),
  textStyle: {},
  title: {
    textStyle: {
      color: colorTextPrimary
    },
    subtextStyle: {
      color: colorTextPrimary
    }
  },
  backgroundColor: backgroundColorBase,
  // : '折线图',
  line: {
    lineStyle: {
      width: 2
    },
    itemStyle: {
      opacity: 1,
      borderWidth: 0
    },
    emphasis: {
      itemStyle: {
        opacity: 1,
        borderWidth: 2
      }
    },
    smooth: false,
    symbol: 'circle',
    symbolSize: 2
  },
  // : '柱形图',
  bar: {
    barMaxWidth: 20,
    // : '不同系列柱间距离',
    barGap: '0%'
  },
  // : '箱线图',
  boxplot: {
    // : '箱线图的边框宽度',
    itemStyle: {
      borderWidth: 2
    },
    // : '箱线图的box 的宽度的上下限',
    boxWidth: [
      7,
      20
    ],
    // : '提示框浮层内容格式器',
    tooltip: {}
  },
  // : '散点图',
  scatter: {},
  // : '类目轴',
  categoryAxis: {
    // : '坐标轴轴线',
    // boundaryGap: false,
    axisLine: {
      show: true,
      lineStyle: {
        type: 'solid',
        // : '轴线颜色',
        color: colorTextPlaceholder
      }
    },
    // : '坐标轴刻度',
    axisTick: {
      show: false,
      // : '刻度朝内',
      inside: true,
      // : '刻度线和标签对齐',
      alignWithLabel: true,
      lineStyle: {
        // : '刻度线颜色',
        color: borderColorBase,
        // : '刻度线长度',
        length: 3
      }
    },
    // : '坐标轴刻度标签',
    axisLabel: {
      show: true,
      // : '刻度标签文字颜色',
      color: colorTextSecondary
    },
    // : '坐标轴名称的文字样式',
    nameTextStyle: {
      color: colorTextSecondary
    },
    z: 2
  },
  // : '数值轴',
  valueAxis: {
    // : '数值轴轴线',
    // boundaryGap: true,
    axisLine: {
      show: true,
      lineStyle: {
        type: 'solid',
        // : '数值轴颜色',
        color: borderColorBase
      }
    },
    // : '数值轴刻度',
    axisTick: {
      show: true,
      inside: true,
      lineStyle: {
        color: borderColorBase
      }
    },
    // : '数值轴刻度标签',
    axisLabel: {
      show: true,
      inside: false,
      verticalAlign: 'middle',
      showMaxLabel: true, // 展示 Y 轴最大刻度
      color: colorTextSecondary
    },
    // : '坐标轴在 grid 区域中的分隔线',
    splitLine: {
      show: true,
      lineStyle: {
        color: borderColorBase
      }
    },
    // : '坐标轴在 grid 区域中的分隔区域',
    splitArea: {
      show: false
    },
    // : '坐标轴名称的文字样式',
    nameTextStyle: {
      color: colorTextSecondary
    }
  },
  // : '时间轴',
  timeAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        type: 'solid',
        color: borderColorBase
      }
    },
    axisTick: {
      show: true,
      inside: true,
      alignWithLabel: true,
      lineStyle: {
        color: borderColorBase,
        length: 3
      }
    },
    axisLabel: {
      show: true,
      color: colorTextSecondary
    },
    // : '坐标轴在 grid 区域中的分隔线',
    splitLine: {
      show: true,
      lineStyle: {
        color: borderColorBase
      }
    }
  },
  // : '工具栏',
  toolbox: {
    show: false
  },
  // : '直角坐标系内绘图网格',
  grid: {
    show: true,
    top: 50,
    left: 55,
    right: 22,
    bottom: 50,
    containLabel: true,
    borderColor: borderColorBase
  },
  // : '图例',
  legend: {
    itemGap: 30,
    itemWidth: 18,
    itemHeight: 8,
    borderRadius: 0,
    textStyle: {
      padding: [
        5,
        2
      ],
      color: colorTextRegular,
      'font-family': 'MicrosoftYaHei'
    },
    inactiveColor,
    pageIconColor: colorTextSecondary,
    pageIconInactiveColor
  },
  // : '提示框',
  tooltip: {
    confine: true,
    show: true,
    trigger: 'axis',
    appendToBody: true,
    renderMode: 'html',
    borderWidth: 2,
    borderColor: borderColorBase,
    backgroundColor: tooltipBackColor,
    extraCssText: 'border-radius: 0;  background-color: ' + tooltipBackColor,
    padding: 12,
    textStyle: {
      color: colorTextPrimary,
      'font-family': 'MicrosoftYaHei',
      align: 'left',
      lineStyle: {
        color: colorTextRegular,
        width: 1
      },
      crossStyle: {
        color: colorTextRegular,
        width: 1
      }
    }
  },
  axisPointer: {
    // : '坐标轴指示器',
    lineStyle: {
      color: 'rgba(255, 255, 255, .4)'
    },
    label: {
      show: true,
      color: colorTextPrimary
    }
  },
  // : '区域缩放',
  dataZoom: {
    height: 15,
    showDetail: false,
    moveHandleSize: 0,
    fillerColor: dataZoomFillerColor,
    borderColor: borderColorBase,
    backgroundColor: dataZoomBackColor,
    handleStyle: {
      borderColor: dataZoomHandleBorderColor,
      borderWidth: 1,
      color: dataZoomHandleColor
    },
    showDataShadow: false
  }
}

export { theme }
