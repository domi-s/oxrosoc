<script>
    import romanianMotive from "$lib/assets/romanian-motive-xl.png";
</script>

<div class="h-16 w-full bg-contain relative" style="background-image: url({romanianMotive}); image-rendering: pixelated;">
    <div class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-85 font-bold text-3xl">
        <slot />
    </div>
</div>