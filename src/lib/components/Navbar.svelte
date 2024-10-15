<script>
    import AppIcon from "$lib/components/AppIcon.svelte";
    import HalfChevron from "$lib/components/HalfChevron.svelte";

    import romanianMotive from "$lib/assets/romanian-motive.png";
    import romanianMotiveSm from "$lib/assets/romanian-motive-sm.png";

    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };
</script>

<nav class="page-nav bg-red-700 text-white">
    <div class="relative p-4 flex items-center gap-4 justify-between max-w-screen-xl mx-auto">
        <a href="/" class="flex items-center gap-4">
            <AppIcon size={24} />
            <div class="flex flex-col">
                <h3 class="text-xs">University of Oxford</h3>
                <h1 class="-mt-1 font-bold">Romanian Society</h1>
            </div>
        </a>

        <button 
            class="w-8 h-8 hover:bg-red-800 focus:bg-red-800 rounded-md flex items-center justify-center md:hidden" 
            on:click={toggleMenu}
        >
            {#if isMenuOpen}
                <i class="fa-solid fa-times"></i>
            {:else}
                <i class="fa-solid fa-equals"></i>
            {/if}
        </button>

        <div class="nav-links items-center gap-2 hidden md:flex" class:hidden={!isMenuOpen}>
            <a class="nav-link" href="/events">Events</a>
            <a class="nav-link" href="/committee">Committee</a>
            <details class="nav-link-dropdown">
                <summary>More Resources <HalfChevron size={16} /></summary>
                <div class="nav-link-dropdown-options">
                    <a href="/constitution">Constitution</a>
                    <a href="/code-of-conduct">Code of Conduct</a>
                    <a href="/complaints-procedure">Complaints Procedure</a>
                    <a href="/gdpr">GDPR Compliance</a>
                </div>
            </details>
            <a class="nav-link" href="/contact">Contact</a>
        </div>
    </div>
</nav>

<style>
    .page-nav {
        @apply z-50 absolute w-full;
    }

    .page-nav details summary::-webkit-details-marker,
    .page-nav details summary::marker {
        display: none; 
        content: "";
    }

    @media screen and (max-width: 768px) {
        .page-nav {
            @apply sticky top-0 border-b-2 border-solid border-red-900;
        }

        .page-nav .nav-links {
            @apply flex-col absolute left-0 top-16 bg-red-700 w-full p-4 pb-4 border-b-2 border-solid border-red-900;
        }
    }

    .page-nav .nav-link,
    .page-nav .nav-link-dropdown summary {
        @apply cursor-pointer flex items-center gap-1 rounded-md py-1 px-3;
    }

    .page-nav .nav-link:hover,
    .page-nav .nav-link:focus,
    .page-nav .nav-link-dropdown summary:hover,
    .page-nav .nav-link-dropdown summary:focus {
        @apply bg-red-800;
    }

    .page-nav .nav-link-dropdown {
        @apply relative;
    }

    .page-nav .nav-link-dropdown .nav-link-dropdown-options {
        @apply absolute flex flex-col gap-4 bg-red-800 shadow-lg p-4 w-max rounded-md border-2 border-solid border-red-950 mt-2;
    }
</style>