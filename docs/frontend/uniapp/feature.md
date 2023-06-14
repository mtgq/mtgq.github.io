# 开发注意事项

转载自：https://v1.uviewui.com/components/feature.html

## 设置页面背景颜色

一般情况下，我们给页面的`page`节点或者给页面的最外层`view`设置背景颜色，二者分别有如下需要注意点：

#### 1. 通过`page`节点设置  
这个方式全端有效，但是需要注意的是，在微信小程序，或者某些安卓机型上，该节点如果写在带`scoped`属性的样式标签内是无效的，所以我们建议
您可以在页面多加一个不带scoped属性的样式标签，如下：

```css
/* 如果需要css的支持，还可以添加lang属性 */
<style lang="scss">
page {
	background-color: $u-bg-color;
}
</style>

/* 带scoed属性的其他样式 */
<style lang="scss" scoped>
.box {
	......
}
</style>
```

#### 2. 通过页面外层`view`设置

相比`page`节点，`view`的高度默认为内容高度，所以如果页面内容不足一屏高度时，底部剩余部分依然为默认的白色，所以我们给需要这个`view`设置一个
最低高度，让它等于窗口高度：

```html
<template>
	<view class="wrap">
		......
	</view>
</template>

<style scoped lang="scss">
.wrap {
	background-color: $u-bg-color;
	min-height: 100vh;
}
</style>
```

## 小程序主包太大无法预览和发布

我们都知道微信小程序预览和发布的主包大小都不能超过`2M`，否则无法真机预览和上传发布，经常有同学反馈刚使用uView，调试时候主包就超过了`2M`而无法真机预览，
我们在这里做一个说明，uView是`按需引入`的，在发行时，HX会自动剔除您没有使用组件，即使您使用了uViwe的全部组件，整个uView的大小也只有500K左右，但是有如下两点前提：

- **调试**  
在调试阶段，为了调试的友好效果和编译速度等，HX默认是没有对JS进行压缩和去除注释，也没有进行组件按需引入的，所以会导致JS文件都很大，我们需要在
HBuilder X进行如下操作，再重新编译即可：  

```js
HBuilderX   运行->运行到小程序模拟器->勾选 运行时是否压缩代码
```

- **发布**  
在HX中进行发布时，uView的组件会按需引入(使用uView所有组件的情况下，占用空间500k左右)，如果主包依然超出`2M`，您需要从多个方面着手：
1. [小程序分包](https://uniapp.dcloud.io/collocation/pages?id=subpackages)
2. 将静态资源放到服务器进行引用
3. 取消"ES6转ES5"设置