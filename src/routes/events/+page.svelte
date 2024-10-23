<script>
    import Gallery from "$lib/components/Gallery.svelte";
	import TermCardHeader from "./TermCardHeader.svelte";

    import mt2024_1 from "$lib/assets/termcards/mt2024/1.png";
    import mt2024_2 from "$lib/assets/termcards/mt2024/2.png";

    import mt2024_1freshersdrinks_1 from "$lib/assets/termcards/mt2024/1-freshers-drinks/1.png";
    import mt2024_2pubquiz_1 from "$lib/assets/termcards/mt2024/2-pub-quiz/1.png";
</script>

<div class="p-4 sm:pt-20 mx-auto max-w-screen-xl">
    <div class="py-8">
        <TermCardHeader title="Michaelmas 2024" />
        <Gallery images={[
            {
                src: mt2024_1,
                alt: "MT2024 Termcard, page 1",
            },
            {
                src: mt2024_2,
                alt: "MT2024 Termcard, page 2",
            },
            {
                src: mt2024_1freshersdrinks_1,
                alt: "Freshers' Drinks",
            },
            {
                src: mt2024_2pubquiz_1,
                alt: "Pub Quiz",
            }
        ]} />
    </div>
</div>