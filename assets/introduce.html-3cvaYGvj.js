import{_ as n,o as s,c as a,e}from"./app-C0Lbf0T7.js";const t={},p=e(`<h2 id="_2024-4-7" tabindex="-1"><a class="header-anchor" href="#_2024-4-7" aria-hidden="true">#</a> 2024-4-7</h2><p>Hello! 我正在南开大学就读本科信息安全专业，欢迎加我qq or Wx聊天！</p><p>本人目前掌握以下技能：</p><ul><li>Python : 深度学习，机器学习，爬虫</li><li>C++：面向对象编程，网络编程</li><li>SQL：增删改查</li><li>安全逆向工具如IDA, OLLYDBG, X64DBG</li></ul><p>​ 去年暑假研究了一下强化学习方面的内容，拿了腾讯开悟公开赛的冠军，收获很大！强化学习吧，是一个好方向，它相比CV, NLP那些我认为具有一层更高的层次，因为训练的是“决策智能”。之所以叫强化学习，是因为我们需要训练一个或多个智能体在一个复杂的动作空间&amp;状态空间下完成连续的决策，以求最高的奖励(或称为回报)，因此AI十分有可能超出我们的预期，达到一种前所未有的智能程度，自主决策(当然这是理想状态)。在比赛中我也体会到了这点，至少智能体在游戏场景都能够表现得十分出色，其操作，配合甚至突破了我们的固有认知。强化学习最大的瓶颈也在于很难放到现实生活中实际投入使用，如自动驾驶，智能医疗，智能运餐车等，因为强化学习是先决策后学习，无论是在线学习还是离线学习，都需要一个“反复试错”的过程，这个过程是无法避免的，而现实可没机会给你试错，像自动驾驶这种，你只能线上模拟训练智能体，但是模拟终归是模拟，想要投入使用，必须再次经过长久的测试。总之，慢慢看吧。</p><p>​ 最近在研究Vue前端，看到了vuepress这个主题，好用就拿来了，顺便学了下Typescript的写法，不得不说类型检查是真的yyds。</p><p>​ 写博客就是要高效，不能写完还得vuepress build，打开dist文件夹，切换分支上传，这样也太慢了。因此我写了个yml Github工作流，写完push完md即可自动部署，在这里分享一下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy VuePress Site

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main  

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout code
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">20</span>  

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run build

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> peaceiris/actions<span class="token punctuation">-</span>gh<span class="token punctuation">-</span>pages@v3.9.3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">publish_dir</span><span class="token punctuation">:</span> ./.vuepress/dist  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[p];function i(u,c){return s(),a("div",null,l)}const d=n(t,[["render",i],["__file","introduce.html.vue"]]);export{d as default};
