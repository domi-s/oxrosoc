<script>
    import { onMount } from 'svelte';

    export let title = "";
    export let content = "";

    onMount(() => {
        const htmlMarkdown = document.querySelector('.htmlmarkdown');
        
        if (htmlMarkdown) {
            const headings = htmlMarkdown.querySelectorAll('h1, h2, h3');

            headings.forEach((heading) => {
                switch (heading.tagName.toLowerCase()) {
                    case 'h1':
                        heading.classList.add('text-3xl', 'font-bold');
                        break;
                    case 'h2':
                        heading.classList.add('text-2xl', 'font-bold');
                        break;
                    case 'h3':
                        heading.classList.add('text-xl', 'font-bold');
                        break;
                }
            });
        }
    });
</script>

<div class="p-4 sm:pt-20 mx-auto max-w-screen-xl">
    <div class="flex flex-col">
        <p class="text-lg font-bold text-gray-700">Document</p>
        <h1 class="text-4xl font-bold">{title}</h1>
        <div class="htmlmarkdown mt-4">
            {@html content}
        </div>
    </div>
</div>

<style>
    .htmlmarkdown {
        @apply flex flex-col gap-4;
    }
</style>