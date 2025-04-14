<script lang="ts">
    import { fade, fly }    from "svelte/transition";
    import { onMount }      from "svelte";

    import ShinyButton          from "$components/buttons/ShinyButton.svelte";
    import Sliders              from "$components/carrousel/Sliders.svelte";
    import { ENVS }             from "$lib/envs";
    import type { ImageAbout }  from "$models/images-about";


    export let sectionRefs: Record<string, HTMLElement>;


    let isDownloading   = false;
    let iframeElement   : HTMLIFrameElement | null = null;
    let imageAbout      : ImageAbout[] = [];


    async function getImagesAbout() {
        const response = await fetch( 'api/profile/8' );
        imageAbout = await response.json() as ImageAbout[];
    }


    onMount(() => {
        iframeElement = document.createElement('iframe') as HTMLIFrameElement;
        iframeElement.style.display = 'none';
        document.body.appendChild(iframeElement);

        getImagesAbout();

        return () => {
            if (iframeElement && iframeElement.parentNode) {
                document.body.removeChild(iframeElement);
            }
        };
    });


    function downloadCV() {
        if ( isDownloading ) return;

        isDownloading = true;

        console.log('Downloading CV...');

        const cvUrl = ENVS.PROFILE_CV;

        try {
            if ( iframeElement ) {
                const timeoutId = setTimeout(() => {
                    console.log('Download taking longer than expected, opening in new tab');
                    window.open(cvUrl, '_blank');
                    isDownloading = false;
                }, 8000);

                iframeElement.onload = () => {
                    clearTimeout(timeoutId);
                    console.log('Iframe loaded, PDF should be downloading');

                    setTimeout(() => {
                        isDownloading = false;
                    }, 2000);
                };

                iframeElement.src = cvUrl;
            } else {
                window.open(cvUrl, '_blank');

                setTimeout(() => {
                    isDownloading = false;
                }, 1000);
            }
        } catch (error) {
            console.error('Error initiating CV download:', error);
            window.open(cvUrl, '_blank');
            isDownloading = false;
        }
    }
</script>

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
                    <Sliders {imageAbout} />

                    <div class="absolute -bottom-10 left-[67%] sm:left-[82%] md:left-[80%] lg:left-[85%] xl:left-[88%] 2xl:left-[90%] w-24 h-24 bg-purple-600 rounded-lg grid items-center justify-center">
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

                <div class="flex flex-col items-center space-y-6">
                    <img
                        src="https://github-readme-stats.vercel.app/api?username=kevinkeyssx&show_icons=true&theme=radical&count_private=true&include_all_commits=true&hide_border=true"
                        alt="GitHub Stats"
                    />

                    <ShinyButton
                        title={isDownloading ? 'Downloading' : 'Download CV'}
                        onClick={downloadCV}
                        disabled={isDownloading}
                    />
                </div>
            </div>
        </div>
    </div>
</section>
