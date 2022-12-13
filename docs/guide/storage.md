# vue 项目封装 storage

## 新建 setting.js 文件

```javascript
const settings = {
    "app": {
        "storagePrefix": "fa_",
    },
}

export default settings
```
## 新建 storage.js文件
```javascript
import settings from '@/settings'

const storage = {
    local: {
        has: key => {
            return Object.prototype.hasOwnProperty.call(localStorage, `${settings.app.storagePrefix}${key}`)
        },
        get: key => {
            return localStorage.getItem(`${settings.app.storagePrefix}${key}`)
        },
        set: (key, value) => {
            localStorage.setItem(`${settings.app.storagePrefix}${key}`, value)
        },
        remove: key => {
            localStorage.removeItem(`${settings.app.storagePrefix}${key}`)
        },
        clear: () => {
            localStorage.clear()
        }
    },
    session: {
        has: key => {
            return Object.prototype.hasOwnProperty.call(sessionStorage, `${settings.app.storagePrefix}${key}`)
        },
        get: key => {
            return sessionStorage.getItem(`${settings.app.storagePrefix}${key}`)
        },
        set: (key, value) => {
            sessionStorage.setItem(`${settings.app.storagePrefix}${key}`, value)
        },
        remove: key => {
            sessionStorage.removeItem(`${settings.app.storagePrefix}${key}`)
        },
        clear: () => {
            sessionStorage.clear()
        }
    }
}

export default storage
```

## 然后在需要使用到 storage 的地方引入：

```javascript
import storage from '@/utils/storage'
```

这个类封装了 `setItem()` ，`getItem()` ，`removeItem()` ，`clear()` 方法，同时还增加了一个 `has()` 方法用来判断对象是否存在：

```javascript
// localStorage
storage.local.has(key)
storage.local.get(key)
storage.local.set(key, value)
storage.local.remove(key)
storage.local.clear()

// sessionStorage
storage.session.has(key)
storage.session.get(key)
storage.session.set(key, value)
storage.session.remove(key)
storage.session.clear()
```