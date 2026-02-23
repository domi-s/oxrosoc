<script>
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import Divider from "$lib/components/Divider.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import { page } from "$app/stores";
</script>

{#if $page.url.pathname === "/"}
    <Navbar noBorder={true} />
{:else}
    <Navbar />
{/if}
<slot />
<Divider />
<Footer />