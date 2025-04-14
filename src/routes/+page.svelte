<script lang="ts">
    import { onMount } from 'svelte';

    import Footer           from '$components/Footer.svelte';
    import Hero             from '$components/sections/Hero.svelte';
    import About            from '$components/sections/About.svelte';
    import Projects         from '$components/sections/Projects.svelte';
    import Certificates     from '$components/sections/Certificates.svelte';

    // State variables
    let isNavbarBlurred = false;
    let activeSection = "home";
    let sections: string[] = ["home", "about", "projects", "certificates"];
    let sectionRefs: Record<string, HTMLElement> = {};

    onMount(() => {
        window.addEventListener('scroll', () => {
            isNavbarBlurred = window.scrollY > 50;
        });
    });

    // Function to scroll to section
    function scrollToSection(section: string) {
        sectionRefs[section]?.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<svelte:head>
    <title>My Portfolio</title>
    <meta name="description" content="Personal portfolio showcasing my projects and skills" />
</svelte:head>


<div class="dark bg-gray-900 text-white min-h-screen">
    <!-- Navbar -->
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
                    <!-- Mobile menu button (simplified for this example) -->
                    <!-- svelte-ignore a11y_consider_explicit_label -->
                    <button class="text-gray-300 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <Hero { scrollToSection } { sectionRefs } />
    <!-- About Section -->
    <About { sectionRefs } />
    <!-- Projects Section -->
    <Projects { sectionRefs } />
    <!-- Certificates Section -->
    <Certificates { sectionRefs } />
    <!-- Footer -->
    <Footer />
</div>

<style>
    :global(html) {
        scroll-behavior: smooth;
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 0.5;
            transform: scale(1);
        }
        50% {
            opacity: 0.8;
            transform: scale(1.05);
        }
    }

    .animate-pulse {
        animation: pulse 8s infinite;
    }


    :global(::-webkit-scrollbar) {
        width: 10px;
        height: 10px;
        border-radius: 999px;
    }

    :global(::-webkit-scrollbar-track) {
        background: #13111C;
        border-radius: 999px;
    }

    :global(::-webkit-scrollbar-thumb) {
        background: linear-gradient(180deg, #6366f1 0%, #996ac5 100%);
        border-radius: 999px;
        border: 2px solid #13111C;
    }

    :global(::-webkit-scrollbar-thumb:hover) {
        background: linear-gradient(180deg, #818cf8 0%, #471675 100%);
    }

    /* Firefox */
    :global(html) {
        scrollbar-width: thin;
        scrollbar-color: #210a4b #13111C;
    }

    :global(html::-moz-scrollbar-thumb) {
        background: linear-gradient(180deg, #6366f1 0%, #471675 100%);
        border-radius: 999px;
    }

    :global(html::-moz-scrollbar-track) {
        background: #0e0a22;
        border-radius: 999px;
    }
</style>