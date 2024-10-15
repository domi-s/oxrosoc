<script>
    import Gallery from "$lib/components/Gallery.svelte";
	import TermCardHeader from "./TermCardHeader.svelte";

    import mt2024_1 from "$lib/assets/termcards/mt2024/1.png";
</script>

<div class="p-4 sm:pt-20 mx-auto max-w-screen-xl">
    <div class="py-8">
        <TermCardHeader title="Michaelmas 2024" />
        <Gallery images={[
            {
                src: mt2024_1,
                alt: "OxRoSoc Logo",
            },
        ]} />
    </div>
</div>