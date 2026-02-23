<script>
    export let noBorder = false;

    import AppIcon from "$lib/components/AppIcon.svelte";
    import HalfChevron from "$lib/components/HalfChevron.svelte";

    import romanianMotive from "$lib/assets/romanian-motive.png";
    import romanianMotiveSm from "$lib/assets/romanian-motive-sm.png";

    import { fade } from "svelte/transition";
	import { browser } from "$app/environment";

    let isMenuOpen = false;
    let forceMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };

    const handleResize = () => {
        if (window.innerWidth > 768) {
            forceMenuOpen = true;
        } else {
            forceMenuOpen = false;
        }
    };

    if(browser) {
        handleResize();
        window.addEventListener("resize", handleResize);
    }
</script>

<div class="page-nav-wrapper">
    <nav class="page-nav bg-red-700 text-white" class:border-red-700={noBorder} class:border-red-900={!noBorder}>
        <div class="relative p-4 flex items-center gap-4 justify-between max-w-screen-xl mx-auto">
            <a href="/" class="flex items-center gap-4">
                <AppIcon size={24} />
                <div class="flex flex-col">
                    <!-- <h3 class="text-xs">University of Oxford</h3> -->
                    <h3 class="text-xs">OxRoSoc, Oxford's</h3>
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
                {#if isMenuOpen || forceMenuOpen}
                    <a class="nav-link" href="/events" transition:fade={{ duration: 200, delay: 0 }}>Events</a>
                    <a class="nav-link" href="/committee" transition:fade={{ duration: 200, delay: 50 }}>Committee</a>
                    <details class="nav-link-dropdown" transition:fade={{ duration: 200, delay: 100 }}>
                        <summary>More Resources <HalfChevron size={16} /></summary>
                        <div class="nav-link-dropdown-options">
                            <a href="/constitution">Constitution</a>
                            <a href="/code-of-conduct">Code of Conduct</a>
                            <a href="/complaints-procedure">Complaints Procedure</a>
                            <a href="/gdpr">GDPR Compliance</a>
                        </div>
                    </details>
                    <a class="nav-link" href="/contact" transition:fade={{ duration: 200, delay: 150 }}>Contact</a>
                {/if}
            </div>
        </div>
    </nav>
</div>

<style>
    .page-nav-wrapper {
        @apply z-50 absolute w-full;
    }

    .page-nav {
        @apply w-full max-w-screen-xl mx-auto mt-2 rounded-lg border-2 border-solid;
    }

    .page-nav details summary::-webkit-details-marker,
    .page-nav details summary::marker {
        display: none; 
        content: "";
    }

    @media screen and (max-width: 1280px) {
        .page-nav {
            @apply border-0 border-b-2 mt-0 rounded-none;
        }
    }

    @media screen and (max-width: 768px) {
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
        @apply absolute flex flex-col gap-4 bg-red-700 shadow-lg p-4 w-max rounded-md border-2 border-solid border-red-800 mt-2;
    }
</style>