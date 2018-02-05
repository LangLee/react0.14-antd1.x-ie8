# react0.14-antd1.x-ie8
基于react0.14+antd1.x版本实现的兼容IE8的react全家桶demo项目

#### 运行

npm install

npm run dev

即可通过访问地址：http://locallhost:8088/ 访问demo

#### 资源

react0.14

react-router2.0

redux3.x

react-redux4.x

webpack1.x

antd1.x

#### 兼容IE8

使用es5-shim、es5-shim/es5-sham、console-polyfill、core-js、es6-promise等做IE8兼容处理，在入口文件中引入

```
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('core-js');
require('es6-promise');
```

以及使用es3ify-loader对js文件打包处理

参考：

https://github.com/xcatliu/react-ie8

