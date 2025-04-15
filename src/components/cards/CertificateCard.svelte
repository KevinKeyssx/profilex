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
            <h3 class="flex items-center gap-1 text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">
                <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" data-darkreader-inline-fill="" style="--darkreader-inline-fill: var(--darkreader-background-000000, #000000);"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools <title>ic_fluent_signed_24_filled</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke-width="0.00024000000000000003" fill="none" fill-rule="evenodd" style=""> <g id="ic_fluent_signed_24_filled" fill="#ffffff" fill-rule="nonzero" data-darkreader-inline-fill="" style="--darkreader-inline-fill: var(--darkreader-background-ffffff, #181a1b);"> <path d="M9.83606496,2.03419109 C9.94858299,2.07246679 10.0585014,2.11799647 10.1651286,2.17049372 L11.4478626,2.8020395 C11.7960005,2.97344294 12.2039995,2.97344294 12.5521374,2.8020395 L13.8348714,2.17049372 C15.1974596,1.4996322 16.8458964,2.06038752 17.5167579,3.4229758 L17.5902423,3.5852986 L17.6530606,3.75203947 L18.1135202,5.10563967 C18.2384903,5.47301088 18.5269891,5.76150971 18.8943603,5.88647984 L20.2479605,6.34693944 C21.6858267,6.83606412 22.4549336,8.39819882 21.9658089,9.83606496 C21.9275332,9.94858299 21.8820035,10.0585014 21.8295063,10.1651286 L21.1979605,11.4478626 C21.0265571,11.7960005 21.0265571,12.2039995 21.1979605,12.5521374 L21.8295063,13.8348714 C22.5003678,15.1974596 21.9396125,16.8458964 20.5770242,17.5167579 C20.4703969,17.5692552 20.3604786,17.6147849 20.2479605,17.6530606 L18.8943603,18.1135202 C18.5269891,18.2384903 18.2384903,18.5269891 18.1135202,18.8943603 L17.6530606,20.2479605 C17.1639359,21.6858267 15.6018012,22.4549336 14.163935,21.9658089 C14.051417,21.9275332 13.9414986,21.8820035 13.8348714,21.8295063 L12.5521374,21.1979605 C12.2039995,21.0265571 11.7960005,21.0265571 11.4478626,21.1979605 L10.1651286,21.8295063 C8.80254036,22.5003678 7.1541036,21.9396125 6.48324207,20.5770242 C6.43074483,20.4703969 6.38521515,20.3604786 6.34693944,20.2479605 L5.88647984,18.8943603 C5.76150971,18.5269891 5.47301088,18.2384903 5.10563967,18.1135202 L3.75203947,17.6530606 C2.31417333,17.1639359 1.54506641,15.6018012 2.03419109,14.163935 C2.07246679,14.051417 2.11799647,13.9414986 2.17049372,13.8348714 L2.8020395,12.5521374 C2.97344294,12.2039995 2.97344294,11.7960005 2.8020395,11.4478626 L2.17049372,10.1651286 C1.4996322,8.80254036 2.06038752,7.1541036 3.4229758,6.48324207 C3.52960307,6.43074483 3.63952144,6.38521515 3.75203947,6.34693944 L5.10563967,5.88647984 C5.47301088,5.76150971 5.76150971,5.47301088 5.88647984,5.10563967 L6.34693944,3.75203947 C6.83606412,2.31417333 8.39819882,1.54506641 9.83606496,2.03419109 Z M15.4696699,8.96966991 L10.0503988,14.3889411 L8.07616596,12.0198617 C7.8109929,11.701654 7.33806937,11.658661 7.0198617,11.923834 C6.70165403,12.1890071 6.65866098,12.6619306 6.92383404,12.9801383 L9.42383404,15.9801383 C9.70617041,16.3189419 10.2184794,16.3421808 10.5303301,16.0303301 L16.5303301,10.0303301 C16.8232233,9.73743687 16.8232233,9.26256313 16.5303301,8.96966991 C16.2374369,8.6767767 15.7625631,8.6767767 15.4696699,8.96966991 Z" id="🎨-Color"> </path> </g> </g> </g></svg>
                {certificate.title}
            </h3>

            <p class="text-gray-400">{certificate.description}</p>

            <!-- Container para ambos elementos con posición absoluta -->
            <div class="relative h-8 mt-2">
                <!-- View certificate button that appears on hover -->
                <div class="hidden sm:flex absolute inset-0 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    <span class="inline-flex items-center text-sm font-medium text-purple-400">
                        View Certificate

                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </div>

                <!-- Información de fecha y profesor -->
                <div class="flex justify-between absolute inset-0 sm:opacity-100 sm:translate-y-0 sm:group-hover:opacity-0 sm:group-hover:translate-y-4 transition-all duration-300 ease-in-out">
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
