<script>
	import comVictor from '#lib/assets/committee/2026-2027/victor.jpeg';
	import comStefania2 from '#lib/assets/committee/2026-2027/stefania.jpeg';
	import comViviana from '#lib/assets/committee/2026-2027/viviana.jpeg';
	import comDamian2 from '#lib/assets/committee/2026-2027/damian.jpeg';
	import comTeodora2 from '#lib/assets/committee/2026-2027/teodora.jpeg';
	import comJustin from '#lib/assets/committee/2026-2027/justin.jpeg';

	import comStefania from '#lib/assets/committee/2025-2026/stefania.webp';
	import comDamian from '#lib/assets/committee/2025-2026/damian.jpg';
	import comTeodora from '#lib/assets/committee/2025-2026/teodora.png';

	import comMaria from '#lib/assets/committee/2024-2025/maria.jpg';
	import comRoxi from '#lib/assets/committee/2024-2025/roxi.webp';
	import comTraian from '#lib/assets/committee/2024-2025/traian.webp';
	import comDomi from '#lib/assets/committee/2024-2025/domi.webp';
	import comElena from '#lib/assets/committee/2024-2025/elena.webp';
	import comStefan from '#lib/assets/committee/2024-2025/stefan.webp';

	import CommitteeCard from './CommitteeCard.svelte';

	import DividerText from '#lib/components/DividerText.svelte';
</script>

<div class="p-4 pb-16 pt-16 mx-auto max-w-7xl">
	<div class="py-8 sm:py-16 flex flex-col items-center justify-center text-center">
		<p class="text-lg font-bold text-gray-700">2026 – 2027 Academic Year</p>
		<h1 class="text-4xl font-bold">OxRoSoc Committee</h1>
	</div>
	<div class="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
		<CommitteeCard
			name="Victor Grigoraș"
			position="President"
			image={comVictor}
			instagram="victorgrigroas"
			course="Linguistics & Philology"
			college="Kellogg"
		/>
		<CommitteeCard
			name="Ștefania Luca"
			position="Vice President"
			image={comStefania2}
			instagram="stefan.snakevine"
			course="Biology"
			college="Teddy"
		/>
		<CommitteeCard
			name="Viviana Doliș"
			position="Secretary"
			image={comViviana}
			instagram="vivianadolis"
			course="Egiptology"
			college="Queen's"
		/>
		<CommitteeCard
			name="Damian Pădure"
			position="Treasurer"
			image={comDamian2}
			instagram="damian.padure"
			course="Maths & CompSci"
			college="Worcester"
		/>
		<CommitteeCard
			name="Teodora Marinescu (Teo)"
			position="Welfare Officer"
			image={comTeodora2}
			instagram="teodora_marinescu_"
			course="Maths"
			college="Lincoln"
		/>
		<CommitteeCard
			name="Justin Urdeș"
			position="Events Officer"
			image={comJustin}
			instagram="justinissi"
			course="Law"
			college="St Hugh's"
		/>
	</div>
</div>
<DividerText>Previous Committees</DividerText>
<div class="p-4 mx-auto max-w-7xl">
	<div class="my-8 sm:my-16 flex flex-col items-center justify-center text-center">
		<h3 class="text-2xl font-bold">
			2025 &ndash; 2026 <span class="hidden">OxRoSoc</span> Committee
		</h3>
	</div>
	<div class="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
		<CommitteeCard
			name="Ștefania Luca"
			position="President"
			image={comStefania}
			instagram="stefan.snakevine"
			course="Biology"
			college="Teddy"
		/>
		<CommitteeCard
			name="Damian Pădure"
			position="Secretary"
			image={comDamian}
			instagram="damian.padure"
			course="Maths & CompSci"
			college="Worcester"
		/>
		<CommitteeCard
			name="Teodora Marinescu"
			position="Treasurer"
			image={comTeodora}
			instagram="teodora_marinescu_"
			course="Maths"
			college="Licoln"
		/>
	</div>
	<div class="my-8 sm:my-16 flex flex-col items-center justify-center text-center">
		<h3 class="text-2xl font-bold">
			2024 &ndash; 2025 <span class="hidden">OxRoSoc</span> Committee
		</h3>
	</div>
	<div class="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
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
