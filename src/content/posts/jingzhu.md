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

## 别知己
<audio controls style="width: 100%">
  <source src="https://fly.hangdn.com/assets/music/%E5%88%AB%E7%9F%A5%E5%B7%B1%20(%E5%85%B8%E8%97%8F%E6%AD%A3%E7%89%88)%20-%20%E6%B5%B7%E6%9D%A5%E9%98%BF%E6%9C%A8.mp3" type="audio/flac">
  您的浏览器不支持播放此音频。
</audio>

## 英雄泪
<audio controls style="width: 100%">
  <source src="https://fly.hangdn.com/assets/music/%E8%8B%B1%E9%9B%84%E6%B3%AA2.mp3" type="audio/flac">
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


<!-- 第一个播放器 -->
<div class="music-item">
  <div class="song-info">别知己</div>
  <audio controls>
    <source src="https://fly.hangdn.com/assets/music/%E5%88%AB%E7%9F%A5%E5%B7%B1%20(%E5%85%B8%E8%97%8F%E6%AD%A3%E7%89%88)%20-%20%E6%B5%B7%E6%9D%A5%E9%98%BF%E6%9C%A8.mp3" type="audio/flac">
  </audio>
</div>

<!-- 第二个播放器 -->
<div class="music-item">
  <div class="song-info">英雄泪 - 王杰</div>
  <audio controls>
    <source src="https://fly.hangdn.com/assets/music/%E8%8B%B1%E9%9B%84%E6%B3%AA2.mp3" type="audio/flac">
  </audio>
</div>

<!-- 第三个播放器 -->
<div class="music-item">
  <div class="song-info">光辉岁月 - BEYOND</div>
  <audio controls>
    <source src="https://fly.hangdn.com/assets/music/光辉岁月 - BEYOND.mp3" type="audio/flac">
  </audio>
</div>

<style>
.music-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px;
  margin-bottom: 15px;
  background: #f8f9fa;
  border-radius: 10px;
  border: 1px solid #e9ecef;
  max-width: 600px;
}

.song-info {
  min-width: 200px;
  font-weight: bold;
  color: #333;
}

.music-item audio {
  flex: 1;
  height: 40px;
}
</style>

---
<div class="modern-music-player">
  <!-- 第一个播放器 -->
  <div class="music-card">
    <div class="card-gradient"></div>
    <div class="card-content">
      <div class="album-art">
        <div class="vinyl">
          <div class="vinyl-inner"></div>
        </div>
        <div class="music-waves">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </div>
      <div class="song-details">
        <h3 class="song-title">别知己</h3>
        <p class="artist">海来阿木</p>
        <div class="music-progress">
          <div class="progress-bar">
            <div class="progress"></div>
          </div>
        </div>
      </div>
      <audio class="audio-element">
        <source src="https://fly.hangdn.com/assets/music/%E5%88%AB%E7%9F%A5%E5%B7%B1%20(%E5%85%B8%E8%97%8F%E6%AD%A3%E7%89%88)%20-%20%E6%B5%B7%E6%9D%A5%E9%98%BF%E6%9C%A8.mp3" type="audio/mp3">
      </audio>
      <div class="player-controls">
        <button class="control-btn play-btn">
          <svg class="play-icon" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <svg class="pause-icon" viewBox="0 0 24 24" style="display: none;">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        </button>
        <div class="time-display">0:00</div>
      </div>
    </div>
  </div>

  <!-- 第二个播放器 -->
  <div class="music-card">
    <div class="card-gradient"></div>
    <div class="card-content">
      <div class="album-art">
        <div class="vinyl">
          <div class="vinyl-inner"></div>
        </div>
        <div class="music-waves">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </div>
      <div class="song-details">
        <h3 class="song-title">英雄泪</h3>
        <p class="artist">王杰</p>
        <div class="music-progress">
          <div class="progress-bar">
            <div class="progress"></div>
          </div>
        </div>
      </div>
      <audio class="audio-element">
        <source src="https://fly.hangdn.com/assets/music/%E8%8B%B1%E9%9B%84%E6%B3%AA2.mp3" type="audio/mp3">
      </audio>
      <div class="player-controls">
        <button class="control-btn play-btn">
          <svg class="play-icon" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <svg class="pause-icon" viewBox="0 0 24 24" style="display: none;">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        </button>
        <div class="time-display">0:00</div>
      </div>
    </div>
  </div>

  <!-- 第三个播放器 -->
  <div class="music-card">
    <div class="card-gradient"></div>
    <div class="card-content">
      <div class="album-art">
        <div class="vinyl">
          <div class="vinyl-inner"></div>
        </div>
        <div class="music-waves">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </div>
      <div class="song-details">
        <h3 class="song-title">光辉岁月</h3>
        <p class="artist">BEYOND</p>
        <div class="music-progress">
          <div class="progress-bar">
            <div class="progress"></div>
          </div>
        </div>
      </div>
      <audio class="audio-element">
        <source src="https://fly.hangdn.com/assets/music/%E5%85%89%E8%BE%89%E5%B2%81%E6%9C%88%20-%20BEYOND.mp3" type="audio/mp3">
      </audio>
      <div class="player-controls">
        <button class="control-btn play-btn">
          <svg class="play-icon" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <svg class="pause-icon" viewBox="0 0 24 24" style="display: none;">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        </button>
        <div class="time-display">0:00</div>
      </div>
    </div>
  </div>
</div>

<style>
.modern-music-player {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.music-card {
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 25px;
  margin-bottom: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.music-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.card-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #f5576c);
  background-size: 300% 100%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.card-content {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 25px;
  align-items: center;
}

.album-art {
  position: relative;
  width: 80px;
  height: 80px;
}

.vinyl {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #2c3e50, #34495e);
  border-radius: 50%;
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.6s ease;
}

.vinyl-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: #ecf0f1;
  border-radius: 50%;
  border: 2px solid #bdc3c7;
}

.music-card.playing .vinyl {
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.music-waves {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.music-card.playing .music-waves {
  opacity: 1;
}

.wave {
  width: 4px;
  height: 20px;
  background: #667eea;
  margin: 0 2px;
  border-radius: 2px;
  display: inline-block;
  animation: wave 1.2s infinite ease-in-out;
}

.wave:nth-child(2) { animation-delay: -1.1s; }
.wave:nth-child(3) { animation-delay: -0.9s; }

@keyframes wave {
  0%, 40%, 100% { transform: scaleY(0.4); }
  20% { transform: scaleY(1); }
}

.song-details {
  flex: 1;
}

.song-title {
  font-size: 1.4em;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 5px 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.artist {
  color: #7f8c8d;
  margin: 0 0 15px 0;
  font-size: 0.95em;
}

.music-progress {
  width: 100%;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 3px;
  width: 0%;
  transition: width 0.1s ease;
}

.player-controls {
  display: flex;
  align-items: center;
  gap: 15px;
}

.control-btn {
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.control-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.control-btn svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

.time-display {
  font-size: 0.9em;
  color: #7f8c8d;
  font-variant-numeric: tabular-nums;
  min-width: 45px;
}

.audio-element {
  display: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .card-content {
    grid-template-columns: 1fr;
    gap: 20px;
    text-align: center;
  }
  
  .album-art {
    margin: 0 auto;
  }
  
  .player-controls {
    justify-content: center;
  }
  
  .music-card {
    padding: 20px;
  }
}

/* 暗色主题支持 */
@media (prefers-color-scheme: dark) {
  .music-card {
    background: rgba(30, 30, 30, 0.6);
    border-color: rgba(255, 255, 255, 0.1);
  }
  
  .song-title {
    background: linear-gradient(135deg, #f093fb, #f5576c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .artist {
    color: #bdc3c7;
  }
}
</style>

<script>
document.querySelectorAll('.music-card').forEach(card => {
  const audio = card.querySelector('.audio-element');
  const playBtn = card.querySelector('.play-btn');
  const playIcon = card.querySelector('.play-icon');
  const pauseIcon = card.querySelector('.pause-icon');
  const progress = card.querySelector('.progress');
  const timeDisplay = card.querySelector('.time-display');
  const progressBar = card.querySelector('.progress-bar');
  
  // 播放/暂停功能
  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      // 暂停其他正在播放的音乐
      document.querySelectorAll('.audio-element').forEach(otherAudio => {
        if (otherAudio !== audio && !otherAudio.paused) {
          otherAudio.pause();
          otherAudio.closest('.music-card').classList.remove('playing');
          otherAudio.closest('.music-card').querySelector('.play-icon').style.display = 'block';
          otherAudio.closest('.music-card').querySelector('.pause-icon').style.display = 'none';
        }
      });
      
      audio.play();
      card.classList.add('playing');
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
    } else {
      audio.pause();
      card.classList.remove('playing');
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
    }
  });
  
  // 更新进度条
  audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + '%';
    
    // 更新时间显示
    const currentTime = formatTime(audio.currentTime);
    const duration = formatTime(audio.duration);
    timeDisplay.textContent = `${currentTime}`;
  });
  
  // 点击进度条跳转
  progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * audio.duration;
  });
  
  // 音乐结束重置
  audio.addEventListener('ended', () => {
    card.classList.remove('playing');
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    progress.style.width = '0%';
    timeDisplay.textContent = '0:00';
  });
});

function formatTime(seconds) {
  if (isNaN(seconds)) return '0:00';
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec.toString().padStart(2, '0')}`;
}
</script>

---
表格示例：

| 功能 | 描述 | 状态 |
|------|------|------|
| Markdown | 基础文本格式化 | ✅ |
| HTML | 高级布局和样式 | ✅ |
| CSS | 自定义样式 | ✅ |

<footer style="text-align: center; color: #6a737d; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e1e4e8;">
<p>© 2024 您的项目名称</p>
</footer>

