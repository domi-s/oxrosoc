<script>
    export let title = "";
    export let subtitle = "Termcard";
    export let isNew = false;
</script>

<div class="group">
    <p class="text-gray-700 font-bold flex items-center gap-2 flex-wrap">
        <span>{subtitle}</span>
        {#if isNew}
            <span class="hidden group-first-of-type:flex items-center justify-center gap-2 py-1 px-2 rounded-full bg-red-700 text-red-100 text-xs font-medium">
                <span>New!</span>
                <i class="fa-solid fa-wand-magic-sparkles"></i>
            </span>
        {/if}
    </p>
    <h3 class="font-bold text-3xl">{title}</h3>
</div>