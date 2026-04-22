<script lang="ts">
    import emptyImage from "$lib/assets/empty.png";

	import { browser } from "$app/environment";

    type Image = {
        src: string;
        alt: string;
    };

    export let images: Image[] = [];

    let selectedImage: Image | null = null;

    const openLightbox = (image: Image) => {
        selectedImage = image;
    };

    const closeLightbox = () => {
        selectedImage = null;
    };

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
</script>

<div class="gallery-grid pt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {#each images as image}
        <button class="gallery-item relative bg-white cursor-pointer border-2 border-solid border-white p-2 pb-14 -m-2 -mb-14 rounded-xl group
            hover:border-gray-200 hover:z-10 hover:scale-110
            focus:border-gray-200 focus:z-10 focus:scale-110
        " on:click={() => openLightbox(image)}>
            <img src="{emptyImage}" data-src={image.src} alt={image.alt} class="w-full h-auto aspect-[4/5] object-cover rounded-lg" />
            <div class="absolute hidden group-hover:block group-focus:block w-full max-w-full">
                <div class="p-2 pr-4 w-full">
                    <p class="text-xs text-left text-gray-500">Photo &bull; Click to enlarge</p>
                    <p class="text-left w-full whitespace-nowrap overflow-hidden text-ellipsis">{image.alt}</p>
                </div>
            </div>
        </button>
    {/each}
    {#if images.length === 0}
        <p class="text-center text-gray-500 col-span-full pt-8">No events available yet. Check back soon!</p>
    {/if}
</div>

{#if selectedImage}
    <button class="lightbox fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 cursor-default" on:click={closeLightbox}>
        <div class="relative max-w-screen-sm h-full aspect-[4/5] rounded-lg overflow-hidden">
            <div class="relative w-full h-full">
                <img src={selectedImage.src} alt="Background" class="absolute w-full h-full object-cover brightness-50 blur-sm" />
                <img src={selectedImage.src} alt={selectedImage.alt} class="absolute w-full h-full object-contain" />
            </div>
            <button 
                class="absolute top-1 right-1 text-white text-2xl hover:bg-black/50 focus:bg-black/50 w-6 h-6 flex items-center justify-center rounded-md" 
                aria-label="Close"
                on:click={closeLightbox}
            >
                &times;
            </button>
        </div>
    </button>
{/if}

<style>
    .lightbox img {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }
</style>
