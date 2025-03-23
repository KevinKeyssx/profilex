<script lang="ts">
    import { onMount }      from 'svelte';
    import { fade, fly }    from 'svelte/transition';

    import type { Project } from '$models/project';


    export let project : Project;


    let isHovered = false;
    let particlesContainer: HTMLElement;
    let particles: HTMLElement[] = [];
    let animationFrame: number;

    // Create particles for background animation
    onMount(() => {
        // Create particles
        if ( particlesContainer ) {
            for (let i = 0; i < 15; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle absolute rounded-full';

                // Random size between 4px and 12px
                const size = Math.floor(Math.random() * 8) + 4;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;

                // Random starting position
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;

                // Random speed
                particle.dataset.speedX = ((Math.random() - 0.5) * 0.7).toString();
                particle.dataset.speedY = ((Math.random() - 0.5) * 0.7).toString();

                particlesContainer.appendChild(particle);
                particles.push(particle);
            }
        }

        // Start animation
        const animateParticles = () => {
            particles.forEach((particle) => {
                const currentX = parseFloat(particle.style.left);
                const currentY = parseFloat(particle.style.top);
                const speedX = parseFloat(particle.dataset.speedX || '0');
                const speedY = parseFloat(particle.dataset.speedY || '0');

                // Update position
                let newX = currentX + speedX;
                let newY = currentY + speedY;

                // Bounce off edges
                if (newX < 0 || newX > 100) {
                    particle.dataset.speedX = (-speedX).toString();
                    newX = currentX;
                }
                if (newY < 0 || newY > 100) {
                    particle.dataset.speedY = (-speedY).toString();
                    newY = currentY;
                }

                particle.style.left = `${newX}%`;
                particle.style.top = `${newY}%`;
            });

            animationFrame = requestAnimationFrame(animateParticles);
        };
        animateParticles();
        
        return () => {
            if (animationFrame) {
            cancelAnimationFrame(animationFrame);
            }
        };
    });
</script>

<div 
    class="group relative w-full h-full"
    on:mouseenter={() => isHovered = true}
    on:mouseleave={() => isHovered = false}
    in:fly={{ y: 50, duration: 500 }}
    out:fly={{ y: 50, duration: 500 }}
    aria-label={project.title}
    role="button"
    tabindex="0"
>
    <!-- Card with smooth scale animation on hover -->
    <div 
        class="relative w-full h-full rounded-xl overflow-hidden transition-all duration-500 shadow-lg bg-gray-800 aura-animation transform group-hover:scale-105"
    >
        <!-- Particles container -->
        <div bind:this={particlesContainer} class="absolute inset-0 overflow-hidden pointer-events-none">
            <!-- Particles will be dynamically added here -->
        </div>
        <!-- Animated border -->
        <div class="absolute inset-0 rounded-xl border-2 border-transparent before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-transparent before:bg-[length:400%_400%] before:bg-gradient-to-r before:from-purple-500 before:via-blue-500 before:to-purple-500 before:animate-border-flow"></div>

        <!-- Card content -->
        <div class="relative h-full z-10 flex flex-col">
            <!-- Project image with overlay -->
            <div class="h-48 overflow-hidden relative">
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
            </div>

            <!-- Project info -->
            <div class="p-6 flex-1 flex flex-col">
                <h3 class="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>

                <p class="text-gray-400 mb-4 flex-1">{project.description}</p>

                <!-- Action buttons with hover effects -->
                <div class="flex gap-3 mt-auto">
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="relative px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm transition-all duration-300 overflow-hidden group-hover:shadow-lg group-hover:shadow-purple-500/30 transform group-hover:translate-y-[-2px]"
                    >
                        <span class="relative z-10">Live Demo</span>

                        <span class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </a>

                    <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="relative px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-all duration-300 overflow-hidden transform group-hover:translate-y-[-2px]"
                    >
                        <span class="relative z-10">GitHub</span>

                        <span class="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Permanent aura effect -->
    <div class="absolute -inset-1 rounded-xl bg-purple-500/10 blur-xl animate-aura-pulse -z-10"></div>

    <!-- Enhanced glow effect on hover -->
    {#if isHovered}
        <div class="absolute -inset-3 rounded-xl bg-purple-500/20 blur-xl animate-pulse-slow -z-10 transition-all duration-500"></div>
    {/if}
</div>

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

    /* Particle styles */
    :global(.particle) {
        position: absolute;
        background: radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(147, 51, 234, 0) 70%);
        border-radius: 50%;
        pointer-events: none;
        transition: opacity 0.3s ease;
    }

    /* Box-shadow animation */
    .aura-animation {
        animation: shadow-pulse 4s ease-in-out infinite;
    }

    @keyframes shadow-pulse {
        0%, 100% {
            box-shadow: 0 0 15px 0 rgba(139, 92, 246, 0.2);
        }
        50% {
            box-shadow: 0 0 30px 5px rgba(139, 92, 246, 0.4);
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
        animation: delay 0.3s ease-out forwards;
        opacity: 0;
    }
</style>