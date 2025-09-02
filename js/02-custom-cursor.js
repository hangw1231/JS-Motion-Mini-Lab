const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);


let isTouch = false;
window.addEventListener('touchstart', () => {
    isTouch = true;
    cursor.classList.add('-hide');
},
    {
        passive: true
    });

window.addEventListener('mousemove', (e) => {
    if (isTouch) return;
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});


const set = new Set();
const enter = () => cursor.classList.add('-hover');
const leave = () => cursor.classList.remove('-hover');
document.querySelectorAll('[data-cursor="hover"]').forEach(el => {
    set.add(el);
    el.addEventListener('mouseenter', enter);
    el.addEventListener('mouseleave', leave);
});


document.addEventListener('focusin', (e) => {
    if (set.has(e.target)) enter();
});

document.addEventListener('focusout', (e) => {
    if (set.has(e.target)) leave();
});