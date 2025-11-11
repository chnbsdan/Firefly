// public/assets/js/music-player.js
(function() {
  if (!window.MUSIC_CONFIG || !window.MUSIC_CONFIG.enable) return;
  
  const config = window.MUSIC_CONFIG;
  const APLAYER_JS_PATH = window.APLAYER_JS_PATH;
  const METING_JS_PATH = window.METING_JS_PATH;

  // 状态变量
  let lyricsVisible = localStorage.getItem('lyricsVisible') !== 'false';
  let metingEl = null;
  let aplayer = null;
  let lyricsInterval = null;
  let currentLyric = '';

  // DOM 引用
  const capsule = document.getElementById('music-capsule');
  const capsuleCover = document.getElementById('capsule-cover');
  const playerWrap = document.getElementById('player-wrap');
  const aplayerContainer = document.getElementById('aplayer-container');
  const rightMenu = document.getElementById('right-menu');
  const floatingLyrics = document.getElementById('floating-lyrics');
  const currentLineEl = floatingLyrics?.querySelector('.current-line');
  const nextLineEl = floatingLyrics?.querySelector('.next-line');

  // 初始化音乐播放器
  function initMeting(){
    if (aplayer) return Promise.resolve(aplayer);
    return new Promise((resolve, reject) => {
      if (metingEl && metingEl.aplayer) {
        aplayer = metingEl.aplayer;
        bindAPlayerEvents(aplayer);
        return resolve(aplayer);
      }

      // 创建 meting-js 元素
      aplayerContainer.innerHTML = '';
      
      if (config.mode === "meting" && config.meting) {
        metingEl = document.createElement('meting-js');
        metingEl.setAttribute('server', config.meting.server || 'netease');
        metingEl.setAttribute('type', config.meting.type || 'playlist');
        metingEl.setAttribute('id', config.meting.id || '');
        if (config.meting.api) metingEl.setAttribute('api', config.meting.api);
        if (config.meting.auth) metingEl.setAttribute('auth', config.meting.auth);
        metingEl.setAttribute('fixed', (config.player?.fixed ?? true) ? 'true' : 'false');
        metingEl.setAttribute('mini', (config.player?.mini ?? true) ? 'true' : 'false');
        metingEl.setAttribute('autoplay', config.player?.autoplay ? 'true' : 'false');
        metingEl.setAttribute('theme', config.player?.theme || '#b7daff');
        metingEl.setAttribute('loop', config.player?.loop || 'all');
        metingEl.setAttribute('order', config.player?.order || 'list');
        metingEl.setAttribute('preload', config.player?.preload || 'auto');
        metingEl.setAttribute('volume', String(config.player?.volume ?? 0.7));
        metingEl.setAttribute('mutex', config.player?.mutex !== false ? 'true' : 'false');
        metingEl.setAttribute('lrc-type', String(config.player?.lrcType ?? 3));
        metingEl.setAttribute('list-folded', config.player?.listFolded ? 'true' : 'false');
        metingEl.setAttribute('list-max-height', config.player?.listMaxHeight || '340px');
        metingEl.setAttribute('storage-name', config.player?.storageName || 'aplayer-setting');
      } else if (config.mode === "local" && config.local && config.local.length > 0) {
        if (config.local.length === 1) {
          const song = config.local[0];
          metingEl = document.createElement('meting-js');
          metingEl.setAttribute('name', song?.name || '');
          metingEl.setAttribute('artist', song?.artist || '');
          metingEl.setAttribute('url', song?.url || '');
          if (song?.cover) metingEl.setAttribute('cover', song.cover);
          metingEl.setAttribute('fixed', (config.player?.fixed ?? true) ? 'true' : 'false');
          metingEl.setAttribute('mini', (config.player?.mini ?? true) ? 'true' : 'false');
          metingEl.setAttribute('autoplay', config.player?.autoplay ? 'true' : 'false');
          metingEl.setAttribute('theme', config.player?.theme || '#b7daff');
          metingEl.setAttribute('loop', config.player?.loop || 'all');
          metingEl.setAttribute('order', config.player?.order || 'list');
          metingEl.setAttribute('preload', config.player?.preload || 'auto');
          metingEl.setAttribute('volume', String(config.player?.volume ?? 0.7));
          metingEl.setAttribute('mutex', config.player?.mutex !== false ? 'true' : 'false');
          metingEl.setAttribute('lrc-type', song?.lrc ? '2' : '0');
          metingEl.setAttribute('list-folded', config.player?.listFolded ? 'true' : 'false');
          metingEl.setAttribute('list-max-height', config.player?.listMaxHeight || '340px');
          metingEl.setAttribute('storage-name', config.player?.storageName || 'aplayer-setting');
          
          if (song?.lrc) {
            const lrcElement = document.createElement('pre');
            lrcElement.hidden = true;
            lrcElement.textContent = song.lrc;
            metingEl.appendChild(lrcElement);
          }
        }
      }

      if (metingEl) {
        aplayerContainer.appendChild(metingEl);
      }

      // 等待渲染完成
      let handled = false;
      function tryResolve(){
        if (handled) return;
        if (metingEl && metingEl.aplayer) {
          aplayer = metingEl.aplayer;
          handled = true;
          bindAPlayerEvents(aplayer);
          resolve(aplayer);
        }
      }
      
      if (metingEl) {
        metingEl.addEventListener('rendered', tryResolve);
      }
      
      const poll = setInterval(()=>{ 
        tryResolve(); 
        if(handled) clearInterval(poll); 
      }, 300);
      
      setTimeout(()=>{ 
        if(!handled){ 
          clearInterval(poll); 
          reject(new Error('APlayer 初始化超时')); 
        }
      }, 9000);
    });
  }

  // 绑定 APlayer 事件
  function bindAPlayerEvents(ap){
    if (!ap) return;
    
    function updateCover(){
      try {
        const info = ap.list.audios[ap.list.index];
        if (info && info.cover && capsuleCover) {
          capsuleCover.src = info.cover;
        }
      } catch(e){
        console.log('更新封面失败:', e);
      }
    }
    
    ap.on('loadeddata', updateCover);
    ap.on('listswitch', updateCover);
    ap.on('play', ()=> {
      if (capsule) capsule.classList.add('playing');
      startLyricsUpdate(ap);
    });
    ap.on('pause', ()=> {
      if (capsule) capsule.classList.remove('playing');
      if (floatingLyrics) floatingLyrics.classList.remove('show');
      currentLyric = '';
    });
    ap.on('ended', ()=> {
      if (floatingLyrics) floatingLyrics.classList.remove('show');
      currentLyric = '';
    });
  }

  // 歌词更新功能
  function startLyricsUpdate(ap) {
    if (lyricsInterval) {
      clearInterval(lyricsInterval);
    }
    
    lyricsInterval = setInterval(() => {
      updateLyricsFromDOM();
    }, 100);
  }

  function updateLyricsFromDOM() {
    try {
      if (!lyricsVisible) return;
      
      const lrcContainer = document.querySelector('.aplayer-lrc');
      if (!lrcContainer) {
        if (floatingLyrics) floatingLyrics.classList.remove('show');
        return;
      }
      
      const currentLrc = lrcContainer.querySelector('p.aplayer-lrc-current');
      const allLrcLines = lrcContainer.querySelectorAll('p');
      
      if (currentLrc && currentLrc.textContent.trim()) {
        const currentText = currentLrc.textContent.trim();
        let nextText = '';
        
        for (let i = 0; i < allLrcLines.length; i++) {
          if (allLrcLines[i] === currentLrc && i < allLrcLines.length - 1) {
            nextText = allLrcLines[i + 1].textContent.trim();
            break;
          }
        }
        
        showLyricsWithEffect(currentText, nextText);
      } else {
        if (floatingLyrics) floatingLyrics.classList.remove('show');
        currentLyric = '';
      }
    } catch (error) {
      if (floatingLyrics) floatingLyrics.classList.remove('show');
      currentLyric = '';
    }
  }

  function showLyricsWithEffect(currentText, nextText) {
    if (!lyricsVisible || !currentLineEl || !nextLineEl) return;
    if (currentText === currentLyric) return;
    
    currentLyric = currentText;
    currentLineEl.textContent = currentText;
    nextLineEl.textContent = nextText || '';
    
    if (currentText && currentText.trim() && floatingLyrics) {
      floatingLyrics.classList.add('show');
    } else if (floatingLyrics) {
      floatingLyrics.classList.remove('show');
    }
  }

  // 右键菜单功能 - 在整个页面都可以触发
  function showRightMenuAt(clientX, clientY){
    if (!rightMenu) return;
    
    rightMenu.style.display = 'block';
    rightMenu.classList.remove('show');
    requestAnimationFrame(()=>{
      const mw = rightMenu.offsetWidth || 220;
      const mh = rightMenu.offsetHeight || 280;
      let left = Math.round(clientX - mw/2);
      left = Math.max(8, Math.min(left, window.innerWidth - mw - 8));
      let top = clientY - mh - 12;
      if (top < 8) top = clientY + 12;
      if (top + mh > window.innerHeight - 8) top = Math.max(8, window.innerHeight - mh - 8);
      rightMenu.style.left = left + 'px';
      rightMenu.style.top = top + 'px';
      const arrowLeft = Math.max(12, Math.min(clientX - left, mw - 12));
      rightMenu.style.setProperty('--arrow-left', arrowLeft + 'px');
      rightMenu.classList.add('show');
    });
  }

  function hideRightMenuImmediate(){
    if (!rightMenu) return;
    rightMenu.classList.remove('show');
    rightMenu.style.display = 'none';
  }

  // 歌词显示/隐藏控制
  function toggleLyricsVisibility() {
    lyricsVisible = !lyricsVisible;
    
    if (lyricsVisible) {
      if (floatingLyrics) floatingLyrics.classList.add('show');
      if (aplayer && !aplayer.audio.paused) {
        startLyricsUpdate(aplayer);
      }
    } else {
      if (floatingLyrics) {
        floatingLyrics.classList.remove('show');
        currentLineEl.textContent = '';
        nextLineEl.textContent = '';
      }
      currentLyric = '';
    }
    
    const lyricsMenuItem = document.getElementById('menu-lyrics');
    if (lyricsMenuItem) {
      lyricsMenuItem.textContent = lyricsVisible ? '📜 隐藏歌词' : '📜 显示歌词';
    }
    localStorage.setItem('lyricsVisible', lyricsVisible.toString());
  }

  // 播放控制函数
  function togglePlay() {
    if (aplayer) {
      aplayer.toggle();
    }
  }

  function prevSong() {
    if (aplayer) aplayer.skipBack();
  }

  function nextSong() {
    if (aplayer) aplayer.skipForward();
  }

  function volumeUp() {
    if (aplayer) {
      const newVolume = Math.min((aplayer.audio.volume || 0.7) + 0.1, 1);
      aplayer.volume(newVolume, true);
    }
  }

  function volumeDown() {
    if (aplayer) {
      const newVolume = Math.max((aplayer.audio.volume || 0.7) - 0.1, 0);
      aplayer.volume(newVolume, true);
    }
  }

  // 辅助函数
  async function ensurePlayerAndRun(fn){
    try {
      const ap = await initMeting();
      if (typeof fn === 'function') fn(ap);
    } catch(err){
      console.warn('播放器未就绪：', err);
    }
  }

  // 事件监听
  document.addEventListener('DOMContentLoaded', function() {
    // 初始化歌词显示状态
    const savedLyricsVisible = localStorage.getItem('lyricsVisible');
    if (savedLyricsVisible !== null) {
      lyricsVisible = savedLyricsVisible === 'true';
    }
    
    const lyricsMenuItem = document.getElementById('menu-lyrics');
    if (lyricsMenuItem) {
      lyricsMenuItem.textContent = lyricsVisible ? '📜 隐藏歌词' : '📜 显示歌词';
    }
    
    if (!lyricsVisible && floatingLyrics) {
      floatingLyrics.classList.remove('show');
    }
    
    // 胶囊点击事件
    if (capsule) {
      capsule.addEventListener('click', ()=>{
        if (playerWrap) {
          playerWrap.classList.add('show');
          initMeting().catch(()=>{});
        }
      });
    }
    
    // 右键菜单事件 - 在整个页面都可以触发
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      showRightMenuAt(e.clientX, e.clientY);
    });
    
    document.addEventListener('click', (e) => {
      if (rightMenu && !rightMenu.contains(e.target)) {
        hideRightMenuImmediate();
      }
    });
    
    // 菜单功能绑定
    const menuPlay = document.getElementById('menu-play');
    const menuPrev = document.getElementById('menu-prev');
    const menuNext = document.getElementById('menu-next');
    const menuVolup = document.getElementById('menu-volup');
    const menuVoldown = document.getElementById('menu-voldown');
    const menuLyrics = document.getElementById('menu-lyrics');
    const menuSupport = document.getElementById('menu-support');
    const menuFullscreen = document.getElementById('menu-fullscreen');
    const menuClose = document.getElementById('menu-close');

    if (menuPlay) menuPlay.addEventListener('click', ()=>{ ensurePlayerAndRun(ap=>ap.toggle()); hideRightMenuImmediate(); });
    if (menuPrev) menuPrev.addEventListener('click', ()=>{ ensurePlayerAndRun(ap=>ap.skipBack()); hideRightMenuImmediate(); });
    if (menuNext) menuNext.addEventListener('click', ()=>{ ensurePlayerAndRun(ap=>ap.skipForward()); hideRightMenuImmediate(); });
    if (menuVolup) menuVolup.addEventListener('click', ()=>{ volumeUp(); hideRightMenuImmediate(); });
    if (menuVoldown) menuVoldown.addEventListener('click', ()=>{ volumeDown(); hideRightMenuImmediate(); });
    if (menuLyrics) menuLyrics.addEventListener('click', ()=>{ toggleLyricsVisibility(); hideRightMenuImmediate(); });
    if (menuSupport) menuSupport.addEventListener('click', ()=>{ window.open('https://1356666.xyz','_blank'); hideRightMenuImmediate(); });
    if (menuFullscreen) menuFullscreen.addEventListener('click', ()=>{ 
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(()=>{});
      } else {
        document.exitFullscreen().catch(()=>{});
      }
      hideRightMenuImmediate();
    });
    if (menuClose) menuClose.addEventListener('click', ()=>{ 
      ensurePlayerAndRun(ap=>ap.pause()); 
      if (playerWrap) playerWrap.classList.remove('show');
      hideRightMenuImmediate(); 
    });

    // 预初始化
    initMeting().then(ap=>{
      console.log('APlayer初始化完成');
    }).catch(()=>{
      console.log('APlayer初始化失败');
    });
  });

  // 加载必要的脚本
  function loadScripts() {
    return new Promise((resolve) => {
      // 检查是否已加载
      if (window.APlayer && window.customElements?.get("meting-js")) {
        resolve();
        return;
      }

      let scriptsLoaded = 0;
      const totalScripts = 2;

      function checkAllLoaded() {
        scriptsLoaded++;
        if (scriptsLoaded === totalScripts) {
          resolve();
        }
      }

      // 加载 APlayer
      if (!window.APlayer) {
        const aplayerScript = document.createElement("script");
        aplayerScript.src = APLAYER_JS_PATH;
        aplayerScript.async = true;
        aplayerScript.onload = checkAllLoaded;
        aplayerScript.onerror = checkAllLoaded;
        document.head.appendChild(aplayerScript);
      } else {
        checkAllLoaded();
      }

      // 加载 MetingJS
      if (!window.customElements?.get("meting-js")) {
        const metingScript = document.createElement("script");
        metingScript.src = METING_JS_PATH;
        metingScript.async = true;
        metingScript.onload = checkAllLoaded;
        metingScript.onerror = checkAllLoaded;
        document.head.appendChild(metingScript);
      } else {
        checkAllLoaded();
      }
    });
  }

  // 启动
  loadScripts().then(() => {
    console.log('音乐播放器脚本加载完成');
  });
})();
