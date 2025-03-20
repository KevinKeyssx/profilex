<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly} from 'svelte/transition';

    import ShinyButton from '../components/buttons/ShinyButton.svelte';
  import AnimatedTitle from '../components/title/AnimatedTitle.svelte';
  import CertificateCard from '../components/cards/CertificateCard.svelte';
  import ProjectCard from '../components/cards/ProjectCard.svelte';
  
    // Define types for our data
    type Project = {
      id: number;
      title: string;
      description: string;
      image: string;
      link: string;
      github: string;
      technologies: string[];
    };
  
    type Certificate = {
      id: number;
      title: string;
      issuer: string;
      date: string;
      image: string;
      link: string;
    };
  
    // Sample data - replace with your own
    const projects: Project[] = [
      {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-stack e-commerce platform with payment integration",
        image: "/placeholder.svg?height=300&width=500",
        link: "https://example.com/project1",
        github: "https://github.com/yourusername/project1",
        technologies: ["TypeScript", "Svelte", "Node.js", "MongoDB"]
      },
      {
        id: 2,
        title: "Task Management App",
        description: "A productivity app for managing tasks and projects",
        image: "/placeholder.svg?height=300&width=500",
        link: "https://example.com/project2",
        github: "https://github.com/yourusername/project2",
        technologies: ["React", "Firebase", "Tailwind CSS"]
      },
      {
        id: 3,
        title: "Portfolio Website",
        description: "A personal portfolio website built with Svelte",
        image: "https://res.cloudinary.com/dbgzsikcs/image/upload/v1674792681/samples/imagecon-group.jpg",
        link: "https://example.com/project3",
        github: "https://github.com/yourusername/project3",
        technologies: ["Svelte", "TypeScript", "Tailwind CSS"]
      },
      {
        id: 4,
        title: "Weather Dashboard",
        description: "Real-time weather information with interactive maps",
        image: "/placeholder.svg?height=300&width=500",
        link: "https://example.com/project4",
        github: "https://github.com/yourusername/project4",
        technologies: ["JavaScript", "API Integration", "Chart.js"]
      }
    ];
  
    const certificates: Certificate[] = [
      {
        id: 1,
        title: "Full Stack Web Development",
        issuer: "Udemy",
        date: "14-05-2023",
        image: "https://res.cloudinary.com/dbgzsikcs/image/upload/v1674792681/samples/imagecon-group.jpg",
        link: "https://res.cloudinary.com/dbgzsikcs/image/upload/v1674792681/samples/imagecon-group.jpg"
      },
      {
        id: 2,
        title: "Advanced TypeScript",
        issuer: "Coursera",
        date: "14-05-2023",
        image: "/placeholder.svg?height=200&width=300",
        link: "https://example.com/cert2"
      },
      {
        id: 3,
        title: "UI/UX Design Fundamentals",
        issuer: "Interaction Design Foundation",
        date: "14-05-2023",
        image: "/placeholder.svg?height=200&width=300",
        link: "https://example.com/cert3"
      }
    ];
  
    // State variables
    let searchTerm = "";
    let selectedTech: string | null = null;
    let allTechnologies: string[] = [];
    let filteredProjects = [...projects];
    let isNavbarBlurred = false;
    let activeSection = "home";
    let sections: string[] = ["home", "about", "projects", "certificates"];
    let sectionRefs: Record<string, HTMLElement> = {};
  
    // Extract all unique technologies
    onMount(() => {
      const techSet = new Set<string>();
      projects.forEach(project => {
        project.technologies.forEach(tech => techSet.add(tech));
      });
      allTechnologies = Array.from(techSet);
  
      // Set up intersection observer for sections
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        });
      }, { threshold: 0.5 });
  
      sections.forEach(section => {
        if (sectionRefs[section]) {
          observer.observe(sectionRefs[section]);
        }
      });
  
      // Handle scroll for navbar blur
      window.addEventListener('scroll', () => {
        isNavbarBlurred = window.scrollY > 50;
      });
    });
  
    // Filter projects based on search term and selected technology
    $: {
      filteredProjects = projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
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
  
  <div class="dark bg-gray-900 text-white min-h-screen">
    <!-- Navbar -->
    <nav class={`fixed top-0 w-full z-50 transition-all duration-300 ${isNavbarBlurred ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <a href="#" class="text-2xl font-bold text-purple-400">Portfolio</a>
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
              <div class="absolute -bottom-10 -right-6 w-24 h-24 bg-purple-600 rounded-lg grid items-center justify-center">
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
              <input 
                type="text" 
                bind:value={searchTerm} 
                placeholder="Search projects..." 
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
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
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each filteredProjects as project, i (project.id)}
            <div 
              class="bg-gray-800/50 rounded-xl overflow-hidden transition-all hover:transform hover:scale-105 shadow-md shadow-gray-950 hover:shadow-xl"
              in:fly={{ y: 50, duration: 500, delay: i * 100 }}
            >
              <div class="h-48 overflow-hidden">
                <img 
                  src={project.image || "/placeholder.svg"} 
                  alt={project.title} 
                  class="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">{project.title}</h3>
                <p class="text-gray-400 mb-4">{project.description}</p>
                
                <div class="flex flex-wrap gap-2 mb-4">
                  {#each project.technologies as tech}
                    <span class="px-2 py-1 bg-gray-700 rounded-full text-xs">{tech}</span>
                  {/each}
                </div>
                
                <div class="flex gap-3">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm transition-colors"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          {:else}
            <div class="col-span-full text-center py-12">
              <p class="text-xl text-gray-400">No projects found matching your criteria.</p>
            </div>
          {/each}

          <ProjectCard />
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
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each certificates as cert, i (cert.id)}
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              class="block bg-gray-900 rounded-xl overflow-hidden transition-all hover:transform hover:scale-105 shadow-md shadow-gray-950 hover:shadow-xl"
              in:fly={{ y: 50, duration: 500, delay: i * 100 }}
            >
              <div class="h-48 overflow-hidden relative">
                <img 
                  src={cert.image || "/placeholder.svg"} 
                  alt={cert.title} 
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              </div>
              <div class="p-6 relative">
                <div class="absolute top-0 right-0 transform -translate-y-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
                  {cert.date}
                </div>
                <h3 class="text-xl font-bold mb-2">{cert.title}</h3>
                <p class="text-gray-400">Issued by {cert.issuer}</p>
              </div>
            </a>
          {/each}

          <CertificateCard />
        </div>
      </div>
    </section>
  
    <!-- Footer -->
    <footer class="bg-gray-900 py-12 border-t border-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-6 md:mb-0">
            <h2 class="text-2xl font-bold text-purple-400 mb-2">Your Name</h2>
            <p class="text-gray-400">Full Stack Developer</p>
          </div>
          
          <div class="flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-purple-400 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-purple-400 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-purple-400 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-purple-400 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1 15h-2v-6h2v6zm-1-7a1 1 0 100-2 1 1 0 000 2zm7 7h-2v-4c0-.6-.4-1-1-1s-1 .4-1 1v4h-2v-6h2v1.1c.4-.7 1.3-1.1 2-1.1 1.7 0 3 1.3 3 3v3z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="mt-8 pt-8 border-t border-gray-800 text-center">
          <p class="text-gray-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
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
  </style>
  
  