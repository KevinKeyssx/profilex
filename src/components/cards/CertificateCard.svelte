<script lang="ts">
    import { fly } from 'svelte/transition';

    import type { Certificate } from '$models/certificate';


    export let certificate: Certificate;


    let isHovered = false;
</script>

<a
    href            = {certificate.link} 
    target          = "_blank" 
    rel             = "noopener noreferrer"
    class           = "group relative block rounded-xl transition-all duration-500 hover:scale-105 hover:z-10 hover:shadow-xl hover:shadow-purple-900/20"
    on:mouseenter   = {() => isHovered = true }
    on:mouseleave   = {() => isHovered = false }
    in:fly          = {{ y: 50, duration: 500 }}
>
    <!-- Card content -->
    <div class="h-full bg-gray-900 rounded-lg overflow-hidden z-10">
        <!-- Certificate info -->
        <div class="p-6 relative">
            <h3 class="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">
                {certificate.title}
            </h3>

            <p class="text-gray-400">Issued by {certificate.issuer}</p>

            <!-- View certificate button that appears on hover -->
            <div class="mt-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span class="inline-flex items-center text-sm font-medium text-purple-400">
                    View Certificate

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </span>
            </div>
        </div>
    </div>

    <!-- Date badge -->
    <div class="z-50 absolute top-0 right-0 transform -translate-y-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm shadow-lg shadow-purple-500/20" style="margin-top: -1px;">
        {certificate.date}
    </div>

    <!-- Glow effect on hover -->
    {#if isHovered}
        <div class="absolute inset-0 rounded-xl bg-purple-500/20 blur-xl animate-pulse-slow"></div>
    {/if}
</a>
<style>
    @keyframes border-flow {
        0%, 100% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
    }

    .animate-border-flow:before {
        animation: border-flow 4s ease infinite;
    }

    @keyframes pulse-slow {
        0%, 100% {
            opacity: 0.2;
        }
        50% {
            opacity: 0.4;
        }
    }

    .animate-pulse-slow {
        animation: pulse-slow 3s ease-in-out infinite;
    }
</style>
