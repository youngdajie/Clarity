---
title: 使用文档
description: 鉴于主题开发者没有提供详实的说明文档，我根据自己摸索的经验，整理了这份博客框架的使用指南。
date: 2026-05-27 14:00:00
image: https://picture.yangjie.site/api/random?type=pc
categories: [其他]
references:
  - title: 在 GitHub 托管
    link: https://github.com/youngdajie
recommend: 50
---

## 创建文章
用这博客框架做出来的网站，速度极快，优化极好。用来写写文章，纵享丝滑体验

有两种方式创建文章：

### 命令行（推荐）
```sh
pnpm new
```
在项目根目录输入以上命令，根据提示输入文章标题，选择`分类`、`标签`、`版式`后，回车即可

这样做的好处是，不需要再额外的编辑 markdown 文件的 Frontmatter，自动生成了相应的标签，安心写作就好

### 手动创建
在`@/content/posts`目录下，手动创建一个文件，如`example.md`文件，如果不手动指定文章URL，文件名字绝不能用中文。创建好了以后进入该文件进行编辑，添加`Frontmatter`

在编辑页最上方复制粘贴如下文本：
```sh
---
title: 文章的标题
description: 描述这篇文章讲了什么东西
date: 2026-05-27 15:12:21
updated: 2026-05-27 15:12:21
image: https://cdn.example.cn
# permalink: /posts/a2927f1
categories: [其他]
tags: [test]
# type: story
references:
  - title: 本文章引用
    link: https://www.example.cn/xxx
recommend: 50
---
```

| Frontmatter       | 说明                         |
| ---------- | ---------------------------- |
| date   | 创建这篇文章的日期              |
| updated       | 更新这篇文章的日期                  |
| image   | 这篇文章的封面，可以选择填写图片的 https 链接，也可以写本地图片路径            |
| permalink | 文章URL，用命令行创建的话可以自动生成随机路径，手动创建的也可以自定义|
| categories | 文章分类，可以多个，例：`[1, 2, 3]`，英文逗号后面空一格|
| tags | 文章标签，可以多个，例：`[1, 2, 3]`，英文逗号后面空一格|
| type | 文章版式，默认技术`tech`，可以写成`type: story`故事类|
| references | 参考链接，格式如上述所示|
| recommend | 文章精选，后面接数字，数字越大，越靠前。没有这个，首页将不在精选框中展示该文章|


其中可以缺省的，在前面加个`#`注释掉，或者干脆不写，如`updated`, `image`, `permalink`, `categories`, `tags`, `type`, `references`, `recommend`

## 学习 `Markdown` 语法

去 [B站](https://www.bilibili.com) 搜搜相关教程，以下简单介绍：

`Markdown` 是一种轻量级的标记语言，它允许你使用易读易写的纯文本格式来编写文档。

简单来说，它的核心就是“用键盘符号代替鼠标排版”，让你能彻底告别繁琐的格式调整，专注于内容创作本身。

它的核心优势：
- 简单易学：只需记住几个简单的符号（如 `#`、`*`、`-`），就能快速完成标题、加粗、列表等排版。
- 纯文本兼容性强：文件体积非常小，任何设备上的记事本都能打开和编辑，且不用担心格式错乱。
- 跨平台通用：无论是笔记软件（如语雀、飞书）、代码托管平台（如 GitHub），还是各类博客和 AI 工具，都完美支持 Markdown。

最常用的 3 个基础语法：
1. 设置标题：在文字前加 `#` 和一个空格（`#` 数量代表标题级别，如 `#` 一级标题、`##` 二级标题）。
2. 文字加粗：在文字前后各加两个星号，如 `**加粗文字**`。
3. 无序列表：在文字前加减号和一个空格，如 `-` 列表项。

上手非常简单，下次写笔记或文档时，不妨试着敲下你的第一个 `#` 号！

## 丰富的组件样式

除了最基础的 `Markdown` 样式外，这个博客提供了丰富且功能强大的组件，具体用法，移驾至 **组件样式示例** 这篇文章

## 网站的其他配置

在 `@/blog.config.ts`, `@/app/app.config.ts` 路径下，修改两个文件。注：`@` 指的是项目根目录

- blog.config.ts 中的站点信息、Umami 站点统计、Cloudflare Insights 统计、Twikoo 评论服务源
- app.config.ts 中的页脚导航、出生年份等