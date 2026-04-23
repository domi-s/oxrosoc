import { browser } from "$app/environment";

const handleLazyLoad = () => {
    const lazyImages = document.querySelectorAll('img[data-src]') as NodeListOf<HTMLImageElement>;

    lazyImages.forEach(img => {
        if(img.getBoundingClientRect().top < window.innerHeight + 100) {
            img.src = img.dataset.src!;
            img.removeAttribute('data-src');
        }
    });
};

if(browser) {
    window.addEventListener('scroll', handleLazyLoad);
    setTimeout(() => { handleLazyLoad(); });
}