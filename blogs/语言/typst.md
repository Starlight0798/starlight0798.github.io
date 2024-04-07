---
title: typst
date: 2024/04/07
tags:
 - typst
categories:
 - language
---

## Typst

Typst 是可用于出版的可编程标记语言，拥有变量、函数与包管理等现代编程语言的特性，注重于科学写作 (science writing)，定位与 LaTeX 相似。

- **语法简洁**：上手难度跟 Markdown 相当，文本源码阅读性高，不会像 LaTeX 一样充斥着反斜杠与花括号。
- **编译速度快**：Typst 使用 Rust 语言编写，即 typ(e+ru)st，目标运行平台是WASM，即浏览器本地离线运行；也可以编译成命令行工具，采用一种增量编译算法和一种有约束的版面缓存方案，文档长度基本不会影响编译速度，且编译速度与常见 Markdown 渲染引擎渲染速度相当。
- **环境搭建简单**：不需要像 LaTeX 一样折腾几个 G 的开发环境，原生支持中日韩等非拉丁语言，无论是官方 Web App 在线编辑，还是使用 VS Code 安装插件本地开发，都是即开即用。
- **现代编程语言**：Typst 是可用于出版的可编程标记语言，拥有变量、函数、包管理与错误检查等现代编程语言的特性，同时也提供了闭包等特性，便于进行函数式编程。以及包括了 [标记模式]、{脚本模式} 与 数学模式数学模式 等多种模式的作用域，并且它们可以不限深度地、交互地嵌套。并且通过 [包管理](https://typst-doc-cn.github.io/docs/packages/)，你不再需要像 TexLive 一样在本地安装一大堆并不必要的宏包，而是按需自动从云端下载。

Typst中文文档：https://typst-doc-cn.github.io/docs/chinese/

Typst官方文档：https://typst.app/docs/

Typst WebApp：https://typst.app/



先说结论，Typst真的太香了，用了它不想再用latex了，可惜目前typst才刚开源一年，不怎么普及，大家都还在用latex。

（待续）