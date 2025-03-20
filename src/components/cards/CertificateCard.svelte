<script lang="ts">
    import { fly } from 'svelte/transition';
    
    export let certificate = {
      id: 0,
      title: "Certificate Title",
      issuer: "Certificate Issuer",
      date: "2023",
      image: "https://res.cloudinary.com/dbgzsikcs/image/upload/v1674792676/samples/bike.jpg",
      link: "#"
    };
    
    // Animation state
    let isHovered = false;
  </script>
  
  <a 
    href={certificate.link} 
    target="_blank" 
    rel="noopener noreferrer"
    class="group relative block rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:z-10"
    on:mouseenter={() => isHovered = true}
    on:mouseleave={() => isHovered = false}
    in:fly={{ y: 50, duration: 500 }}
  >
    <!-- Animated border -->
    <div class="absolute inset-0 rounded-xl border-2 border-transparent p-[2px] before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-transparent before:bg-[length:400%_400%] before:bg-gradient-to-r before:from-purple-500 before:via-blue-500 before:to-purple-500 before:animate-border-flow"></div>
    
    <!-- Card content -->
    <div class="relative h-full bg-gray-900 rounded-lg overflow-hidden z-10">
      <!-- Certificate image -->
      <div class="h-48 overflow-hidden relative">
        <img 
          src={certificate.image || "/placeholder.svg"} 
          alt={certificate.title} 
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
      </div>
      
      <!-- Certificate info -->
      <div class="p-6 relative">
        <div class="absolute top-0 right-0 transform -translate-y-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm shadow-lg shadow-purple-500/20">
          {certificate.date}
        </div>
        
        <h3 class="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">{certificate.title}</h3>
        <p class="text-gray-400">Issued by {certificate.issuer}</p>
        
        <!-- View certificate button that appears on hover -->
        <div class="mt-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span class="inline-flex items-center text-sm font-medium text-purple-400">
            View Certificate
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
    
    <!-- Glow effect on hover -->
    {#if isHovered}
      <div class="absolute inset-0 rounded-xl bg-purple-500/20 blur-xl animate-pulse-slow"></div>
    {/if}
  </a>
  
  <style>
    /* Custom animations that can't be done with just Tailwind */
    @keyframes border-flow {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }
    
    .animate-border-flow:before {
      animation: border-flow 4s ease infinite;
    }
    
    @keyframes pulse-slow {
      0%, 100% {
        opacity: 0.2;
      }
      50% {
        opacity: 0.4;
      }
    }
    
    .animate-pulse-slow {
      animation: pulse-slow 3s ease-in-out infinite;
    }
  </style>
  