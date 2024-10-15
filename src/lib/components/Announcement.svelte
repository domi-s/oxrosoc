<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    export let message = "This is a sample message";

    const generateHash = (/** @type {string} */ str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
            hash |= 0;
        }
        return Math.abs(hash).toString(36);
    };

    let hash = generateHash(message);
    let isVisible = writable(false);

    const close = () => {
        isVisible.set(false);
        localStorage.setItem(`announcement-${hash}`, "closed");
    };

    onMount(() => {
        const closed = localStorage.getItem(`announcement-${hash}`);
        if (closed !== "closed") {
            isVisible.set(true);
        }
    });
</script>

{#if $isVisible}
    <div class="fixed z-40 inset-x-0 bottom-0 p-4" id={hash}>
        <div class="mx-auto max-w-screen-md relative flex items-center justify-between gap-4 rounded-lg bg-red-700 border-red-950 border-2 border-solid px-4 py-3 text-white">
            <div class="flex flex-col">
                <p class="text-xs font-base text-red-200">Announcement</p>
                <p>{message}</p>
            </div>

            <button aria-label="Close" class="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20" on:click={close}>
                <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    </div>
{/if}
