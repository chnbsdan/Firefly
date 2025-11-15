---
title: "博客模版，示例"
published: 2025-11-10
pinned: false
description: "示例。"
tags: [示例,博客指南]
category: "经典收藏"
licenseName: "CC BY 4.0"
author: "小史先森"
sourceLink: "https://fly.hangdn.com"
draft: false
date: 2025-6-08
# 修改这里：将对象改为字符串
image: "https://fly.hangdn.com/assets/images/mbcover.png"
# 如果需要 alt 文本，可以放在其他地方或删除
pubDate: 2025-6-08
---

# 页面标题

这里是Markdown内容，可以正常使用**加粗**、*斜体*、[链接](https://github.com)等语法。

## 二级标题

Markdown列表：
- 项目1
- 项目2
- 项目3

# 现代化卡片展示

<style>
.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
    margin: 30px 0;
}

.modern-card {
    background: linear-gradient(145deg, #ffffff, #f8fafc);
    border: none;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 
        0 4px 20px rgba(0,0,0,0.08),
        0 2px 8px rgba(0,0,0,0.04);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.modern-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
}

.modern-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
        0 20px 40px rgba(0,0,0,0.12),
        0 8px 24px rgba(0,0,0,0.08);
}

.card-icon {
    font-size: 2.5em;
    margin-bottom: 16px;
    display: block;
}

.card-title {
    font-size: 1.3em;
    font-weight: 700;
    margin: 0 0 12px 0;
    color: #1a202c;
}

.card-content {
    color: #4a5568;
    line-height: 1.6;
    margin: 0;
}

.glow-button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.glow-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.modern-card {
    animation: fadeInUp 0.6s ease-out;
}

.modern-card:nth-child(2) {
    animation-delay: 0.1s;
}

.modern-card:nth-child(3) {
    animation-delay: 0.2s;
}
</style>

<div class="card-container">
<div class="modern-card">
<div class="card-icon">🚀</div>
<h3 class="card-title">极致性能</h3>
<p class="card-content">采用最新技术栈，确保应用运行流畅，响应迅速，为用户提供无缝体验。</p>
<button class="glow-button">了解更多</button>
</div>

<div class="modern-card">
<div class="card-icon">🎨</div>
<h3 class="card-title">现代设计</h3>
<p class="card-content">简洁美观的界面设计，精心调校的动画效果，让每一次交互都充满愉悦。</p>
<button class="glow-button">探索设计</button>
</div>

<div class="modern-card">
<div class="card-icon">⚡</div>
<h3 class="card-title">快速开发</h3>
<p class="card-content">完善的组件库和开发工具，大幅提升开发效率，快速构建高质量应用。</p>
<button class="glow-button">开始使用</button>
</div>
</div>

## 特性亮点

这些卡片具有：
- **悬浮效果**：鼠标悬停时优雅上浮
- **渐变边框**：顶部彩色渐变装饰
- **柔和阴影**：多层阴影营造深度感
- **流畅动画**：入场动画和交互反馈
- **现代化配色**：精心挑选的渐变色彩

<audio controls style="width: 100%">
  <source src="https://fly.hangdn.com/assets/music/%E5%88%AB%E7%9F%A5%E5%B7%B1%20(%E5%85%B8%E8%97%8F%E6%AD%A3%E7%89%88)%20-%20%E6%B5%B7%E6%9D%A5%E9%98%BF%E6%9C%A8.mp3" type="audio/flac">
  您的浏览器不支持播放此音频。
</audio>

[🎵 别知已 - 海来阿木](https://fly.hangdn.com/assets/music/%E5%88%AB%E7%9F%A5%E5%B7%B1%20(%E5%85%B8%E8%97%8F%E6%AD%A3%E7%89%88)%20-%20%E6%B5%B7%E6%9D%A5%E9%98%BF%E6%9C%A8.mp3)

<div class="highlight">
<strong>💡 提示框</strong>：这里是使用HTML和CSS增强的内容区域
</div>

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

代码块示例：

def hello_world():
print("Hello GitHub!")

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


表格示例：

| 功能 | 描述 | 状态 |
|------|------|------|
| Markdown | 基础文本格式化 | ✅ |
| HTML | 高级布局和样式 | ✅ |
| CSS | 自定义样式 | ✅ |

<footer style="text-align: center; color: #6a737d; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e1e4e8;">
<p>© 2024 您的项目名称</p>
</footer>

