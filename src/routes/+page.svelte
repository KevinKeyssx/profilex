<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly} from 'svelte/transition';

    import Aura             from '$components/Aura.svelte';
    import AnimatedTitle    from '$components/title/AnimatedTitle.svelte';
    import ShinyButton      from '$components/buttons/ShinyButton.svelte';
    import CertificateCard  from '$components/cards/CertificateCard.svelte';
    import ProjectCard      from '$components/cards/ProjectCard.svelte';
    import Footer           from '$components/Footer.svelte';
    import Social           from '$components/cards/Social.svelte';
    import Scroll           from '$components/Scroll.svelte';
    import Search           from '$components/inputs/Search.svelte';
    import { certificates } from '$lib/data-certificates';
    import { projects }     from '$lib/data-projectes';

    // State variables
    let searchTerm = "";
    let selectedTech: string | null = null;
    let allTechnologies: string[] = [];
    let filteredProjects = [...projects];
    let isNavbarBlurred = false;
    let activeSection = "home";
    let sections: string[] = ["home", "about", "projects", "certificates"];
    let sectionRefs: Record<string, HTMLElement> = {};

    onMount(() => {
        const techSet = new Set<string>();

        projects.forEach(project => {
            project.technologies.forEach(tech => techSet.add(tech));
        });
        allTechnologies = Array.from(techSet);

        window.addEventListener('scroll', () => {
            isNavbarBlurred = window.scrollY > 50;
        });
    });

    $: {
        filteredProjects = projects.filter(project => {
            const matchesSearch = project.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
                ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesTech = selectedTech ? project.technologies.includes(selectedTech) : true;

            return matchesSearch && matchesTech;
        });
    }

    // Function to select a technology
    function selectTechnology(tech: string) {
        selectedTech = selectedTech === tech ? null : tech;
    }

    // Function to scroll to section
    function scrollToSection(section: string) {
        sectionRefs[section]?.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<svelte:head>
    <title>My Portfolio</title>
    <meta name="description" content="Personal portfolio showcasing my projects and skills" />
</svelte:head>

<Aura />

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
    <section 
        id="home" 
        class="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
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

    <!-- About Section -->
    <section 
        id="about" 
        class="py-20 bg-gray-800"
        bind:this={sectionRefs.about}
    >
        <div class="container mx-auto px-4">
            <div class="text-center mb-16" in:fade={{ duration: 800, delay: 200 }}>
                <h2 class="text-4xl font-bold mb-4">About Me</h2>
                <div class="w-20 h-1 bg-purple-500 mx-auto"></div>
            </div>

            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div in:fly={{ y: 50, duration: 800, delay: 300 }}>
                    <div class="relative">
                        <div class="w-full h-80 bg-gray-700 rounded-lg overflow-hidden">
                            <img 
                                src="/placeholder.svg?height=400&width=400" 
                                alt="Profile" 
                                class="w-full h-full object-cover"
                            />
                        </div>

                        <div class="absolute -bottom-10 left-[62%] sm:left-[82%] md:left-[80%] lg:left-[85%] xl:left-[88%] 2xl:left-[90%] w-24 h-24 bg-purple-600 rounded-lg grid items-center justify-center">
                            <div class="grid">
                                <span class="text-2xl font-bold text-amber-300">5+</span>

                                <span class="text-sm ml-1">Years<br>Experience</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div in:fly={{ y: 50, duration: 800, delay: 500 }}>
                    <h3 class="text-2xl font-bold mb-4">Who am I?</h3>
                    <p class="text-gray-300 mb-6">
                        I'm a passionate full-stack developer with expertise in modern web technologies. 
                        I specialize in creating responsive, accessible, and performant web applications 
                        that deliver exceptional user experiences.
                    </p>

                    <p class="text-gray-300 mb-6">
                        With a background in both front-end and back-end development, I bring a holistic 
                        approach to solving complex problems and building scalable solutions.
                    </p>

                    <div class="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <h4 class="font-bold mb-2 text-purple-400">Frontend</h4>
                            <ul class="space-y-1 text-gray-300">
                            <li>• React / Svelte</li>
                            <li>• TypeScript</li>
                            <li>• Tailwind CSS</li>
                            <li>• Responsive Design</li>
                            </ul>
                        </div>

                        <div>
                            <h4 class="font-bold mb-2 text-purple-400">Backend</h4>
                            <ul class="space-y-1 text-gray-300">
                            <li>• Node.js</li>
                            <li>• Express</li>
                            <li>• MongoDB / PostgreSQL</li>
                            <li>• RESTful APIs</li>
                            </ul>
                        </div>
                    </div>

                    <ShinyButton title="Download CV" />
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section 
        id="projects" 
        class="py-20 bg-gray-900"
        bind:this={sectionRefs.projects}
    >
        <div class="container mx-auto px-4">
            <div class="text-center mb-16" in:fade={{ duration: 800 }}>
                <h2 class="text-4xl font-bold mb-4">My Projects</h2>

                <div class="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>

                <p class="text-gray-300 max-w-2xl mx-auto">
                    Browse through my recent projects and discover the solutions I've built.
                </p>
            </div>

            <!-- Search and Filter -->
            <div class="mb-12 max-w-3xl mx-auto">
                <div class="flex flex-col md:flex-row gap-4 mb-8">
                    <div class="flex-1">
                        <Search
                            bind:value={searchTerm}
                            placeholder="Search projects..."
                        />
                    </div>
                </div>

                <!-- Technology filters -->
                <div class="flex flex-wrap gap-2">
                    {#each allTechnologies as tech}
                        <button 
                            class={`px-3 py-1 rounded-full text-sm transition-all ${selectedTech === tech ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                            on:click={() => selectTechnology(tech)}
                        >
                            {tech}
                        </button>
                    {/each}

                    {#if selectedTech}
                        <button 
                            class="px-3 py-1 rounded-full text-sm bg-red-600 text-white hover:bg-red-700 transition-all"
                            on:click={() => selectedTech = null}
                        >
                            Clear Filter
                        </button>
                    {/if}
                </div>
            </div>

            <!-- Projects Grid -->
            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-5 xl:gap-6 2xl:gap-8">
                {#each filteredProjects as project, i (project.id)}
                    <ProjectCard {project} />
                {:else}
                    <div class="col-span-full text-center py-12">
                        <p class="text-xl text-gray-400">No projects found matching your criteria.</p>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Certificates Section -->
    <section 
        id="certificates" 
        class="py-20 bg-indigo-950/30"
        bind:this={sectionRefs.certificates}
    >
        <div class="container mx-auto px-4">
            <div class="text-center mb-16" in:fade={{ duration: 800 }}>
                <h2 class="text-4xl font-bold mb-4">My Certificates</h2>

                <div class="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>

                <p class="text-gray-300 max-w-2xl mx-auto">
                    Professional certifications and achievements that showcase my expertise and continuous learning.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {#each certificates as cert, i (cert.id)}
                    <CertificateCard certificate={cert} />
                {/each}
            </div>
        </div>
    </section>

    <!-- Footer -->
    <Footer />
</div>

<style>
    /* Additional styles can be added here if needed */
    :global(html) {
        scroll-behavior: smooth;
    }
    
    /* Animation for background elements */
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

    /* Scrollbar Styles */
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