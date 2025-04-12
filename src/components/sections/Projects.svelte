<script lang="ts">
    import { onMount }  from "svelte";
    import { fade }     from "svelte/transition";

    import ProjectCard  from "$components/cards/ProjectCard.svelte";
    import Search       from "$components/inputs/Search.svelte";
    import { projects } from '$lib/data-projectes';


    export let sectionRefs: Record<string, HTMLElement>;


    let searchTerm = "";
    let allTechnologies: string[] = [];
    let filteredProjects = [...projects];
    let highlightedTech: string | null = null;


    function handleSearchInput( event: Event ) {
        searchTerm = ( event.target as HTMLInputElement ).value;

        if ( searchTerm === "" ) {
            highlightedTech = null;
        }
    }


    function selectTechnology( tech: string ) {
        if ( highlightedTech === tech ) {
            clearSearch();
        } else {
            searchTerm      = tech;
            highlightedTech = tech;
        }
    }


    function clearSearch() {
        searchTerm      = "";
        highlightedTech = null;
    }


    $: {
        filteredProjects = projects.filter( project => {
            if ( highlightedTech ) {
                return project.technologies.includes( highlightedTech );
            }

            const searchLower = searchTerm.toLowerCase();

            return project.title.toLowerCase().includes( searchLower ) ||
                project.description.toLowerCase().includes( searchLower ) ||
                project.technologies.some( tech => tech.toLowerCase().includes( searchLower ));
        });
    }


    onMount(() => {
        const techSet = new Set<string>();

        projects.forEach( project => {
            project.technologies.forEach( tech => techSet.add( tech ));
        });

        allTechnologies = Array.from( techSet ).sort();
    });
</script>

<section 
        id="projects" 
        class="py-20 bg-gray-900"
        bind:this={sectionRefs.projects}
    >
        <div class="container mx-auto px-4 space-y-10">
            <div class="text-center" in:fade={{ duration: 800 }}>
                <h2 class="text-4xl font-bold mb-4">My Projects (4)</h2>

                <div class="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>

                <p class="text-gray-300 max-w-2xl mx-auto">
                    Browse through my recent projects and discover the solutions I've built.
                </p>
            </div>

            <!-- Search and Filter -->
            <div class="max-w-3xl mx-auto">
                <div class="flex flex-col md:flex-row gap-4 mb-8">
                    <div class="flex-1">
                        <Search
                            bind:value={searchTerm}
                            placeholder="Search projects or technologies..."
                            onInput={handleSearchInput}
                        />
                    </div>
                </div>

                <!-- Technology filters -->
                <div class="flex flex-wrap gap-2">
                    {#each allTechnologies as tech}
                        <button 
                            class={`px-3 py-1 rounded-full text-sm transition-all ${highlightedTech === tech ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                            on:click={() => selectTechnology(tech)}
                        >
                            {tech}
                        </button>
                    {/each}

                    {#if searchTerm}
                        <button 
                            class="px-3 py-1 rounded-full text-sm bg-rose-900 text-white hover:bg-rose-800 transition-all"
                            on:click={clearSearch}
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