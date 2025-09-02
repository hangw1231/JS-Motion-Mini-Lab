const bar = document.getElementById('progress');
const update = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const r = max > 0 ? (h.scrollTop / max) : 0;
    bar.style.transform = `scaleX(${Math.min(1, Math.max(0, r))})`;
};

document.addEventListener('scroll', update, { passive: true });
window.addEventListener('resize', update);

update();