// Lightweight accessible video player controls
(function(){
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function fmt(t){
    if (!isFinite(t)) return '0:00';
    const s = Math.floor(t % 60).toString().padStart(2,'0');
    const m = Math.floor(t/60);
    return `${m}:${s}`;
  }
  function init(root){
    const video = root.querySelector('.jr-video');
    const play = root.querySelector('.jr-play');
    const mute = root.querySelector('.jr-mute');
    const fs = root.querySelector('.jr-fullscreen');
    const seek = root.querySelector('.jr-seek');
    const vol = root.querySelector('.jr-volume');
    const cur = root.querySelector('.jr-current');
    const dur = root.querySelector('.jr-duration');

    if (!video) return;

    function update(){
      if (!isNaN(video.duration)) {
        dur.textContent = fmt(video.duration);
      }
      cur.textContent = fmt(video.currentTime);
      const p = (video.currentTime / (video.duration || 1)) * 100;
      if (!isNaN(p)) seek.value = p;
    }

    video.addEventListener('loadedmetadata', update);
    video.addEventListener('timeupdate', update);

    // Keyboard controls on wrapper
    root.tabIndex = 0;
    root.addEventListener('keydown', (e) => {
      if (e.altKey || e.metaKey || e.ctrlKey) return;
      switch (e.key) {
        case ' ': // Space
        case 'k':
          e.preventDefault();
          if (video.paused) video.play(); else video.pause();
          break;
        case 'm':
          video.muted = !video.muted;
          break;
        case 'ArrowLeft':
          video.currentTime = Math.max(0, video.currentTime - 5);
          break;
        case 'ArrowRight':
          video.currentTime = Math.min(video.duration || video.currentTime + 5, video.currentTime + 5);
          break;
        case 'f':
          if (document.fullscreenElement) document.exitFullscreen();
          else root.requestFullscreen?.();
          break;
        case 'ArrowUp':
          video.volume = Math.min(1, (video.volume || 0) + 0.05);
          vol.value = video.volume.toFixed(2);
          break;
        case 'ArrowDown':
          video.volume = Math.max(0, (video.volume || 0) - 0.05);
          vol.value = video.volume.toFixed(2);
          break;
      }
    });

    play.addEventListener('click', () => {
      if (video.paused) video.play(); else video.pause();
    });

    mute.addEventListener('click', () => {
      video.muted = !video.muted;
    });

    fs.addEventListener('click', () => {
      if (document.fullscreenElement) document.exitFullscreen();
      else root.requestFullscreen?.();
    });

    seek.addEventListener('input', () => {
      const pct = parseFloat(seek.value) / 100;
      if (isFinite(video.duration)) {
        video.currentTime = pct * video.duration;
      }
    });

    vol.addEventListener('input', () => {
      video.volume = parseFloat(vol.value);
      if (video.volume === 0) video.muted = true;
      else if (video.muted) video.muted = false;
    });

    // Respect reduced motion: disable smooth seeking or animations (none used here)
    if (prefersReducedMotion) {
      // No-op: we avoid any animations by default
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.jr-video-player').forEach(init);
  });
})();