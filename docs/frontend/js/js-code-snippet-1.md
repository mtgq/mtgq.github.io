# js 代码片段


## 判断是否是移动端

```js
function _getIsPC() {
    const userAgentInfo = navigator.userAgent;
    const Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
```

## 获取浏览器地址栏参数

```js
function _getAllUrlParam() {
    let url = decodeURIComponent(location.href);
    if (url.lastIndexOf('?') < 0) {
        return {};
    }
    const arr = url.substring(location.href.lastIndexOf('?') + 1).split('&');
    return arr.reduce((key, value) => {
        const _cks = value.split('=');
        return {
            ...key,
            [_cks[0]]: _cks[1],
        };
    }, {});
};
let urlParams = _getAllUrlParam();
console.log(urlParams);
```