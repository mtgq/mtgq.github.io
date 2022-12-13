# 项目中定义常量

新建 `src/utils/define.js` 文件


```js 
// 开发环境接口配置
const APIURl = 'http://192.168.1.130:30000/'

module.exports = {
  APIURl: APIURl,
  filePreviewServer:'http://1.192.217.27:30090',
}
```

在 main.js 中添加实例属性

```js
Vue.prototype.define = require('./utils/define');
```