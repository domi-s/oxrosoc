<script>
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import Divider from "$lib/components/Divider.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<Navbar />
<slot />
<Divider />
<Footer />