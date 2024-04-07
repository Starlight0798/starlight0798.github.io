---
title: Introduce
date: 2024/04/07
---

## 2024-4-7

Hello! 我正在南开大学就读本科信息安全专业，欢迎加我qq or Wx聊天！

本人目前掌握以下技能：

- Python : 深度学习，机器学习，爬虫
- C++：面向对象编程，网络编程
- SQL：增删改查
- 安全逆向工具如IDA, OLLYDBG, X64DBG

​	去年暑假研究了一下强化学习方面的内容，拿了腾讯开悟公开赛的冠军，收获很大！强化学习吧，是一个好方向，它相比CV, NLP那些我认为具有一层更高的层次，因为训练的是“决策智能”。之所以叫强化学习，是因为我们需要训练一个或多个智能体在一个复杂的动作空间&状态空间下完成连续的决策，以求最高的奖励(或称为回报)，因此AI十分有可能超出我们的预期，达到一种前所未有的智能程度，自主决策(当然这是理想状态)。在比赛中我也体会到了这点，至少智能体在游戏场景都能够表现得十分出色，其操作，配合甚至突破了我们的固有认知。强化学习最大的瓶颈也在于很难放到现实生活中实际投入使用，如自动驾驶，智能医疗，智能运餐车等，因为强化学习是先决策后学习，无论是在线学习还是离线学习，都需要一个“反复试错”的过程，这个过程是无法避免的，而现实可没机会给你试错，像自动驾驶这种，你只能线上模拟训练智能体，但是模拟终归是模拟，想要投入使用，必须再次经过长久的测试。总之，慢慢看吧。

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

