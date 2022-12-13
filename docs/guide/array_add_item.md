# 向数据添加元素

```js
let images = [{ src: 'img.png' }, { src: 'j1.json' }, { src: 'img.png' }, { src: 'j2.json' }];

const list = images.map((item, index) => {
    item['new_key'] = item['src'];

    return item;
});

console.log(list);
```