<script lang="ts">
    import { onMount }  from "svelte";
    import { fade }     from "svelte/transition";

    import CertificateCard      from "$components/cards/CertificateCard.svelte";
    import type { Certificate } from "$models/certificate";


    export let sectionRefs: Record<string, HTMLElement>;


    let certificates: Certificate[] = [];

    onMount(async () => {
        try {
            const projectsResponse = await fetch( 'api/profile/6', {
                method: 'GET',
            });
            
            if ( !projectsResponse.ok ) {
                return;
            }

            certificates = await projectsResponse.json() as Certificate[];
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    });
</script>

<section 
    id="certificates" 
    class="py-20 bg-indigo-950/30"
    bind:this={sectionRefs.certificates}
>
    <div class="container mx-auto px-4">
        <div class="text-center mb-16" in:fade={{ duration: 800 }}>
            <h2 class="text-4xl font-bold mb-4">My Certificates ({certificates.length})</h2>

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
