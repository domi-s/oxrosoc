<script lang="ts">
    // Define the type for an image object
    type Image = {
        src: string;
        alt: string;
    };

    // Prop with an array of images, correctly typed
    export let images: Image[] = [];

    // Variable to hold the selected image for the lightbox
    let selectedImage: Image | null = null;

    // Function to open the lightbox
    function openLightbox(image: Image) {
        selectedImage = image;
    }

    // Function to close the lightbox
    function closeLightbox() {
        selectedImage = null;
    }
</script>

<!-- Grid Layout for Gallery -->
<div class="gallery-grid pt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {#each images as image}
        <button class="gallery-item cursor-pointer" on:click={() => openLightbox(image)}>
            <img src={image.src} alt={image.alt} class="w-full h-auto aspect-square object-cover rounded-lg" />
        </button>
    {/each}
</div>

<!-- Lightbox Modal -->
{#if selectedImage}
    <button class="lightbox fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" on:click={closeLightbox}>
        <div class="relative max-w-screen-sm w-full aspect-square rounded-lg overflow-hidden">
            <div class="relative w-full h-full">
                <img src={selectedImage.src} alt="Background" class="absolute w-full h-full object-cover brightness-50 blur-sm" />
                <img src={selectedImage.src} alt={selectedImage.alt} class="absolute w-full h-full object-contain" />
            </div>
            <button 
                class="absolute top-0 right-2 text-white text-2xl hover:text-gray-300" 
                aria-label="Close"
                on:click={closeLightbox}
            >
                &times;
            </button>
        </div>
    </button>
{/if}

<style>
    .gallery-grid img {
        transition: filter 200ms ease;
    }

    .gallery-grid img:hover {
        filter: brightness(0.5);
    }

    .lightbox img {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }
</style>
