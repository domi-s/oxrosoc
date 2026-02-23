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

    import ht2025_1 from "$lib/assets/termcards/ht2025/1.png";
    import ht2025_2 from "$lib/assets/termcards/ht2025/2.png";
    import ht2025_3 from "$lib/assets/termcards/ht2025/3.png";
    import ht2025_4 from "$lib/assets/termcards/ht2025/4.png";

    import tt2025_1 from "$lib/assets/termcards/tt2025/1.jpg";
    import tt2025_2 from "$lib/assets/termcards/tt2025/2.jpg";
    import tt2025_3 from "$lib/assets/termcards/tt2025/3.jpg";
    import tt2025_4 from "$lib/assets/termcards/tt2025/4.jpg";
    import tt2025_5 from "$lib/assets/termcards/tt2025/5.jpg";
    import tt2025_6 from "$lib/assets/termcards/tt2025/6.jpg";
    import tt2025_7 from "$lib/assets/termcards/tt2025/7.jpg";

    import mt2025_1 from "$lib/assets/termcards/mt2025/1.jpg";
    import mt2025_2 from "$lib/assets/termcards/mt2025/2.jpg";
    import mt2025_3 from "$lib/assets/termcards/mt2025/3.jpg";
    import mt2025_4 from "$lib/assets/termcards/mt2025/4.jpg";
    import mt2025_5 from "$lib/assets/termcards/mt2025/5.jpg";
    import mt2025_6 from "$lib/assets/termcards/mt2025/6.jpg";
    import mt2025_7 from "$lib/assets/termcards/mt2025/7.jpg";
    import mt2025_8 from "$lib/assets/termcards/mt2025/8.jpg";

    import ht2026_1 from "$lib/assets/termcards/ht2026/1.jpg";
    import ht2026_2 from "$lib/assets/termcards/ht2026/2.jpg";
    import ht2026_3 from "$lib/assets/termcards/ht2026/3.jpg";
    import ht2026_4 from "$lib/assets/termcards/ht2026/4.jpg";
    import ht2026_5 from "$lib/assets/termcards/ht2026/5.jpg";
    import ht2026_6 from "$lib/assets/termcards/ht2026/6.jpg";

    const photos_24_25 = import.meta.glob("$lib/assets/photos/24-25/*");
</script>

<div class="p-4 pt-16 mx-auto max-w-screen-xl">
    <div class="py-8">
        <SectionHeader title="Hilary Term 2026" subtitle="Termcard" isNew={true} />
        <Gallery images={[
            {
                src: ht2026_1,
                alt: "HT2026 Termcard",
            },
            {
                src: ht2026_2,
                alt: "Romanian Consulate Visit",
            },
            {
                src: ht2026_3,
                alt: "Welcome back drinks",
            },
            {
                src: ht2026_4,
                alt: "Ice hockey practice",
            },
            {
                src: ht2026_5,
                alt: "Valentine's Day Drinks",
            },
            {
                src: ht2026_6,
                alt: "Dragobete Celebration",
            }
        ]} />
    </div>
    <div class="py-8">
        <SectionHeader title="Michaelmas Term 2025" subtitle="Termcard" />
        <Gallery images={[
            {
                src: mt2025_1,
                alt: "MT2025 Termcard",
            },
            {
                src: mt2025_2,
                alt: "Meet and Mingle",
            },
            {
                src: mt2025_3,
                alt: "House Party & Pre-Drinks for Plush",
            },
            {
                src: mt2025_4,
                alt: "Week 2 Weekly Hangout",
            },
            {
                src: mt2025_5,
                alt: "Week 3 Events",
            },
            {
                src: mt2025_6,
                alt: "College Bar Crawl with Romanian and Balkan Societies",
            },
            {
                src: mt2025_7,
                alt: "Ice Hockey",
            },
            {
                src: mt2025_8,
                alt: "Romania National Day Celebration",
            }
        ]} />
    </div>
    <div class="py-8">
        <SectionHeader title="Trinity Term 2025" subtitle="Termcard" />
        <Gallery images={[
            {
                src: tt2025_1,
                alt: "TT2025 Termcard, page 1",
            },
            {
                src: tt2025_2,
                alt: "TT2025 Termcard, page 2",
            },
            {
                src: tt2025_3,
                alt: "Presidential Elections, first round",
            },
            {
                src: tt2025_4,
                alt: "RoSoc x HunSoc Pub Crawl Social",
            },
            {
                src: tt2025_5,
                alt: "Latin Party with Hispanic, Romanian, Italian, French, Brazilian Societies",
            },
            {
                src: tt2025_6,
                alt: "Presidential Elections, second round",
            },
            {
                src: tt2025_7,
                alt: "OxRoSoc Barbecue",
            },
        ]} />
    </div>
    <div class="py-8">
        <SectionHeader title="Hilary Term 2025" subtitle="Termcard" />
        <Gallery images={[
            {
                src: ht2025_1,
                alt: "HT2025 Termcard, page 1",
            },
            {
                src: ht2025_2,
                alt: "OxRoSoc Movie Night",
            },
            {
                src: ht2025_3,
                alt: "Mărțișor Workshop and Celebration",
            },
            {
                src: ht2025_4,
                alt: "Cambridge Romanian Society Joint Weekend",
            }
        ]} />
    </div>
    <div class="py-8">
        <SectionHeader title="Michaelmas Term 2024" subtitle="Termcard" />
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