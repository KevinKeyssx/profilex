<script lang="ts">
    import { onMount }  from 'svelte';
    import { fly }      from 'svelte/transition';

    import type { Project } from '$models/project';
    import GitHubButton     from '$components/buttons/GitHubButton.svelte';


    export let project : Project;


    let isHovered = false;

    interface GitHubRepoInfo {
        stargazers_count: number;
    }

    const owner = "KevinKeyssx";
    const repo = "profilex";

    let stars = 0;
    let loading = true;


    async function getRepoStars(owner: string, repo: string): Promise<number> {
        try {
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
            
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const data: GitHubRepoInfo = await response.json();
            return data.stargazers_count;
        } catch (error) {
            console.error("Error fetching repo stars:", error);
            return 0;
        } finally {
            loading = false;
        }
    }


    onMount(async () => {
        stars = await getRepoStars( owner, repo );
    });
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
            </header>

            <!-- Project info -->
            <div class="p-6 flex-1 flex flex-col">
                <h3 class="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>

                <p class="text-gray-400 mb-4 flex-1">{project.description}</p>

                <footer class="flex gap-3 mt-auto">
                    <GitHubButton
                        href    = { project.link }
                        styles  = { "hover:bg-purple-800/20 bg-purple-900/20" }
                    >
                        <svg class="z-10" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 5.25C9.22586 5.25 6.79699 6.91121 5.12801 8.44832C4.28012 9.22922 3.59626 10.0078 3.12442 10.5906C2.88804 10.8825 2.70368 11.1268 2.57736 11.2997C2.51417 11.3862 2.46542 11.4549 2.43187 11.5029C2.41509 11.5269 2.4021 11.5457 2.393 11.559L2.38227 11.5747L2.37911 11.5794L2.10547 12.0132L2.37809 12.4191L2.37911 12.4206L2.38227 12.4253L2.393 12.441C2.4021 12.4543 2.41509 12.4731 2.43187 12.4971C2.46542 12.5451 2.51417 12.6138 2.57736 12.7003C2.70368 12.8732 2.88804 13.1175 3.12442 13.4094C3.59626 13.9922 4.28012 14.7708 5.12801 15.5517C6.79699 17.0888 9.22586 18.75 12.0001 18.75C14.7743 18.75 17.2031 17.0888 18.8721 15.5517C19.72 14.7708 20.4039 13.9922 20.8757 13.4094C21.1121 13.1175 21.2964 12.8732 21.4228 12.7003C21.4859 12.6138 21.5347 12.5451 21.5682 12.4971C21.585 12.4731 21.598 12.4543 21.6071 12.441L21.6178 12.4253L21.621 12.4206L21.6224 12.4186L21.9035 12L21.622 11.5809L21.621 11.5794L21.6178 11.5747L21.6071 11.559C21.598 11.5457 21.585 11.5269 21.5682 11.5029C21.5347 11.4549 21.4859 11.3862 21.4228 11.2997C21.2964 11.1268 21.1121 10.8825 20.8757 10.5906C20.4039 10.0078 19.72 9.22922 18.8721 8.44832C17.2031 6.91121 14.7743 5.25 12.0001 5.25ZM4.29022 12.4656C4.14684 12.2885 4.02478 12.1311 3.92575 12C4.02478 11.8689 4.14684 11.7115 4.29022 11.5344C4.72924 10.9922 5.36339 10.2708 6.14419 9.55168C7.73256 8.08879 9.80369 6.75 12.0001 6.75C14.1964 6.75 16.2676 8.08879 17.8559 9.55168C18.6367 10.2708 19.2709 10.9922 19.7099 11.5344C19.8533 11.7115 19.9753 11.8689 20.0744 12C19.9753 12.1311 19.8533 12.2885 19.7099 12.4656C19.2709 13.0078 18.6367 13.7292 17.8559 14.4483C16.2676 15.9112 14.1964 17.25 12.0001 17.25C9.80369 17.25 7.73256 15.9112 6.14419 14.4483C5.36339 13.7292 4.72924 13.0078 4.29022 12.4656ZM14.25 12C14.25 13.2426 13.2427 14.25 12 14.25C10.7574 14.25 9.75005 13.2426 9.75005 12C9.75005 10.7574 10.7574 9.75 12 9.75C13.2427 9.75 14.25 10.7574 14.25 12ZM15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92898 15.75 8.25005 14.0711 8.25005 12C8.25005 9.92893 9.92898 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z" fill="#ffffff" data-darkreader-inline-fill="" style="--darkreader-inline-fill: var(--darkreader-background-ffffff, #181a1b);"></path> </g></svg>
                    </GitHubButton>

                    <GitHubButton
                        href    = { project.github }
                        styles  = {'hover:bg-gray-800/30 bg-gray-950/50 gap-1'}
                    >
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 438.549 438.549">
                            <path
                                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                            ></path>
                        </svg>

                        <div class="flex items-center gap-1 text-sm md:flex">
                            <svg
                                class="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
                                data-slot="icon"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clip-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                    fill-rule="evenodd">
                                </path>
                            </svg>

                            <span
                                class="inline-block tabular-nums tracking-wider font-display font-medium text-white"
                            >
                            {#if  loading}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="16" stroke-dashoffset="16" d="M12 3c4.97 0 9 4.03 9 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="16;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path><path stroke-dasharray="64" stroke-dashoffset="64" stroke-opacity="0.3" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="64;0"/></path></g></svg>
                            {:else}
                                {stars}
                            {/if}
                            </span>
                        </div>
                    </GitHubButton>
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