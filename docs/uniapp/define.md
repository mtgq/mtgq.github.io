# 项目中定义常量

### 新建 `/utils/define.js` 文件

```javascript
/* process.env.NODE_ENV设置生产环境模式 */

const baseURL = process.env.NODE_ENV === "production" ?
    "https://prod.com" : "http://localhost:30000" // 接口前缀
const define = {
    baseURL: baseURL
}
export default define
```

### 如何在 js 文件中使用

例如 `/utils/request.js` 文件

```javascript
import define from './define'

const host = define.baseURL
```
