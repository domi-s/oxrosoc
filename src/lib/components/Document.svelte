<script>
    import { onMount } from 'svelte';

    export let title = "";
    export let content = "";

    onMount(() => {
        const htmlMarkdown = document.querySelector('.htmlmarkdown');
        
        if (htmlMarkdown) {
            const elements = htmlMarkdown.querySelectorAll('*');

            elements.forEach((element) => {
                switch (element.tagName.toLowerCase()) {
                    case 'h1':
                        element.classList.add('text-3xl', 'font-bold');
                        break;
                    case 'h2':
                        element.classList.add('text-2xl', 'font-bold');
                        break;
                    case 'h3':
                        element.classList.add('text-xl', 'font-bold');
                        break;
                    case 'a':
                        element.classList.add('text-blue-700', 'hover:underline');
                        break;
                    case 'ul':
                        element.classList.add('list-disc', 'pl-8');
                        break;
                    case 'ol':
                        element.classList.add('list-decimal', 'pl-8');
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