<script lang="ts">
    import { fade } from "svelte/transition";

    import Social           from "$components/cards/Social.svelte";
    import Scroll           from "$components/Scroll.svelte";
    import AnimatedTitle    from "$components/title/AnimatedTitle.svelte";
    import Aura             from "$components/Aura.svelte";

    export let scrollToSection  : ( section: string ) => void;
    export let sectionRefs      : Record<string, HTMLElement>;
</script>

<Aura />

<section 
    id="home" 
    class="min-h-screen flex items-center justify-center relative overflow-hidden"
    bind:this={sectionRefs.home}
>
    <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-gray-900"></div>
        <!-- Animated background elements -->
        <div class="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-72 h-72 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
    </div>

    <div class="container mx-auto px-4 z-10">
        <div class="text-center" in:fade={{ duration: 1000, delay: 300 }}>
            <AnimatedTitle 
                text="Hello, I'm" 
                name="Kevin Candia" 
                delay={500} 
            />

            <p class="text-xl md:text-2xl text-gray-300 mt-12 mb-8 max-w-2xl mx-auto">
                A passionate full-stack developer creating beautiful and functional web experiences
            </p>

            <div class="flex flex-wrap justify-center gap-4">
                <button 
                    class="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all transform hover:scale-105"
                    on:click={() => scrollToSection('projects')}
                >
                    View My Work
                </button>

                <button 
                    class="px-6 py-3 bg-transparent border border-purple-400 text-purple-400 hover:bg-purple-400/10 rounded-full transition-all transform hover:scale-105"
                    on:click={() => scrollToSection('about')}
                >
                    About Me
                </button>
            </div>

            <Social />
        </div>

        <div class="absolute bottom-16 left-0 w-full">
            <Scroll />
        </div>
    </div>
</section>
