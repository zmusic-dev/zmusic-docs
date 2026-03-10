# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

ZMusic 文档站点，基于 VuePress 2 + vuepress-theme-hope 主题构建。

## 常用命令

```bash
# 安装依赖
pnpm install

# 启动开发服务器 (端口 6480)
pnpm dev

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview

# 代码格式化
pnpm exec prettier --write .
```

## 项目架构

```
docs/
├── .vuepress/
│   ├── config.ts          # VuePress 主配置
│   ├── config/
│   │   ├── theme.ts       # 主题配置 (hopeTheme)
│   │   ├── navbar.ts      # 导航栏配置 (中/英)
│   │   └── sidebar.ts     # 侧边栏配置 (中/英)
│   ├── components/        # 自动注册的 Vue 组件
│   │   ├── download.vue   # 下载列表组件 (从 GitHub/Gitee/SpigotMC 获取)
│   │   └── netease-api.vue
│   ├── data/              # 数据文件
│   └── styles/            # 样式文件 (SCSS)
├── guide/                 # 指南文档 (中文)
├── en/                    # 英文文档 (结构与中文相同)
├── faq.md                 # 常见问题
└── netease-api.md         # 网易云音乐 API 文档
```

## 技术栈

- **框架**: VuePress 2 (Vue 3)
- **打包**: Vite (`@vuepress/bundler-vite`)
- **主题**: vuepress-theme-hope
- **包管理**: pnpm 10.x
- **Node**: 18+ (CI 使用 24)

## 代码风格

- 单引号、无分号、无尾逗号 (见 `.prettierrc`)
- 缩进: 2 空格
- Vue 组件使用 `<script lang="ts" setup>` 语法

## 多语言支持

- `/` - 中文 (默认)
- `/en/` - 英文

添加新页面时需同步更新 `navbar.ts` 和 `sidebar.ts` 中的中英文配置。

## 部署

推送到 main 分支后自动通过 GitHub Actions 构建，产物部署到服务器。
