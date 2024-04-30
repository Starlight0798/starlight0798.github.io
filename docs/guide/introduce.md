---
title: Introduce
date: 2024/04/07
---

Hello! 我正在南开大学就读本科信息安全专业，欢迎加我qq or Wx聊天！

本人目前掌握以下技能：

- Python : 深度学习，机器学习，网络爬虫等
- C++：面向对象编程，网络编程
- SQL：增删改查
- 安全逆向工具如IDA, OLLYDBG, X64DBG
- BurpSuite, reqable抓包，API接口测试

​	最近在研究Vue前端，看到了vuepress这个主题，好用就拿来了，顺便学了下Typescript的写法，不得不说类型检查是真的yyds。

​	写博客就是要高效，不能写完还得vuepress build，打开dist文件夹，切换分支上传，这样也太慢了。因此我写了个yml Github工作流，写完push完md即可自动部署，在这里分享一下：

```yaml
name: Deploy VuePress Site

on:
  push:
    branches:
      - main  

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20  

      - name: Install dependencies
        run: npm install

      - name: Build VuePress site
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3.9.3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./.vuepress/dist  
```

