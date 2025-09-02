const root = document.getElementById('carousel');
const track = root.querySelector('.carousel-track');
const slides = [...root.querySelectorAll('.slide')];
const prevBtn = root.querySelector('#prev');
const nextBtn = root.querySelector('#next');
const dots = [...root.querySelectorAll('.dot')];
let index = 0;


const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const update = () => {
    track.style.transform = `translateX(${-index * (track.clientWidth + 12)}px)`;
    dots.forEach((d, i) => d.setAttribute('aria-current', i === index ? 'true' : 'false'));
};

const setIndex = (i) => {
    index = clamp(i, 0, slides.length - 1);
    update();
};


window.addEventListener('resize', update);
prevBtn.addEventListener('click', () => setIndex(index - 1));
nextBtn.addEventListener('click', () => setIndex(index + 1));
dots.forEach((d, i) => d.addEventListener('click', () => setIndex(i)));
root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') setIndex(index - 1);
    if (e.key === 'ArrowRight') setIndex(index + 1);
});


const vp = root.querySelector('.carousel-viewport');
let startX = 0, dx = 0, dragging = false;

vp.addEventListener('pointerdown', e => {
    dragging = true;
    startX = e.clientX;
    dx = 0;
    vp.style.cursor = 'grabbing';
});

vp.addEventListener('pointermove', e => {
    if (!dragging) return;
    dx = e.clientX - startX;
    track.style.transform = `translateX(${-(index * vp.clientWidth)}px + ${dx}px)`;
});

vp.addEventListener('pointerup', () => {
    if (!dragging) return;
    dragging = false;
    vp.style.cursor = '';

    if (Math.abs(dx) > 50) {
        setIndex(index + (dx < 0 ? 1 : -1));
    } else {
        update();
    }
});