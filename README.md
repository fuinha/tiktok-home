# :space_invader: React Native Tiktok Home

## 运行 Demo

1. 克隆仓库

```
git clone git@github.com:bolan9999/tiktok-home.git
```

2. 安装 JS 依赖

```
yarn install
```

3. 配置并安装 pod

```
cd ios && pod install && cd ..
```

4. 运行

```
//iOS
yarn ios
//Android
yarn android
```

## 项目文件夹架构

## App项目文件目录结构
+ Api                               Http Api请求接口
    + index.ts                      向外导出的Api
    + \*\*\*\*Api.ts                逻辑上一类Api的集合

+ Pages                             逻辑页面
    + Home                          首页相关页面
        + index.ts                  向外导出的此文件夹的所有页面
        + Home.tsx                  首页
        + Comments.tsx              评论页面
        + HomeTab.tsx               首页顶部的Tab
        + styles.ts                 首页的页面样式
        + TVideo.tsx                视频页面
        + VideoList.tsx             视频列表
    + index.ts                      导出所有逻辑页面，App应用页面入口

+ Components                        通用组件
    + index.ts                      向外导出的组件
    + TypedComponent                公共的组件，带有ts申明，可以直接使用国际化Store，以及登录信息等

+ Modules                           通用的模块
    + index.ts                      导出所有的通用模块
    + Strings                       用于支持多语言以及国际化
    + PublicStyles                  可服用的公共的样式
    + Tools                         通用可复用的小公举

+ Types                             三方库补充申明文件

## :bookmark: License

This project is [MIT](LICENSE) licensed.
