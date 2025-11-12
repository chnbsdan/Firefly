---
title: "博客模版，示例"
published: 2025-11-10
pinned: false
description: "示例。"
tags: [示例,博客指南]
category: "经典收藏"
licenseName: "CC BY 4.0"
author: "小史先森"
sourceLink: "https://blog.1356666.xyz"
draft: false
date: 2025-6-08
# 修改这里：将对象改为字符串
image: "https://fly.hangdn.com/assets/images/cover2.webp"
# 如果需要 alt 文本，可以放在其他地方或删除
pubDate: 2025-6-08
---

# 页面主标题

这里是Markdown内容，可以正常使用**加粗**、*斜体*、[链接](https://github.com)等语法。

## 二级标题

Markdown列表：
- 项目1
- 项目2
- 项目3

<style>
.html-section {
    background: #f8f9fa;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    padding: 20px;
    margin: 20px 0;
}

.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
    margin: 20px 0;
}

.card {
    background: white;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    padding: 16px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.card:hover {
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
    transform: translateY(-2px);
}

.highlight {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 16px;
    border-radius: 6px;
    text-align: center;
    margin: 20px 0;
}

@media (max-width: 768px) {
    .card-container {
        grid-template-columns: 1fr;
    }
}
</style>

## HTML 增强内容

<div class="highlight">
<strong>💡 提示框</strong>：这里是使用HTML和CSS增强的内容区域
</div>

### 卡片布局示例

<div class="card-container">
<div class="card">
<h4>卡片标题 1</h4>
<p>卡片内容描述...</p>
</div>

<div class="card">
<h4>卡片标题 2</h4>
<p>卡片内容描述...</p>
</div>

<div class="card">
<h4>卡片标题 3</h4>
<p>卡片内容描述...</p>
</div>
</div>

## 回到纯Markdown

继续使用Markdown语法：

```python
def hello_world():
    print("Hello GitHub!")
表格示例：

功能	描述	状态
Markdown	基础文本格式化	✅
HTML	高级布局和样式	✅
CSS	自定义样式	✅
<div class="html-section"> <h3>另一个HTML区块</h3> <p>这里可以放置需要特殊样式的内容</p> <button onclick="alert('GitHub支持基础HTML!')">点击测试</button> </div>
<footer style="text-align: center; color: #6a737d; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e1e4e8;"> <p>© 2024 您的项目名称 | <a href="https://github.com/yourusername" style="color: #0366d6;">GitHub主页</a> | 使用 <span style="color: #e34c26;">HTML</span> + <span style="color: #563d7c;">Markdown</span> 混合编写 </p> </footer> ```

