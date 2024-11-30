<script>
    import Gallery from "$lib/components/Gallery.svelte";
	import SectionHeader from "./SectionHeader.svelte";

    import mt2024_1 from "$lib/assets/termcards/mt2024/1-new.png";
    import mt2024_2 from "$lib/assets/termcards/mt2024/2-new.png";

    import mt2024_1freshersdrinks_1 from "$lib/assets/termcards/mt2024/1-freshers-drinks/1.png";
    import mt2024_2pubquiz_1 from "$lib/assets/termcards/mt2024/2-pub-quiz/1.png";
    import mt2024_3barcrawl_1 from "$lib/assets/termcards/mt2024/3-bar-crawl/1.png";
    import mt2024_4social_1 from "$lib/assets/termcards/mt2024/4-social/1.png";
    import mt2024_5votedinner_1 from "$lib/assets/termcards/mt2024/5-vote-dinner/1.png";
    import mto2024_6romaniaday_1 from "$lib/assets/termcards/mt2024/6-romania-day/1.png";

    const photos_24_25 = import.meta.glob("$lib/assets/photos/24-25/*");
</script>

<div class="p-4 sm:pt-20 mx-auto max-w-screen-xl">
    <div class="py-8">
        <SectionHeader title="Michaelmas 2024" subtitle="Termcard" isNew={true} />
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
            },
            {
                src: mt2024_3barcrawl_1,
                alt: "Bar Crawl",
            },
            {
                src: mt2024_4social_1,
                alt: "Social with Turkish Society",
            },
            {
                src: mt2024_5votedinner_1,
                alt: "Vote and Dinner",
            },
            {
                src: mto2024_6romaniaday_1,
                alt: "Romania National Day",
            },
        ]} />
    </div>
    <!-- <div class="py-8">
        <SectionHeader title="Moments from 2024 – 2025" subtitle="Gallery" />
        <Gallery images={
            Object.keys(photos_24_25)
                .map((photo) => photo.replace("/src/assets/photos/24-25/", ""))
                .map((src) => ({ src, alt: "Photo" }))
        } />
    </div> -->
</div>