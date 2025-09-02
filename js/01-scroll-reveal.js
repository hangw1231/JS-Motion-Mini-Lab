const els = document.querySelectorAll('.reveal');
if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-visible'));
} else {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => e.target.classList.toggle('is-visible', e.isIntersecting));
    },
        {
            root: null,
            threshold: .15
        });
    els.forEach(el => io.observe(el));
}