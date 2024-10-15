<script>
    export let name = "";
    export let position = "";
    export let image = "";
    export let instagram = "";
    export let course = "";
    export let college = "";
</script>

<div class="flex flex-col items-center justify-center text-center">
    <img src="{image}" alt="{name} ({position})" class="w-full max-w-56 aspect-square rounded-full">
    <div class="pt-2 flex flex-col items-center justify-center">
        <p class="-mb-2">{position}</p>
        <h3 class="text-xl font-bold">{name}</h3>
        <p class="text-gray-700 text-sm">{course} at {college} &middot; <a href="https://www.instagram.com/{instagram}" target="_blank" class="underline">Instagram</a></p>
    </div>
</div>