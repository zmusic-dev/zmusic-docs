# 开发说明

## 项目概述

ZMusic 文档站点，基于 VitePress 构建。

## 常用命令

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm docs:dev

# 构建生产版本
pnpm docs:build

# 预览构建结果
pnpm docs:preview

# 代码格式化
pnpm exec prettier --write .
```

## 项目结构

```text
docs/
├── .vitepress/
│   ├── config.mts         # VitePress 主配置
│   └── theme/             # 自定义主题
│       ├── components/    # 自定义组件
│       ├── data/          # 数据文件
│       ├── utils/         # 工具函数
│       ├── index.ts       # 主题入口
│       └── style.css      # 全局样式
├── guide/                 # 中文指南
├── en/                    # 英文文档
├── zh-tw/                 # 繁体中文文档
├── ja/                    # 日文文档
├── v2/                    # V2 文档归档
└── public/                # 静态资源
```

## 技术栈

- VitePress 2.0.0-alpha
- Vue 3.5
- pnpm 10.x
- Node.js 20+

## 多语言配置

路由映射：
- `/`：简体中文 (root locale)
- `/en/`：English
- `/zh-tw/`：繁體中文
- `/ja/`：日本語

配置架构（`config.mts`）：
- 使用 `LocaleKey` 类型定义语言标识
- `localeNavigationCopy` / `localeSidebarCopy` 存储各语言文案
- `createNav(locale)` / `createSidebar(locale)` 函数生成导航和侧边栏
- 新增页面需同步更新 `localeSidebarCopy` 和调用处

## 主题扩展

主题入口 `theme/index.ts`：
- 继承 `DefaultTheme`
- 使用 Layout slots 注入自定义组件：
  - `doc-before`: DocPageHeading
  - `home-hero-image`: HomeHeroScene
- 全局注册组件：DownloadTable、NeteaseApiTable、V4Warning

组件替换（Vite alias）：
- 通过 `vite.resolve.alias` 替换默认组件
- 已替换：VPNavBarMenuLink、VPMenuLink、VPSidebarItem

## 部署

推送到 `main` 分支后，GitHub Actions 执行构建并部署到服务器。
