# webpack4-vue-multiple-page-template

## TODO
- historyApiFallback.rewites
- optimize
  - DLL
  - CDN
- production ENV
- example
- 更改 page 搜寻方式为 NODE 方式
  - require.resolve find module
  - page find for nodeAPI automatic
- js
  - 转义
    - babel-core
    - babel-loader
    - babel-plugin-transform-runtime
    - babel-preset-env
    - babel-preset-stage-2
    - babel-runtime
    - babel-polyfill
  - 压缩
  - 分包
- css
  - 自动添加后缀
  - 压缩
  - 提取
  - 分包
- 资源（image video ...）
  - 转 dataURL
  - 转移

## outline
- vue-loader v15
  - 更改形式，从原先 v14<< 版本 loader 全部内置处理改为导出之后应用 webpack 配置项中的 loader 处理
- js
  - 转换
- css
  - 提取
  - 压缩
- assets
  - image => dataURL