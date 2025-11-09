---
title: "【Hexo blog NO.1】快速简洁高效搭建,零成本搭建个人博客|Hexo + GitHub Pages + Cloudflare Pages 完整指南"
published: 2025-01-18
pinned: true
description: "教程完整版，快速简洁搭建HEXO博客，以及安装和美化使用安知鱼主题进行个性化配置。"
tags: [hexo,教程,博客]
category: "hexo"
licenseName: "CC BY 4.0"
author: "小史先森"
sourceLink: "https://github.com/zhangsan/vue3-guide"
draft: false
date: 2025-11-02
# 修改这里：将对象改为字符串
image: "https://images.myso.dpdns.org/hexo/hexo博客搭建教程.webp"
# 如果需要 alt 文本，可以放在其他地方或删除
pubDate: 2025-11-08
---

本文详细介绍了如何使用Hexo框架搭建一个个人博客，并将其部署到GitHub Pages和Cloudflare Pages上。主要内容包括：

- 环境准备：安装Node.js和Git
- 配置Git和GitHub：设置SSH密钥，创建GitHub仓库
- 初始化Hexo项目：安装Hexo，创建新博客
- 部署到GitHub Pages：配置部署设置，推送静态文件
- 部署到Cloudflare Pages：连接GitHub仓库，自动部署
- 基本使用方法：创建新文章，本地预览，发布更新
- 这个教程适合那些想要快速搭建个人博客，但又不想花费太多成本的人。通过使用Hexo、GitHub和Cloudflare的免费服务，您可以轻松创建一个高效、简洁的博客网站。

---

# 1.事前准备

1. 域名（非必须，你也可以使用免费域名，或者`GitHub.io`或`Pages.dev`分配的域名也可以）
2. [GitHub](https://github.com)（必须，你需要注册一个GitHub帐号）
3. [Cloudflare](https://dash.cloudflare.com)（非必须，你需要注册一个Cloudflare帐号，这样你就可以将博客部署在CF的CDN里加速，但是你也可以直接使用`GitHub.io`分配的域名）


---
# 2.软件支持

1. [Node](https://blog.bsdan.dpdns.org/my/Hexo%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA/#2-1-%E5%AE%89%E8%A3%85-Node)（必须）
2. [Git](https://blog.bsdan.dpdns.org/my/Hexo%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA/#2-2-%E5%AE%89%E8%A3%85-Git)（必须）
3. [VSCode](https://code.visualstudio.com)（非必须，这是一款轻量型的代码编辑器，可以帮助你养成一个很好的编程习惯）

## 2.1.安装 Node
1. 打开Node官网，下载和自己系统相配的Node的安装程序，否则会出现安装问题。下载地址：https://nodejs.org/en
2. 下载后安装，安装的目录可以使用默认目录`C:/Program Files/nodejs/`
3. 安装完成后，检查是否安装成功。在键盘按下win + R键，输入CMD，然后回车，打开CMD窗口，执行`node -v`命令，看到版本信息，则说明安装成功。
![](https://images.myso.dpdns.org/2.1.3.webp)

4. 修改npm源。npm下载各种模块，默认是从国处服务器下载，速度较慢，建议配置成华为云镜像源。打开CMD窗口，运行如下命令:
```CMD
npm config set registry https://mirrors.huaweicloud.com/repository/npm/
```
## 2.2.安装 Git
1. 进入官网下载适合你当前系统的 Git：https://git-scm.com/downloads
![2.2.1](https://images.myso.dpdns.org/2.2.1.webp)

2. 下载后傻瓜式安装Git即可，安装的目录最好使用默认目录`C:/Program Files/Git`

3. 点击电脑左下角开始即可看见`Git CMD`、`Git Bash`、`Git GUI`。
- `Git CMD` 是windows 命令行的指令风格
- `Git Bash` 是linux系统的指令风格（建议使用）
- `Git GUI`是图形化界面（新手学习不建议使用）
---
# 3.配置 Git 密钥并连接至 Github
常用 Git 命令
```SHELL
git config -l  //查看所有配置
git config --system --list //查看系统配置
git config --global --list //查看用户（全局）配置
```
![](https://images.myso.dpdns.org/%E5%90%AF%E5%8A%A8GIT.webp)

## 3.1. 配置用户名和邮箱
```SHELL
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱"
```
通过`git config -l` 检查是否配置成功。
![3.1](https://images.myso.dpdns.org/3.1.webp)

## 3.2. 配置公钥连接Github

1. 执行以下命令生成ssh公钥，此公钥用于你的计算机连接Github
```SHELL
ssh-keygen -t rsa -C "你的邮箱"
```
提示`Enter file in which to save the key`直接一路回车即可，新手小白不推荐设置密钥
![3.2.1.1](https://images.myso.dpdns.org/3.2.1.1.webp)


之后打开C盘下用户文件夹下的.ssh的文件夹，会看到以下文件

- `id_rsa`私钥
- `id_rsa.pub`公钥
![3.2.1.2](https://images.myso.dpdns.org/3.2.1.2.webp)

用记事本打开上述图片中的公钥`id_rsa.pub`，复制里面的内容，然后开始在github中配置ssh密钥。
![](https://images.myso.dpdns.org/3.2.1.3.webp)

2. 将 SSH KEY 配置到 GitHub
进入github，点击右上角头像 选择`settings`，进入设置页后选择 `SSH and GPG keys`，名字随便起，公钥填到`Key`那一栏。
![3.2.2.1](https://images.myso.dpdns.org/3.2.2.1.webp)
![3.2.2.2](https://images.myso.dpdns.org/3.2.2.2.webp)
![3.2.2.3](https://images.myso.dpdns.org/3.2.2.3.webp)
![3.2.2.4](https://images.myso.dpdns.org/3.2.2.4.webp)




3. 测试连接，输入以下命令
```SHELL
ssh -T git@github.com
```
第一次连接会提示`Are you sure you want to continue connecting (yes/no/[fingerprint])?`，输入`yes`即可
![3.2.3.1](https://images.myso.dpdns.org/3.2.3.1.webp)

出现连接到账户的信息，说明已经大功告成，至此完成了环境准备工作。

![3.2.3.2](https://images.myso.dpdns.org/3.2.3.2.webp)


## 3.3. 创建GitHub.io仓库
1. 点击右上角的`+`按钮，选择New repository，创建一个`<用户名>.github.io`的仓库。
2. 仓库名字的格式必须为：`<用户名>.github.io` (注意：前缀必须为用户名，此为预览博客需要，后期可修改仓库名)
3. 可见性必须选择` Public` 方便第一次部署检查问题，点击 Creat repository 进行创建即可

![3.3](https://images.myso.dpdns.org/3.3.webp)

---

# 4.初始化 Hexo 博客

1. 创建一个文件夹来保存博客源码（我这里选的路径为`D:/Hexo-Blog`），在文件夹内右键鼠标，选择`Open Git Bash here`

![4.1](https://images.myso.dpdns.org/4.1.webp)

2. 在`Git BASH`输入如下命令安装 Hexo

```SHELL
npm install -g hexo-cli && hexo -v
```
![4.2](https://images.myso.dpdns.org/4.2.webp)

3. 安装完后输入`hexo -v`验证是否安装成功。

![4.3](https://images.myso.dpdns.org/4.3.webp)


4. 初始化 Hexo 项目安装相关依赖。
```SHELL
hexo init blog-demo
cd blog-demo
npm i
```
![](https://images.myso.dpdns.org/4.4.webp)

5. 初始化项目后，`blog-demo`有如下结构：

![4.5](https://images.myso.dpdns.org/4.5.webp)

- node_modules：依赖包
- scaffolds：生成文章的一些模板
- source：用来存放你的文章
- themes：主题
- .npmignore：发布时忽略的文件（可忽略）
- _config.landscape.yml：主题的配置文件
- config.yml：博客的配置文件
- package.json：项目名称、描述、版本、运行和开发等信

1. 输入`hexo cl && hexo s`启动项目

![4.6](https://images.myso.dpdns.org/4.6.webp)


2. 打开浏览器，输入地址：http://localhost:4000/ ，看到下面的效果，说明你的博客已经构建成功了。
![4.7](https://images.myso.dpdns.org/4.7.webp)

# 5.将静态博客挂载到 GitHub Pages

1. 安装 hexo-deployer-git
```SHELL
npm install hexo-deployer-git --save
```

2. 修改 `_config.yml `文件
在blog-demo目录下的_config.yml，就是整个Hexo框架的配置文件了。可以在里面修改大部分的配置。详细可参考官方的[配置描述](https://hexo.io/zh-cn/docs/configuration)。
修改最后一行的配置，将repository修改为你自己的github项目地址即可，还有分支要改为`main`代表主分支（注意缩进）。
```yaml
deploy:
  type: git
  repository: git@github.com:cmliussss2024/cmliussss2024.github.io.git
  branch: main
```

3. 修改好配置后，运行如下命令，将代码部署到 GitHub（Hexo三连）。
```SHELL
// Git BASH终端
hexo clean && hexo generate && hexo deploy  

// 或者

// VSCODE终端
hexo cl; hexo g; hexo d
```

- hexo clean：删除之前生成的文件，可以用`hexo cl`缩写。
- hexo generate：生成静态文章，可以用`hexo g`缩写
- hexo deploy：部署文章，可以用`hexo d`缩写

![5.3.1](https://images.myso.dpdns.org/5.3.1.webp)

> **注意：deploy时可能要你输入 username 和 password。**

如果出现`Deploy done`，则说明部署成功了。

![5.3.2](https://images.myso.dpdns.org/5.3.2.webp)

稍等两分钟，打开浏览器访问：https://cmliussss2024.github.io ，这时候我们就可以看到博客内容了。
![5.3.3](https://images.myso.dpdns.org/5.3.3.webp)

---

# 6.将静态博客挂载到 Cloudflare Pages

1. 在` Workers 和 Pages` 中选择 `Pages` 的 `连接到 Git`

![6.1.1](https://images.myso.dpdns.org/6.1.1.webp)
![6.1.2](https://images.myso.dpdns.org/6.1.2.webp)

2. 然后登录你Blog仓库对应的GitHub帐号
![6.2.1](https://images.myso.dpdns.org/6.2.1.webp)
![6.2.2](https://images.myso.dpdns.org/6.2.2.webp)

3. 点击`保存并部署`后等待部署完成即可。

![6.3](https://images.myso.dpdns.org/6.3.webp)

4. 提示`成功！您的项目已部署到以下区域：全球`后，浏览器访问：https://cmliussss2024-github-io.pages.dev ，这时候我们就可以看到博客内容了。

![6.4](https://images.myso.dpdns.org/6.4.webp)

这时你也就可以将你的`<用户名>.github.io`的仓库设置为`Private`私库了

5. 如果你有自己的域名，你可以在这里绑定你自己的自定义域，即可

![6.5](https://images.myso.dpdns.org/6.5.webp)

---

# 如何使用

## 新建一篇博文

```SHELL
hexo new 这是一篇新的博文
```
然后用文本编辑器去编辑`_posts/这是一篇新的博文.md`里的内容即可，注意要使用**Markdown**格式书写。

详细使用方法可以查阅 https://hexo.io/zh-cn/docs/writing

编辑完文章保存后可以使用如下命令，生成本地页面 http://localhost:4000/ ，进行预览

```SHELL
// Git BASH终端
hexo cl && hexo s

// 或者

// VSCODE终端
hexo cl; hexo s
```
确认无误后使用以下命令，将本地文章推送至GitHub仓库即可

```SHELL
// Git BASH终端
hexo cl && hexo g && hexo d

// 或者

// VSCODE终端
hexo cl; hexo g; hexo d
```
下一期会讲讲进阶的使用方法，主题美化

# VSCODE 终端首次执行报错

使用管理员身份打开 powershell ,输入以下命令
```POWERSHELL
Set-ExecutionPolicy RemoteSigned
```

视频说明：
> **视频如果在线看，若加载不出来，请下载到本地再观看哦**

NO1[下载](https://images.myso.dpdns.org/hexo/HexoNo1-1%20.mp4)
<video controls width="100%">
  <source src="https://images.myso.dpdns.org/hexo/HexoNo1-1%20.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>

NO2[下载](https://images.myso.dpdns.org/hexo/HexoNo1-2-.mp4)
<video controls width="100%">
  <source src="https://images.myso.dpdns.org/hexo/HexoNo1-2-.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>


### 完整视频教程：

<video controls width="100%">
  <source src="https://images.myso.dpdns.org/hexo/hexono1.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>


# 参考资料

https://hexo.io/zh-cn/
https://www.fomal.cc/posts/e593433d.html
https://docs.anheyu.com/
https://github.com/hexojs/hexo

版权[CM博客](https://blog.cmliussss.com/p/HexoBlogNo1/)


<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/GtYcFZ55GJI?si=0RHcZKGjl5HYjj0n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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
