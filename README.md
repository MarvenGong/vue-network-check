# vue-network-check

> vue网络检测插件，检测到网络连接失败，会在顶部展示微信网络连接一样的提示

## git 仓库地址

[https://github.com/MarvenGong/vue-network-check](https://github.com/MarvenGong/vue-network-check)

## 版本说明
- 1.0.0 正式版本
## 安装

``` bash
# install dependencies
npm install vue-network-check
```
## 使用
在main.js中加入如下代码即可
~~~javascript
import VueNetworkCheck from 'vue-network-check';
Vue.use(VueNetworkCheck);
~~~
如果需要自定义提示内容，调用插件时传入参数即可
~~~javascript
Vue.use(VueNetworkCheck, {
  text: '自定义提示信息'
});
~~~
## 效果
<img src="http://fastmock.ufile.ucloud.com.cn/vue-network-check.jpeg" width = "100%" />