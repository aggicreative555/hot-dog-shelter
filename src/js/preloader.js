export function initPreloader( { timeout = 2500 } = {}) {
    const preLoader = document.getElementById('global-preloader');
    if (!preLoader) return { hide: () => {}};

    let hidden = false;
    function hide() {
        if (hidden) return;
        hidden = true;
        preLoader.classList.add('preloader-fade-out');
        setTimeout(() => preLoader.remove(), 600);
    }

    const domReady = new Promise(resolve => {
        if (document.readyState === 'interactive' || document.readyState === 'complete') resolve();
        else window.addEventListener('DOMContentLoaded', () => resolve());
    })

    function imagesReady() {
        const imgs = Array.from(document.querySelectorAll('img[data-critical]'));
        if (!imgs.length) return Promise.resolve();
        return Promise.all(imgs.map(img => img.complete ? Promise.resolve() : new Promise(r => { img.addEventListener('load', r); img.addEventListener('error', r)})));
    }

    const ready = Promise.race([
        Promise.all([domReady, imagesReady()]),
        new Promise(res => setTimeout(res, timeout))
    ]);

    ready.then(() => {
        requestAnimationFrame(() => requestAnimationFrame(hide));
    });

    return { hide };

}