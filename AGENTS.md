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
├── config.mts             # VitePress 主配置
├── theme/
│   ├── components/        # 自定义主题组件
│   ├── data/              # 主题数据文件
│   ├── utils/             # 主题工具函数
│   ├── index.ts           # 主题入口
│   └── style.css          # 全局主题样式
├── guide/                 # 中文指南
├── en/                    # 英文文档
├── zh-tw/                 # 繁体中文文档
├── ja/                    # 日文文档
├── v2/                    # V2 文档归档
└── public/                # 静态资源
```

## 技术栈

- VitePress
- Vue 3
- pnpm 10.x
- Node.js 20+

## 多语言

- `/`：简体中文
- `/en/`：English
- `/zh-tw/`：繁體中文
- `/ja/`：日本語

新增页面时需要同步更新 `docs/.vitepress/config.mts` 中的多语言导航和侧边栏配置。

## 部署

推送到 `main` 分支后，GitHub Actions 会执行 `pnpm docs:build`，并将 `docs/.vitepress/dist` 部署到服务器。
