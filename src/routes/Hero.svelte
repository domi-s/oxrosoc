<script>
    import heroBg1 from "$lib/assets/hero-bg-1.png";

    import oxrosocLogoPngWhiteTransparentOutline from "$lib/assets/oxrosoc-logo-png-white-transparent-outline.png";

    import romanianMotive from "$lib/assets/romanian-motive.png";
    import romanianMotiveTransition from "$lib/assets/romanian-motive-transition.png";
</script>

<div class="text-white bg-red-700 bg-cover bg-center h-full min-h-[400px] p-4 sm:pt-20 sm:pb-8 flex items-center justify-center">
    <div class="flex flex-col items-center justify-center w-full">
        <div class="flex items-center justify-between gap-8 flex-col sm:flex-row-reverse sm:gap-16 w-full max-w-screen-md">
            <div class="flex items-center">
                <img src={oxrosocLogoPngWhiteTransparentOutline} alt="Oxford Romanian Society" class="w-48 h-48 ml-auto" />
            </div>
            <div class="flex flex-col justify-center text-center sm:text-left">
                <h3 class="text-lg">University of Oxford</h3>
                <h1 class="text-4xl font-black">Romanian Society</h1>
            </div>
        </div>
    </div>
</div>
<div class="h-16 w-full bg-contain" style="background-image: url({romanianMotiveTransition}); image-rendering: pixelated;"></div>

<style>
    .gradient-background {
        background: linear-gradient(270deg, #ff3333, #ffbb33, #3370ff);
        background-size: 600% 600%;

        -webkit-animation: AnimationName 30s ease infinite;
        -moz-animation: AnimationName 30s ease infinite;
        animation: AnimationName 30s ease infinite;
    }

    @-webkit-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
</style>