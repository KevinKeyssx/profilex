<script lang="ts">
    import Footer           from '$components/Footer.svelte';
    import Hero             from '$components/sections/Hero.svelte';
    import About            from '$components/sections/About.svelte';
    import Projects         from '$components/sections/Projects.svelte';
    import Certificates     from '$components/sections/Certificates.svelte';
    import Header           from '$components/Header.svelte';

    let sectionRefs: Record<string, HTMLElement> = {};


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
    <Header {scrollToSection} />
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