<script lang="ts">
    import { onMount }  from "svelte";
    import { fade, fly } from "svelte/transition";

    import CertificateCard      from "$components/cards/CertificateCard.svelte";
    import type { Certificate } from "$models/certificate";


    export let sectionRefs: Record<string, HTMLElement>;


    let certificates: Certificate[] = [];
    let currentPage = 1;
    let itemsPerPage = 20;
    let totalPages = 0;
    let displayedCertificates: Certificate[] = [];


    function changePage(page: number) {
        if (page < 1 || page > totalPages) return;
        currentPage = page;
        updateDisplayedCertificates();
    }


    function updateDisplayedCertificates() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, certificates.length);
        displayedCertificates = certificates.slice(startIndex, endIndex);
    }


    $: {
        totalPages = Math.ceil(certificates.length / itemsPerPage);
        updateDisplayedCertificates();
    }


    function getPageNumbers() {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);

            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(totalPages - 1, currentPage + 1);

            if (currentPage <= 3) {
                endPage = 4;
            }

            if (currentPage >= totalPages - 2) {
                startPage = totalPages - 3;
            }

            if (startPage > 2) {
                pages.push('...');
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (endPage < totalPages - 1) {
                pages.push('...');
            }

            pages.push(totalPages);
        }

        return pages;
    }


    onMount(async () => {
        try {
            const projectsResponse = await fetch( 'api/profile/6', {
                method: 'GET',
            });

            if ( !projectsResponse.ok ) {
                return;
            }

            certificates = await projectsResponse.json() as Certificate[];
            updateDisplayedCertificates();
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
            <h2 class="text-4xl font-bold mb-4">My Certificates ({ certificates.length })</h2>

            <div class="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>

            <p class="text-gray-300 max-w-2xl mx-auto">
                Professional certifications and achievements that showcase my expertise and continuous learning.
            </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {#each displayedCertificates as cert, i (cert.id)}
                <div in:fly={{ y: 20, duration: 300, delay: i * 50 }}>
                    <CertificateCard certificate={cert} />
                </div>
            {/each}
        </div>

        <!-- Pagination controls -->
        {#if totalPages > 1}
            <div class="flex justify-center mt-12" in:fade={{ duration: 500, delay: 300 }}>
                <div class="flex justify-center bg-gray-800/50 backdrop-blur-sm p-1 rounded-xl shadow-lg shadow-purple-900/20 border border-purple-500/10 transition-all duration-300">
                    <div class="flex items-center space-x-3 p-1">
                        <!-- Previous button -->
                        <button 
                            class       = "flex items-center justify-center w-9 h-9 rounded-lg border border-purple-500/20 text-white transition-all duration-200 {currentPage === 1 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-purple-600/20 hover:border-purple-500/50'}" 
                            on:click    = {() => changePage(currentPage - 1)}
                            disabled    = {currentPage === 1}
                            aria-label  = "Previous page"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>

                        <!-- Page numbers -->
                        <div class="flex items-center space-x-2">
                            {#each getPageNumbers() as page}
                                {#if typeof page === 'string'}
                                    <span class="flex items-center justify-center w-8 text-gray-400 text-sm">...</span>
                                {:else}
                                    <button 
                                        class           = "relative flex items-center justify-center min-w-[36px] h-9 rounded-lg text-white font-medium transition-all duration-200 overflow-hidden {currentPage === page ? 'bg-purple-600 shadow-lg shadow-purple-600/30' : 'hover:bg-purple-600/20'}" 
                                        on:click        = {() => changePage(page)}
                                        aria-label      = "Page {page}"
                                        aria-current    = {currentPage === page ? 'page' : undefined}
                                    >
                                        {#if currentPage === page}
                                            <span class="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-pink-500/40 animate-[spin_2s_linear_infinite] opacity-50"></span>
                                        {/if}

                                        <span class="relative z-10">{page}</span>
                                    </button>
                                {/if}
                            {/each}
                        </div>

                        <!-- Next button -->
                        <button 
                            class       = "flex items-center justify-center w-9 h-9 rounded-lg border border-purple-500/20 text-white transition-all duration-200 {currentPage === totalPages ? 'opacity-40 cursor-not-allowed' : 'hover:bg-purple-600/20 hover:border-purple-500/50'}" 
                            on:click    = {() => changePage(currentPage + 1)}
                            disabled    = {currentPage === totalPages}
                            aria-label  = "Next page"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</section>
