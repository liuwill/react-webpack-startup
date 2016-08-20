[![Build Status](https://api.travis-ci.org/liuwill/react-webpack-startup.svg)](https://travis-ci.org/liuwill/react-webpack-startup)

React Webpack练手项目
=========

使用react开发的一个纯前端练手项目，该项目使用webpack对代码进行打包，使用gulp进行构建。对于抽象出的数据模型，使用Mocha进行简单的单元测试。

该项目的逻辑很简单，用户通过文件选择功能，选择一张图片，然后图片会以列表的形式展示出来。

## 操作说明

简单编译成功的代码后已经部署在Coding Pages上 [on the website](http://pages.liuwill.com/). 下面是简单构建的gulp命令:

```bash
#安装依赖包
npm install

#执行测试
npm test

#该命令将会下载依赖的js库，并且复制到static/lib
gulp bower

#该命令会将scss代码编译为css
gulp easy_sass

#该命令会调用webpack，对reract代码进行打包
gulp easy_webpack

#该命令启动一个静态服务器，可以加载制定目录下的静态页面和资源
gulp staticserver
```

通过顺序使用命令，可以方便的进行开发.

[maxin]: http://khan.github.io/react-components/