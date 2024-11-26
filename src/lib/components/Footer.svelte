<script>
    import oxrosocLogoSMPngWhiteTransparentOutline from "$lib/assets/oxrosoc-logo-sm-png-white-transparent-outline.png";

    const startYear = 2024;
    const currentYear = new Date().getFullYear();

    const year = currentYear > startYear ? `${startYear} – ${currentYear}` : startYear;
</script>

<footer>
    <div class="mx-auto max-w-5xl px-4 py-16 mb-16 sm:px-6 lg:px-8">
        <div class="flex gap-2 items-center justify-center bg-gray-200 border-gray-300 border-solid border-2 w-fit mx-auto py-3 px-4 rounded-xl">
            <img src="{oxrosocLogoSMPngWhiteTransparentOutline}" alt="Logo" class="size-8">
            <div>
                <h3 class="text-lg font-bold">OxRoSoc</h3>
                <!-- <p class="text-xs -mt-1">University of Oxford Romanian Society</p> -->
                <p class="text-xs -mt-1">Oxford Romanian Society</p>
            </div>
        </div>

        <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            We aim to celebrate and promote Romania's rich traditions, while providing social, cultural, and academic support to our members through a variety of events, activities, and networking opportunities.
        </p>

        <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            This website uses cookies.
        </p>

        <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
                <a class="text-gray-700 transition hover:text-gray-700/75" href="/events">Events</a>
            </li>

            <li>
                <a class="text-gray-700 transition hover:text-gray-700/75" href="/committee">Committee</a>
            </li>

            <li>
                <a class="text-gray-700 transition hover:text-gray-700/75" href="/constitution">Constitution</a>
            </li>

            <li>
                <a class="text-gray-700 transition hover:text-gray-700/75" href="/code-of-conduct">Code of conduct</a>
            </li>

            <li>
                <a class="text-gray-700 transition hover:text-gray-700/75" href="/complaints-procedure">Complaints procedure</a>
            </li>

            <li>
                <a class="text-gray-700 transition hover:text-gray-700/75" href="/contact">Contact</a>
            </li>
        </ul>

        <ul class="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
                <a
                    href="https://www.instagram.com/oxrosoc"
                    rel="noreferrer"
                    target="_blank"
                    class="text-gray-700 transition hover:text-gray-700/75"
                >
                    <span class="sr-only">Instagram</span>
                    <i class="fa-brands fa-instagram text-xl"></i>
                </a>
            </li>

            
            <li>
                <a
                    href="https://www.facebook.com/oxfordromaniansociety/"
                    rel="noreferrer"
                    target="_blank"
                    class="text-gray-700 transition hover:text-gray-700/75"
                >
                    <span class="sr-only">Facebook</span>
                    <i class="fa-brands fa-facebook text-xl"></i>
                </a>
            </li>

            <li>
                <a
                    href="mailto:oxrosoc@gmail.com"
                    rel="noreferrer"
                    target="_blank"
                    class="text-gray-700 transition hover:text-gray-700/75"
                >
                    <span class="sr-only">Twitter</span>
                    <i class="fa-regular fa-envelope text-xl"></i>
                </a>
            </li>
        </ul>

        <p class="mx-auto mt-6 max-w-lg text-center leading-relaxed text-gray-500">
            &copy; {year} Website by Dominic Satnoianu (Current IT Officer for OxRoSoc).<br>
            All rights reserved.<br>
            Contact me on <a class="underline" href="https://www.instagram.com/dominiccss" target="_blank">Instagram &mdash; @dominiccss</a>.
        </p>
    </div>
</footer>