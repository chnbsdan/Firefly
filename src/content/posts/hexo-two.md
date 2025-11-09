---
title: "【Hexo blog NO.2】如何安装和美化|使用安知鱼主题进行个性化配置"
published: 2025-02-10
pinned: true
description: "安装和美化|使用安知鱼主题进行个性化配置。"
tags: [hexo.教程,博客指南]
category: "hexo"
licenseName: "CC BY 4.0"
author: "小史先森"
sourceLink: "https://blog.1356666.xyz"
draft: false
date: 2025-11-08
# 修改这里：将对象改为字符串
image: "https://images.myso.dpdns.org/hexo/hexo主题安装美化.webp"
# 如果需要 alt 文本，可以放在其他地方或删除
pubDate: 2025-11-08
---

# 美化Hexo博客，主题安装配置

这期教程演示将使用一款基于[hexo-theme-butterfly](https://github.com/jerryc127/hexo-theme-butterfly)修改的主題-安知鱼，安知鱼是一个简洁、美丽的静态hexo主题

项目地址：https://github.com/anzhiyu-c/hexo-theme-anzhiyu
官方文档：https://docs.anheyu.com/initall.html

## 1.安装主题
### 1.1. Git 安裝
在博客根目录里安装最新版主题
```SHELL
git clone -b main https://github.com/anzhiyu-c/hexo-theme-anzhiyu.git themes/anzhiyu
```

第一次使用需要安装 pug 以及 stylus 的渲染器
```SHELL
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

### 1.2. 应用主题
修改 hexo 配置文件`_config.yml`，把主题改为`anzhiyu`
```PLAINTEXT
theme: anzhiyu
```

### 1.3. 覆盖配置
覆盖配置可以使`主题配置`放置在 anzhiyu 目录之外，避免在更新主题时丢失自定义的配置。

如果你是linux系统就执行以下命令
```BASH
cp -rf ./themes/anzhiyu/_config.yml ./_config.anzhiyu.yml
```

如果你是windows系统就请手动将`/themes/anzhiyu/_config.yml`复制到根目录下并重命名为`_config.anzhiyu.yml`即可。

以后如果修改任何主题配置，都只需修改` _config.anzhiyu.yml` 的配置即可。

注意：

-  只要存在于` _config.anzhiyu.yml` 的配置都是高优先级，修改原` _config.yml `是无效的。
-  每次更新主题可能存在配置变更，请注意更新说明，可能需要手动对` _config.anzhiyu.yml` 同步修改。
-  想查看覆盖配置有没有生效，可以通过` hexo g --debug `查看命令行输出。
-  如果想将某些配置覆盖为空，注意不要把主键删掉，不然是无法覆盖的

### 1.4. 配置主题与主站配置文件

到这一步主题部署就完成了，就是这么简单！！！
```SHELL
//本地预览
hexo cl; hexo s

//推送更新上线
hexo cl; hexo g; hexo d
```

### 1.5. 生成标签页和分类页
执行以下命令生成标签页
```SHELL
hexo new page tags
```


找到 `source/tags/index.md `这个文件，修改添加` type: "tags"`
```PLAINTEXT
---
title: 标签
date: 2024-07-05 03:36:02
type: "tags"
comments: false
top_img: false
---
```

执行以下命令生成分类页
```SHELL
hexo new page categories
```

找到 `source/categories/index.md` 这个文件，修改添加` type: "categories"`
```PLAINTEXT
---
title: 分类
date: 2024-07-05 03:36:48
aside: false
top_img: false
type: "categories"
---
```


剩下的工作就是配置`_config.yml`和`_config.anzhiyu.yml`文件，修改博客参数。

## 2. 配置文章模版
`/scaffolds`目录下有几个模版文件，其中

- post.md：新建博文模版
- page.md：新建标签页模版

**post.md**模版，仅供参考
```YML
---
title: {{ title }} #【必需】页面标题
date: {{ date }} #【必需】页面创建日期
updated: #【可选】页面更新日期
tags: #【可选】文章标签
categories: #【可选】文章分类
keywords: #【可选】文章关键字
description: #【可选】文章描述
top: # 1 置顶
top_img: #【可选】文章顶部图片
comments: #【可选】显示文章评论模块(默认 true)
cover: https://img.090227.xyz/file/ae62475a131f3734a201c.png #【可选】文章缩略图(如果没有设置 top_img,文章页顶部将显示缩略图，可设为 false/图片地址/留空)
toc: #【可选】显示文章 TOC(默认为设置中 toc 的 enable 配置)
toc_number: #【可选】显示 toc_number(默认为设置中 toc 的 number 配置)
toc_style_simple: #【可选】显示 toc 简洁模式
copyright: #【可选】显示文章版权模块(默认为设置中 post_copyright 的 enable 配置)
copyright_author: #【可选】文章版权模块的文章作者
copyright_author_href: #【可选】文章版权模块的文章作者链接
copyright_url: #【可选】文章版权模块的文章作者链接
copyright_info: #【可选】文章版权模块的版权声明文字
mathjax: #【可选】显示 mathjax(当设置 mathjax 的 per_page: false 时，才需要配置，默认 false)
katex: #【可选】显示 katex(当设置 katex 的 per_page: false 时，才需要配置，默认 false)
aplayer: #【可选】在需要的页面加载 aplayer 的 js 和 css,请参考文章下面的音乐 配置
highlight_shrink: #【可选】配置代码框是否展开(true/false)(默认为设置中 highlight_shrink 的配置)
aside: #【可选】显示侧边栏 (默认 true)
swiper_index: 10 #【可选】首页轮播图配置 index 索引，数字越小越靠前
top_group_index: 10 #【可选】首页右侧卡片组配置, 数字越小越靠前
ai: #【可选】文章ai摘要
background: "#fff" #【可选】文章主色，必须是16进制颜色且有6位，不可缩减，例如#ffffff 不可写成#fff
---
<div class="video-container">
[up主专用，视频内嵌代码贴在这]
</div>

<style>
.video-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 aspect ratio (height/width = 9/16 * 100%) */
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>


```


**page.md**模版，仅供参考

```YML
---
title: {{ title }} #【必需】页面标题
date: {{ date }} #【必需】页面创建日期
type: #【必需】标签、分类、关于、音乐馆、友情链接、相册、相册详情、朋友圈、即刻页面需要配置
updated: #【可选】页面更新日期
comments: #【可选】显示页面评论模块(默认 true)
description: #【可选】页面描述
keywords: #【可选】页面关键字
top_img: https://img.090227.xyz/file/ae62475a131f3734a201c.png #【可选】页面顶部图片
mathjax: #【可选】显示 mathjax(当设置 mathjax 的 per_page: false 时，才需要配置，默认 false)
katex: #【可选】显示 katex(当设置 katex 的 per_page: false 时，才需要配置，默认 false)
aside: #【可选】显示侧边栏 (默认 true)
aplayer: #【可选】在需要的页面加载 aplayer 的 js 和 css,请参考文章下面的音乐 配置
highlight_shrink: #【可选】配置代码框是否展开(true/false)(默认为设置中 highlight_shrink 的配置)
top_single_background: #【可选】部分页面的顶部模块背景图片
---
```
---


# 更多功能

## 新建文章
### 新建博文命令

```SHELL
hexo new 这是一篇新的博文
```

### 新建标签页命令
```SHELL
hexo new page 新建的标签页
```

---

## 文章置顶

### 安装插件
```SHELL
npm install hexo-generator-topindex --save
```


## 设置置顶

给需要置顶的文章加入top参数，如下：
```YML
---
title: 每天一个linux命令
date: 2017-01-23 11:41:48
top: 1
categories:
- 运维
tags:
- linux命令
---
```

如果存在多个置顶文章，top后的参数越大，越靠前。

---

# 开启本地搜索
## 安装插件
你需要安装 [hexo-generator-search](https://github.com/wzpan/hexo-generator-search)，根据它的文档去做相应配置
```SHELL
npm install hexo-generator-search --save
```


## 设置主题配置文件

```YML
local_search:
  enable: true
  preload: false
  CDN:
```



|参数|	    解释|
|:---:|:---:|
|enable	|是否开启本地搜索|
|preload|预加载，开启后，进入网页后会自动加载搜索文件。关闭时，只有点击搜索按钮后，才会加载搜索文件|
|CDN|	搜索文件的 CDN 地址（默认使用的本地链接）|

---
## 添加任意文件
例如当我们想在网站根目录添加`ads.txt`文件，来通过站长验证时，我们只需要在`/source`文件夹下放置该文件即可。


原文[转载](https://blog.cmliussss.com/)
---
视频说明：
> 视频如果在线看，刷新不出来，可以下载到本地再观看

video[下载](https://images.myso.dpdns.org/hexo/hexo%20no.2.mp4)

<video controls width="100%">
  <source src="https://images.myso.dpdns.org/hexo/hexo%20no.2.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>

# 参考资料
https://docs.anheyu.com/initall.html
https://www.fomal.cc/posts/4aa2d85f.html
https://github.com/anzhiyu-c/hexo-theme-anzhiyu/blob/dev/README.md?plain=1
https://blog.csdn.net/COCO56/article/details/103840966


# 嵌入youtube视频

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Qss3XdMsHKM?si=Cv7piFDOYrbI9ZBl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<style>
.video-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 aspect ratio (height/width = 9/16 * 100%) */
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
