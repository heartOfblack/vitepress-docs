vitepress搭建的文档项目

目录结构
- .vitepress vitepress相关配置
- components 组件库
- images 组件库用到的图片
- md 示例的说明文档，所有示例均在此处写
- plugins 因为文档是独立的，兼容储能云的样式，plugins和components文件夹内容与储能云项目一致
- style 相关样式文件

## 运行使用

1.	`npm i`
2. `npm run dev` 运行服务
3. `npm run build` 打包到dist目录
4. `npm run serve` 打包后运行该服务可直接查看打包效果