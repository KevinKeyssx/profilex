<script lang="ts">
    import { onMount } from 'svelte';


    export let text = "Hello, I'm";
    export let name = "Your Name";
    export let delay = 300;


    let letters     : string[] = [];
    let nameLetters : string[] = [];
    let mounted     : boolean = false;

    // Split text into individual letters for animation
    onMount(() => {
        letters = text.split('');
        nameLetters = name.split('');

        // Small delay before starting animation
        setTimeout(() => {
            mounted = true;
        }, delay);
    });
</script>

<!-- Animated particles -->
<div class="absolute -inset-x-10 -inset-y-4 opacity-0 h-screen -z-10" class:animate-in-decor={mounted} style="animation-delay: {delay + ((letters.length + nameLetters.length) * 80) + 300}ms; animation-fill-mode: forwards;">
    <!-- Grupo 1: Esquina superior izquierda -->
    <div class="absolute top-1 left-1/6 w-2 h-2 rounded-full bg-purple-500 animate-float-particle" style="animation-delay: 0ms;"></div>
    <div class="absolute top-1/6 left-1/4 w-1.5 h-1.5 rounded-full bg-blue-400 animate-float-particle" style="animation-delay: 150ms;"></div>
    <div class="absolute top-1/4 left-1/8 w-1 h-1 rounded-full bg-indigo-300 animate-float-particle" style="animation-delay: 300ms;"></div>
    <div class="absolute top-1/5 left-1/3 w-1.5 h-1.5 rounded-full bg-violet-400 animate-float-particle" style="animation-delay: 200ms;"></div>
    
    <!-- Grupo 2: Esquina superior derecha -->
    <div class="absolute top-1/8 right-1/6 w-2 h-2 rounded-full bg-violet-400 animate-float-particle" style="animation-delay: 450ms;"></div>
    <div class="absolute top-1/4 right-1/4 w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-float-particle" style="animation-delay: 600ms;"></div>
    <div class="absolute top-1/3 right-1/8 w-1 h-1 rounded-full bg-purple-300 animate-float-particle" style="animation-delay: 750ms;"></div>
    <div class="absolute top-1/5 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-400 animate-float-particle" style="animation-delay: 550ms;"></div>

    <!-- Grupo 3: Centro izquierda -->
    <div class="absolute top-1/2 left-1/12 w-2 h-2 rounded-full bg-blue-500 animate-float-particle" style="animation-delay: 900ms;"></div>
    <div class="absolute top-[45%] left-1/4 w-1.5 h-1.5 rounded-full bg-indigo-400 animate-float-particle" style="animation-delay: 1050ms;"></div>
    <div class="absolute top-[55%] left-1/6 w-1 h-1 rounded-full bg-violet-300 animate-float-particle" style="animation-delay: 1200ms;"></div>
    <div class="absolute top-[48%] left-1/3 w-1 h-1 rounded-full bg-fuchsia-400 animate-float-particle" style="animation-delay: 1100ms;"></div>

    <!-- Grupo 4: Centro derecha -->
    <div class="absolute top-1/2 right-1/12 w-2 h-2 rounded-full bg-fuchsia-500 animate-float-particle" style="animation-delay: 1350ms;"></div>
    <div class="absolute top-[45%] right-1/4 w-1.5 h-1.5 rounded-full bg-purple-400 animate-float-particle" style="animation-delay: 1500ms;"></div>
    <div class="absolute top-[55%] right-1/6 w-1 h-1 rounded-full bg-blue-300 animate-float-particle" style="animation-delay: 1650ms;"></div>
    <div class="absolute top-[48%] right-1/3 w-1.5 h-1.5 rounded-full bg-indigo-400 animate-float-particle" style="animation-delay: 1450ms;"></div>

    <!-- Grupo 5: Esquina inferior izquierda -->
    <div class="absolute bottom-1/6 left-1/6 w-2 h-2 rounded-full bg-indigo-500 animate-float-particle" style="animation-delay: 1800ms;"></div>
    <div class="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-violet-400 animate-float-particle" style="animation-delay: 1950ms;"></div>
    <div class="absolute bottom-1/3 left-1/8 w-1 h-1 rounded-full bg-fuchsia-300 animate-float-particle" style="animation-delay: 2100ms;"></div>
    <div class="absolute bottom-1/5 left-1/3 w-1.5 h-1.5 rounded-full bg-purple-400 animate-float-particle" style="animation-delay: 2000ms;"></div>

    <!-- Grupo 6: Esquina inferior derecha -->
    <div class="absolute bottom-1/6 right-1/6 w-2 h-2 rounded-full bg-purple-500 animate-float-particle" style="animation-delay: 2250ms;"></div>
    <div class="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 rounded-full bg-blue-400 animate-float-particle" style="animation-delay: 2400ms;"></div>
    <div class="absolute bottom-1/3 right-1/8 w-1 h-1 rounded-full bg-indigo-300 animate-float-particle" style="animation-delay: 2550ms;"></div>
    <div class="absolute bottom-1/5 right-1/3 w-1 h-1 rounded-full bg-violet-400 animate-float-particle" style="animation-delay: 2350ms;"></div>

    <!-- Grupo 7: Partículas dispersas centrales -->
    <div class="absolute top-[30%] left-[40%] w-1 h-1 rounded-full bg-violet-400 animate-float-particle" style="animation-delay: 2700ms;"></div>
    <div class="absolute top-[70%] left-[35%] w-1.5 h-1.5 rounded-full bg-fuchsia-300 animate-float-particle" style="animation-delay: 2850ms;"></div>
    <div class="absolute top-[20%] right-[40%] w-1 h-1 rounded-full bg-purple-400 animate-float-particle" style="animation-delay: 3000ms;"></div>
    <div class="absolute top-[60%] right-[35%] w-1.5 h-1.5 rounded-full bg-blue-300 animate-float-particle" style="animation-delay: 3150ms;"></div>
    <div class="absolute top-[40%] left-[45%] w-1 h-1 rounded-full bg-indigo-400 animate-float-particle" style="animation-delay: 3300ms;"></div>
    <div class="absolute top-[80%] right-[45%] w-1 h-1 rounded-full bg-violet-300 animate-float-particle" style="animation-delay: 3450ms;"></div>

    <!-- Grupo 8: Partículas dispersas adicionales -->
    <div class="absolute top-[25%] left-[38%] w-1 h-1 rounded-full bg-purple-300 animate-float-particle" style="animation-delay: 3600ms;"></div>
    <div class="absolute top-[75%] right-[38%] w-1.5 h-1.5 rounded-full bg-blue-400 animate-float-particle" style="animation-delay: 3750ms;"></div>
    <div class="absolute top-[35%] right-[42%] w-1 h-1 rounded-full bg-fuchsia-300 animate-float-particle" style="animation-delay: 3900ms;"></div>
    <div class="absolute top-[65%] left-[42%] w-1.5 h-1.5 rounded-full bg-indigo-400 animate-float-particle" style="animation-delay: 4050ms;"></div>
    <div class="absolute top-[28%] left-[32%] w-1 h-1 rounded-full bg-violet-400 animate-float-particle" style="animation-delay: 4200ms;"></div>
    <div class="absolute top-[72%] right-[32%] w-1.5 h-1.5 rounded-full bg-purple-400 animate-float-particle" style="animation-delay: 4350ms;"></div>
    <div class="absolute top-[22%] right-[38%] w-1 h-1 rounded-full bg-blue-300 animate-float-particle" style="animation-delay: 4500ms;"></div>
    <div class="absolute top-[62%] left-[38%] w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-float-particle" style="animation-delay: 4650ms;"></div>
</div>

<div class="relative">
    <!-- Main text with letter-by-letter animation -->
    <h1 class="text-5xl md:text-7xl font-bold mb-6 flex flex-wrap justify-center">
        <span class="relative mr-4 inline-flex">
            {#each letters as letter, i}
                <span 
                    class="inline-block transform transition-all duration-700 opacity-0 translate-y-8 blur-sm"
                    class:animate-in={mounted}
                    style="animation-delay: {delay + (i * 80)}ms; animation-fill-mode: forwards;"
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </span>
            {/each}
        </span>

        <!-- Name with special styling and animation -->
        <span class="relative inline-block">
            <!-- Base text layer -->
            {#each nameLetters as letter, i}
                <span 
                    class="inline-block transform transition-all duration-700 opacity-0 translate-y-8 blur-sm text-gray-500/90"
                    class:animate-in={mounted}
                    style="animation-delay: {delay + (letters.length * 80) + (i * 80)}ms; animation-fill-mode: forwards;"
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </span>
            {/each}

            <!-- Gradient overlay text -->
            <div 
                class="absolute top-14 md:top-16 inset-0 hover:scale-105 transition-transform duration-300 opacity-0"
                class:animate-in-gradient={mounted}
                style="animation-delay: {delay + ((letters.length + nameLetters.length) * 80)}ms; animation-fill-mode: forwards;"
            >
                <div class="w-full h-full flex items-center justify-center font-bold">
                    <span class="bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient">
                        {name}
                    </span>
                </div>
            </div>
        </span>
    </h1>

    <!-- Decorative elements -->
    <div class="absolute -inset-x-10 -inset-y-4 opacity-0 mx-auto h-[35rem] sm:h-96 w-[95%] -z-10" class:animate-in-decor={mounted} style="animation-delay: {delay + ((letters.length + nameLetters.length) * 80) + 300}ms; animation-fill-mode: forwards;">
        <!-- Top left decorative element -->
        <div class="absolute -top-16 md:top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-purple-500 rounded-tl-lg"></div>

        <!-- Bottom right decorative element -->
        <div class="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-purple-500 rounded-br-lg"></div>
    </div>
</div>

<style>
    /* Letter animation */
    .animate-in {
        animation: letterIn 0.6s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
    }

    @keyframes letterIn {
        0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(4px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
        }
    }

    /* Gradient animation */
    .animate-in-gradient {
        animation: fadeInUp 0.8s ease-out forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-gradient {
        animation: gradientMove 2s linear infinite;
    }
    
    @keyframes gradientMove {
        0% {
            background-position: 0% center;
        }
        50% {
            background-position: 100% center;
        }
        100% {
            background-position: 0% center;
        }
    }
    
    /* Decorative elements animation */
    .animate-in-decor {
        animation: decorIn 0.8s ease forwards;
    }
    
    @keyframes decorIn {
        0% {
            opacity: 0;
            transform: scale(0.9);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    /* Particle animation */
    .animate-float-particle {
        animation: floatParticle 4s ease-in-out infinite;
    }
    
    @keyframes floatParticle {
        0%, 100% {
            transform: translate(0, 0);
            opacity: 0.7;
        }
        25% {
            transform: translate(10px, -10px);
            opacity: 1;
        }
        50% {
            transform: translate(5px, 5px);
            opacity: 0.5;
        }
        75% {
            transform: translate(-5px, 10px);
            opacity: 0.8;
        }
    }
</style>