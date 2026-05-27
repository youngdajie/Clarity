# Clarity

@JIE 尽量与上游 `https://github.com/L33Z22L11/blog-v3` 保持一致

[![框架](https://img.shields.io/badge/框架-Nuxt-00DC82?logo=Nuxt.js)](https://nuxt.com/)
[![CMS](https://img.shields.io/badge/CMS-Nuxt%20Content-00DC82?logo=Nuxt.js)](https://content.nuxt.com/)
[![部署平台](https://img.shields.io/badge/部署平台-Vercel-000000?logo=Vercel)](https://vercel.com/)
[![访问统计](https://img.shields.io/badge/访问统计-Umami-000000?logo=Umami)](https://github.com/umami-software/umami)
[![代码风格](https://img.shields.io/badge/代码风格-ESLint-4B32C3?logo=ESLint)](https://eslint.org/)
[![代码风格](https://img.shields.io/badge/代码风格-Stylelint-263238?logo=Stylelint)](https://stylelint.io/)

## 使用本主题的博客

> [!WARNING]
>
> 修改本项目需要具备**前端开发**和**项目部署**能力。由于这是个人博客，代码经过深度定制，且可能会进行较大幅度的更新，建议您 Fork 后安心使用自己分支的版本；若需引入上游（本仓库）的新功能，建议重新 Fork 最新代码，以避免同步冲突。
>
> 如果需要协助或有问题咨询，欢迎加入 QQ 群 169994096 讨论/闲聊，我会在空闲时尽力解答。

> 主题吸收了 [Stellar](https://github.com/xaoxuu/hexo-theme-stellar) 的设计风格，命名为 **Clarity**，寓意清楚的阅读体验和清晰的观点表达。限于下游越来越多，未来将会有选择地收录。                                           |

## 特性

[主题特性](https://blog.zhilu.site/theme) · [组件示例](https://blog.zhilu.site/previews/example)

## 目录结构

项目使用 [Nuxt 4 项目目录结构](https://nuxt.com/docs/4.x/guide/directory-structure/app/app)。

```sh
.
├── app # 前端
│   ├── assets # 资源文件
│   ├── components # 组件
│   │   ├── blog # 博客布局组件
│   │   ├── content # MDC组件
│   │   ├── partial # 微型组件
│   │   ├── popover # 弹窗组件
│   │   ├── post # 文章组件
│   │   ├── util # 功能组件
│   │   └── widget # 侧栏小组件
│   ├── composables # Vue 组合式函数
│   ├── pages # 页面
│   │   ├── [...slug].vue # 正文、404页面
│   │   ├── archive.vue # 归档
│   │   ├── link.vue # 友链
│   │   ├── index.vue # 首页
│   │   └── preview.vue # 预览的文章
│   ├── plugins # Nuxt / Vue 插件
│   ├── stores # Pinia 状态管理
│   ├── types # 类型定义
│   ├── utils # 工具函数
│   ├── app.config.ts # 前端响应式配置★
│   ├── app.vue # 基本布局
│   ├── error.vue # 意外错误页
│   └── feeds.ts # 友链列表★
├── content # 文章
│   ├── posts # 正式文章
│   ├── previews # 草稿文章，仅可被站内搜索
│   ├── link.md # 友链要求
│   └── theme.md # 主题介绍
├── modules # Nuxt 模块
│   └── anti-mirror # 恶意反代跳转
├── patches # npm 包补丁
├── public # 静态资源，生成在站点根目录
│   ├── assets # 订阅源 XSLT 模板
│   └── fonts # 字体
├── remark-plugins # Unified 生态插件
├── scripts # npm 脚本
├── server # 服务端
│   ├── api # 接口
│   │   └── stats.get.ts # 博客静态统计
│   └── routes # 根路由
│       ├── atom.xml.get.ts # Atom 订阅源
│       └── zhilu.opml.get.ts # OPML 订阅源聚合
├── blog.config.ts # 博客静态公共配置★
├── content.config.ts # Nuxt Content 配置
├── edgeone.json # EdgeOne 配置
├── nuxt.config.ts # Nuxt 配置
└── redirects.json # 旧站点重定向配置
```

## 快速开始

### 安装依赖

```sh
pnpm i
```

### 初始配置

```sh
pnpm init-project # 初始化项目配置
```

- 在启动或部署项目时，你需要移除我的文章、我的个人信息、我的统计/评论配置。
  - `blog.config.ts` 中的站点信息、Umami 站点统计、Cloudflare Insights 统计、Twikoo 评论服务源。
  - `app.config.ts` 中的页脚导航、出生年份等。

- 为保证开发体验，需要安装 ESLint、Stylelint 等 VS Code 扩展。如果你不喜欢此项目的格式化风格，可以在 `./eslint.config.mjs` 和 `./.vscode/settings.json` 中调整或者不安装 VS Code 扩展。

- 如果文章 URL 和先前的不相同，可以通过编辑 `redirects.json` 来添加重定向。

### 创建文章

- 启用 `blog.config.ts` 中的 `article.useRandomPremalink`，即可在创建文章时随机生成 URL。

```sh
pnpm new
```

### 运行开发环境

```sh
pnpm dev
```

### 构建生产环境

```sh
pnpm generate
pnpm preview
```

### 部署指南

支持 Vercel、Netlify、Cloudflare Pages、EdgeOne 等平台部署。建议采用静态（SSG）部署方式：

- 构建命令: `pnpm generate`
- 输出目录: `dist`
- 安装命令: `pnpm i`

如果直接使用平台提供的“Nuxt”预设部署，则会变成 SSR 模式，此模式每次访问都会等待服务端重新渲染。请参阅 [Nuxt 文档](https://nuxt.com/docs/getting-started/deployment) 和 [Nuxt Content 文档](https://content.nuxt.com/docs/deploy/static) 的“部署”一节。

#### 疑难解答

- 当你发现文章页面 404 问题时，请注意文章 URL 不应尾随 `/`。
- 如果修改了 API 路径，使用 EdgeOne 部署需要同步修改 `edgeone.json`。
- 运行、部署项目时 Node.js 版本需要遵照 `package.json` 限制，推荐使用 Node LTS 最新版。

### 检测友链状态

```sh
pnpm check:feed # 检测某友链 / 任意 URL 的托管商及可访问性
pnpm check:feed/all # 检测所有友链可访问性并生成报告
```

## 贡献

欢迎参与项目：如果有具体问题或功能建议，可以发起 Issue；如果愿意在已确定的方向上增加功能或修复问题，可以提交 Pull Request。