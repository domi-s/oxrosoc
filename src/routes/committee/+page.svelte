<script>
    import comMaria from "$lib/assets/committee/2024-2025/maria.jpg";
    import comRoxi from "$lib/assets/committee/2024-2025/roxi.webp";
    import comTraian from "$lib/assets/committee/2024-2025/traian.webp";
    import comDomi from "$lib/assets/committee/2024-2025/domi.webp";
    import comElena from "$lib/assets/committee/2024-2025/elena.webp";
    import comStefan from "$lib/assets/committee/2024-2025/stefan.webp";
	
    import CommitteeCard from "./CommitteeCard.svelte";
</script>

<div class="p-4 pb-16 sm:pt-20 mx-auto max-w-screen-xl">
    <div class="py-8 sm:py-16 flex flex-col items-center justify-center text-center">
        <p class="text-lg font-bold text-gray-700">Meet this year's</p>
        <h1 class="text-4xl font-bold">OxRoSoc Committee</h1>
    </div>
    <div class="gallery-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
        <CommitteeCard
            name="Maria Sticlea"
            position="President"
            image={comMaria}
            instagram="maria_lucia_345"
            course="PPE"
            college="New"
        />
        <CommitteeCard
            name="Roxana Maria Rusu (Roxi)"
            position="Vice President"
            image={comRoxi}
            instagram="roxirusumariaa"
            course="PPE"
            college="Anne's"
        />
        <CommitteeCard
            name="Traian Rareș Tuș"
            position="Secretary"
            image={comTraian}
            instagram="traianrarestus"
            course="Physics"
            college="Hertford"
        />
        <CommitteeCard
            name="Dominic Satnoianu (Domi)"
            position="Treasurer"
            image={comDomi}
            instagram="dominiccss"
            course="Computer Science"
            college="Catz"
        />
        <CommitteeCard
            name="Elena Ionescu"
            position="Welfare Rep"
            image={comElena}
            instagram="e13na.i"
            course="English"
            college="Catz"
        />
        <CommitteeCard
            name="Ștefan Domunco"
            position="Events Officer"
            image={comStefan}
            instagram="stefandomunco"
            course="Computer Science"
            college="Catz"
        />
    </div>
</div>