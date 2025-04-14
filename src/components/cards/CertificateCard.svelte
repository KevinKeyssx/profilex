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

            <p class="text-gray-400">{certificate.description}</p>

            <!-- View certificate button that appears on hover -->
            <div class="hidden sm:flex mt-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span class="inline-flex items-center text-sm font-medium text-purple-400">
                    View Certificate

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </span>
            </div>

            <div class="flex justify-between mt-2 sm:-mt-5 sm:group-hover:hidden transition-all duration-300">
                {#if certificate.date}
                    <div class="flex items-center text-sm text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span>{certificate.date}</span>
                    </div>
                {/if}

                {#if certificate.teacher}
                    <div class="flex items-center text-sm text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                        <span>{certificate.teacher}</span>
                    </div>
                {/if}
            </div>
        </div>
    </div>

    <!-- Date badge -->
    <div class="z-10 absolute top-0 right-0 transform -translate-y-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm shadow-lg shadow-purple-500/20" style="margin-top: -1px;">
        {certificate.issuer}
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
