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
        <div class="gallery-item cursor-pointer" on:click={() => openLightbox(image)}>
            <img src={image.src} alt={image.alt} class="w-full h-auto object-cover rounded-lg" />
        </div>
    {/each}
</div>

<!-- Lightbox Modal -->
{#if selectedImage}
    <div class="lightbox fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" on:click={closeLightbox}>
        <div class="relative">
            <img src={selectedImage.src} alt={selectedImage.alt} class="max-w-screen-sm w-full h-full aspect-square object-contain rounded-lg" />
            <button 
                class="absolute top-0 right-2 text-white text-2xl hover:text-gray-300" 
                aria-label="Close"
                on:click={closeLightbox}
            >
                &times;
            </button>
        </div>
    </div>
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
