<script lang="ts">
    import { slide }    from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { onMount }  from 'svelte';


    export let scrollToSection  : ( section: string ) => void;


    let activeSection       = "home";
    let isMobileMenuOpen    = false;
    let isNavbarBlurred     = false;
    let sections: string[]  = ["home", "about", "projects", "certificates"];


    onMount(() => {
        window.addEventListener('scroll', () => {
            isNavbarBlurred = window.scrollY > 50;
        });
    });
</script>

<nav class={`fixed top-0 w-full z-50 transition-all duration-300 ${isNavbarBlurred ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-transparent'}`}>
    <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
            <a href="/" class="text-2xl font-bold text-purple-400">Portfolio</a>

            <div class="hidden md:flex space-x-8">
                {#each sections as section}
                    <button 
                        class={`text-lg hover:text-purple-400 transition-colors ${activeSection === section ? 'text-purple-400 font-medium' : 'text-gray-300'}`}
                        on:click={() => scrollToSection(section)}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                {/each}
            </div>

            <div class="md:hidden">
                <button 
                class="mobile-menu-button text-gray-300 hover:text-purple-400 transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                on:click={() => isMobileMenuOpen = !isMobileMenuOpen}
                aria-label="Toggle mobile menu"
            >
                {#if isMobileMenuOpen}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                {/if}
            </button>
            </div>
        </div>
    </div>
</nav>

{#if isMobileMenuOpen}
    <div 
        class="mobile-menu md:hidden fixed left-0 right-0 top-[60px] w-full bg-gray-900/95 backdrop-blur-md shadow-lg py-3 border-t border-gray-800 z-40"
        transition:slide={{ duration: 300, easing: quintOut }}
    >
        <div class="container mx-auto px-4 flex flex-col space-y-3">
            {#each sections as section}
                <button 
                    class="py-2 px-4 text-left rounded-lg hover:bg-gray-800/50 transition-colors duration-200 {activeSection === section ? 'text-purple-400 font-medium' : 'text-gray-300'}"
                    on:click={() => {isMobileMenuOpen = false; scrollToSection(section)}}
                >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
            {/each}
        </div>
    </div>
{/if}