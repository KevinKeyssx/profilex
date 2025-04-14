<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    import type { ImageAbout } from '$models/images-about';


    export let imageAbout: ImageAbout[];
    export let interval: number = 5000;


    let currentIndex: number = 0;
    let timer: ReturnType<typeof setInterval>;

    const resetTimer = () => {
        clearInterval(timer);
        timer = setInterval(next, interval);
    };

    const next = () => {
        currentIndex = (currentIndex + 1) % imageAbout.length;
    };

    const previous = () => {
        currentIndex = (currentIndex - 1 + imageAbout.length) % imageAbout.length;
    };

    const handleNext = () => {
        next();
        resetTimer();
    };

    const handlePrevious = () => {
        previous();
        resetTimer();
    };

    onMount(() => {
        timer = setInterval(next, interval);
    });

    onDestroy(() => {
        clearInterval(timer);
    });
</script>

<div class="relative w-full h-[400px] max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl">
    {#each imageAbout as image, i}
        <div
            class="absolute w-full h-full transition-transform duration-500 ease-in-out"
            style="transform: translateX({(i - currentIndex) * 100}%)"
        >
            <img
                src     = { image.url }
                alt     = "Carousel image {i + 1}"
                class   = "w-full h-full object-cover"
                loading = "lazy"
            />

            <div class="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/75 to-transparent"></div>

            <h2 
                class="absolute top-4 left-4 right-4 text-2xl font-bold text-purple-400 transition-opacity duration-300"
                style="opacity: {i === currentIndex ? '1' : '0'}"
            >
                { image.title }
            </h2>
        </div>
    {/each}

    <button
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
        on:click={handlePrevious}
    >
        <!-- ← -->
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: var(--darkreader-text-ffffff, #e8e6e3);"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 17.898C15 18.972 13.7351 19.546 12.9268 18.8388L6.61617 13.3169C5.81935 12.6197 5.81935 11.3801 6.61617 10.6829L12.9268 5.16108C13.7351 4.45388 15 5.02785 15 6.1018L15 17.898Z" fill="#ffffff" data-darkreader-inline-fill="" style="--darkreader-inline-fill: var(--darkreader-background-ffffff, #181a1b);"></path> </g></svg>
    </button>

    <button
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
        on:click={handleNext}
    >
        <!-- → -->
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: var(--darkreader-text-ffffff, #e8e6e3);" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 17.898C15 18.972 13.7351 19.546 12.9268 18.8388L6.61617 13.3169C5.81935 12.6197 5.81935 11.3801 6.61617 10.6829L12.9268 5.16108C13.7351 4.45388 15 5.02785 15 6.1018L15 17.898Z" fill="#ffffff" data-darkreader-inline-fill="" style="--darkreader-inline-fill: var(--darkreader-background-ffffff, #181a1b);"></path> </g></svg>
    </button>

    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {#each imageAbout as _, i}
            <button
                class="w-3 h-3 rounded-full transition-colors duration-300 {i === currentIndex ? 'bg-white' : 'bg-white/50'}"
                on:click={() => (currentIndex = i)}
                aria-label={`Go to slide ${i + 1}`}
            ></button>
        {/each}
    </div>
</div>
