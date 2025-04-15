<script lang="ts">
    import { fly } from 'svelte/transition';

    import type { Project } from '$models/project';
    import GlassButton      from '$components/buttons/GlassButton.svelte';
    import GithubStars      from './GithubStars.svelte';


    export let project : Project;


    let isHovered = false;


    const backgroundClasses = {
        'In Dev'    : 'bg-yellow-500',
        'In Prod'   : 'bg-green-500',
        'Beta'      : 'bg-blue-500',
    };


    const textColor = {
        'In Dev'    : 'text-yellow-500',
        'In Prod'   : 'text-green-500',
        'Beta'      : 'text-blue-500',
    };
</script>

<card
    class           = "group relative w-full h-full"
    on:mouseenter   = {() => isHovered = true}
    on:mouseleave   = {() => isHovered = false}
    in:fly          = {{ y: 50, duration: 500 }}
    out:fly         = {{ y: 50, duration: 500 }}
    aria-label      = { project.title }
    role            = "button"
    tabindex        = "0"
>
    <!-- Card with smooth scale animation on hover -->
    <div class="card-wrapper relative w-full h-full rounded-xl overflow-hidden shadow-lg bg-gray-950/10 aura-animation hover:bg-gray-950/20">
        <!-- Card content -->
        <div class="relative h-full z-10 flex flex-col">
            <!-- Project image with overlay -->
            <header class="h-48 overflow-hidden relative">
                <img 
                    src={project.image || "/placeholder.svg"} 
                    alt={project.title} 
                    class="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-110"
                />

                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                <!-- Floating tech badges that appear on hover -->
                <div class="absolute inset-x-0 top-0 p-3 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    {#each project.technologies as tech, i}
                        <span 
                            class="px-2 py-1 bg-gray-900/80 backdrop-blur-sm text-xs rounded-full border border-purple-500/30 shadow-lg shadow-purple-500/20 animate-delay"
                            style="animation-delay: {i * 100}ms;"
                        >
                            {tech}
                        </span>
                    {/each}
                </div>

                <div class="absolute inset-x-0 bottom-0 justify-end py-3 px-5 grid flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    {#if project.github.some( github => github.stack === "Frontend" )}
                        <span class="bg-purple-900/20 py-1 px-3 backdrop-blur-sm text-xs rounded-full border border-purple-500/30 shadow-lg shadow-purple-500/20 relative group/tooltip inline-flex items-center justify-center">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: var(--darkreader-text-ffffff, #e8e6e3);"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 21H17M3 13H21M10 17L9 21M14 17L15 21M6.2 17H17.8C18.9201 17 19.4802 17 19.908 16.782C20.2843 16.5903 20.5903 16.2843 20.782 15.908C21 15.4802 21 14.9201 21 13.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V13.8C3 14.9201 3 15.4802 3.21799 15.908C3.40973 16.2843 3.71569 16.5903 4.09202 16.782C4.51984 17 5.07989 17 6.2 17Z" stroke="#ffffff" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: var(--darkreader-text-ffffff, #e8e6e3);"></path> </g></svg>
                            <!-- Custom tooltip that appears above -->
                            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 transform scale-95 group-hover/tooltip:scale-100 pointer-events-none z-20">
                                <div class="bg-gray-900/90 backdrop-blur-md text-white text-xs py-1.5 px-3 rounded-lg shadow-lg border border-purple-500/30 whitespace-nowrap">
                                    Frontend
                                    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900/90 border-r border-b border-purple-500/30"></div>
                                </div>
                            </div>
                        </span>
                    {/if}

                    {#if project.github.some( github => github.stack === "Backend" )}
                        <span class="bg-purple-900/20 py-1 px-3 backdrop-blur-sm text-xs rounded-full border border-purple-500/30 shadow-lg shadow-purple-500/20 relative group/tooltip inline-flex items-center justify-center">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: var(--darkreader-text-ffffff, #e8e6e3);"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 7H18.01M15 7H15.01M18 17H18.01M15 17H15.01M6 10H18C18.9319 10 19.3978 10 19.7654 9.84776C20.2554 9.64477 20.6448 9.25542 20.8478 8.76537C21 8.39782 21 7.93188 21 7C21 6.06812 21 5.60218 20.8478 5.23463C20.6448 4.74458 20.2554 4.35523 19.7654 4.15224C19.3978 4 18.9319 4 18 4H6C5.06812 4 4.60218 4 4.23463 4.15224C3.74458 4.35523 3.35523 4.74458 3.15224 5.23463C3 5.60218 3 6.06812 3 7C3 7.93188 3 8.39782 3.15224 8.76537C3.35523 9.25542 3.74458 9.64477 4.23463 9.84776C4.60218 10 5.06812 10 6 10ZM6 20H18C18.9319 20 19.3978 20 19.7654 19.8478C20.2554 19.6448 20.6448 19.2554 20.8478 18.7654C21 18.3978 21 17.9319 21 17C21 16.0681 21 15.6022 20.8478 15.2346C20.6448 14.7446 20.2554 14.3552 19.7654 14.1522C19.3978 14 18.9319 14 18 14H6C5.06812 14 4.60218 14 4.23463 14.1522C3.74458 14.3552 3.35523 14.7446 3.15224 15.2346C3 15.6022 3 16.0681 3 17C3 17.9319 3 18.3978 3.15224 18.7654C3.35523 19.2554 3.74458 19.6448 4.23463 19.8478C4.60218 20 5.06812 20 6 20Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: var(--darkreader-text-ffffff, #e8e6e3);"></path> </g></svg>
                            <!-- Custom tooltip that appears below -->
                            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 transform scale-95 group-hover/tooltip:scale-100 pointer-events-none z-20">
                                <div class="bg-gray-900/90 backdrop-blur-md text-white text-xs py-1.5 px-3 rounded-lg shadow-lg border border-purple-500/30 whitespace-nowrap">
                                    Backend
                                    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900/90 border-r border-b border-purple-500/30"></div>
                                </div>
                            </div>
                        </span>
                    {/if}
                </div>
            </header>

            <!-- Project info -->
            <div class="p-6 flex-1 flex flex-col">
                <div class="flex items-center gap-3 mb-2">
                    <h3 class="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {project.title}
                    </h3>

                    <div class="relative flex items-center">
                        <span class="relative inline-flex h-2 w-2 rounded-full {backgroundClasses[project.status]}">
                            <span class="animate-pulse-slow absolute inline-flex h-full w-full rounded-full opacity-75 {backgroundClasses[project.status]}"></span>
                        </span>

                        <span class="ml-1.5 text-[11px] {textColor[project.status]}">
                            { project.status }
                        </span>
                    </div>
                </div>

                <p class="text-gray-400 mb-4 flex-1">{project.description}</p>

                <footer class="flex gap-3 mt-auto">
                    {#if project.status !== 'In Dev'}
                        <GlassButton
                            href    = { project.link }
                            styles  = { "hover:bg-purple-800/20 bg-purple-900/20" }
                        >
                            <svg class="z-10" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 5.25C9.22586 5.25 6.79699 6.91121 5.12801 8.44832C4.28012 9.22922 3.59626 10.0078 3.12442 10.5906C2.88804 10.8825 2.70368 11.1268 2.57736 11.2997C2.51417 11.3862 2.46542 11.4549 2.43187 11.5029C2.41509 11.5269 2.4021 11.5457 2.393 11.559L2.38227 11.5747L2.37911 11.5794L2.10547 12.0132L2.37809 12.4191L2.37911 12.4206L2.38227 12.4253L2.393 12.441C2.4021 12.4543 2.41509 12.4731 2.43187 12.4971C2.46542 12.5451 2.51417 12.6138 2.57736 12.7003C2.70368 12.8732 2.88804 13.1175 3.12442 13.4094C3.59626 13.9922 4.28012 14.7708 5.12801 15.5517C6.79699 17.0888 9.22586 18.75 12.0001 18.75C14.7743 18.75 17.2031 17.0888 18.8721 15.5517C19.72 14.7708 20.4039 13.9922 20.8757 13.4094C21.1121 13.1175 21.2964 12.8732 21.4228 12.7003C21.4859 12.6138 21.5347 12.5451 21.5682 12.4971C21.585 12.4731 21.598 12.4543 21.6071 12.441L21.6178 12.4253L21.621 12.4206L21.6224 12.4186L21.9035 12L21.622 11.5809L21.621 11.5794L21.6178 11.5747L21.6071 11.559C21.598 11.5457 21.585 11.5269 21.5682 11.5029C21.5347 11.4549 21.4859 11.3862 21.4228 11.2997C21.2964 11.1268 21.1121 10.8825 20.8757 10.5906C20.4039 10.0078 19.72 9.22922 18.8721 8.44832C17.2031 6.91121 14.7743 5.25 12.0001 5.25ZM4.29022 12.4656C4.14684 12.2885 4.02478 12.1311 3.92575 12C4.02478 11.8689 4.14684 11.7115 4.29022 11.5344C4.72924 10.9922 5.36339 10.2708 6.14419 9.55168C7.73256 8.08879 9.80369 6.75 12.0001 6.75C14.1964 6.75 16.2676 8.08879 17.8559 9.55168C18.6367 10.2708 19.2709 10.9922 19.7099 11.5344C19.8533 11.7115 19.9753 11.8689 20.0744 12C19.9753 12.1311 19.8533 12.2885 19.7099 12.4656C19.2709 13.0078 18.6367 13.7292 17.8559 14.4483C16.2676 15.9112 14.1964 17.25 12.0001 17.25C9.80369 17.25 7.73256 15.9112 6.14419 14.4483C5.36339 13.7292 4.72924 13.0078 4.29022 12.4656ZM14.25 12C14.25 13.2426 13.2427 14.25 12 14.25C10.7574 14.25 9.75005 13.2426 9.75005 12C9.75005 10.7574 10.7574 9.75 12 9.75C13.2427 9.75 14.25 10.7574 14.25 12ZM15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92898 15.75 8.25005 14.0711 8.25005 12C8.25005 9.92893 9.92898 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z" fill="#ffffff" data-darkreader-inline-fill="" style="--darkreader-inline-fill: var(--darkreader-background-ffffff, #181a1b);"></path> </g></svg>
                        </GlassButton>
                    {/if}

                    {#each project.github as github}
                        <GithubStars {github} />
                    {/each}
                </footer>
            </div>
        </div>
    </div>

    <!-- Permanent aura effect -->
    <div class="absolute -inset-1 rounded-xl bg-purple-500/10 blur-xl animate-aura-pulse -z-10"></div>

    <!-- Enhanced glow effect on hover -->
    {#if isHovered}
        <div class="absolute -inset-3 rounded-xl bg-purple-500/20 blur-xl animate-pulse-slow -z-10 transition-all duration-500"></div>
    {/if}
</card>

<style>
    /* Aura pulse animation */
    @keyframes aura-pulse {
        0%, 100% {
            opacity: 0.1;
        }
        50% {
            opacity: 0.3;
        }
    }

    /* Slow pulse animation for status indicator */
    @keyframes slow-pulse {
        0% {
            transform: scale(1);
            opacity: 0.7;
        }
        50% {
            transform: scale(1.6);
            opacity: 0.4;
        }
        100% {
            transform: scale(1);
            opacity: 0.7;
        }
    }

    .animate-pulse-slow {
        animation: slow-pulse 2s ease-in-out infinite;
    }

    /* Box-shadow animation */
    .aura-animation {
        animation: shadow-pulse 3s ease-in-out infinite;
        transform-origin: center center;
        transition: all 800ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    /* Detener animación y mostrar sombra más grande en hover */
    .aura-animation:hover {
        animation: none;
        box-shadow: 0 0 30px 8px rgba(52, 35, 95, 0.5);
        transform: scale(1.02);
    }

    .card-wrapper {
        backface-visibility: hidden;
        -webkit-font-smoothing: subpixel-antialiased;
        transform: translateZ(0);
        will-change: transform;
    }

    @keyframes shadow-pulse {
        0%, 100% {
            box-shadow: 0 0 15px 0 rgba(102, 92, 246, 0.2);
        }
        50% {
            box-shadow: 0 0 35px 5px rgba(55, 26, 68, 0.452);
        }
    }

    @keyframes delay {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-delay {
        animation: delay 0.5s ease-out forwards;
        opacity: 0;
    }
</style>