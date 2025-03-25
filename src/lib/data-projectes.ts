import type { Project } from "$models/project";

export const projects: Project[] = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-stack e-commerce platform with payment integration",
        image: "https://res.cloudinary.com/dbgzsikcs/image/upload/v1718862769/intro5/e2bde0dd-6440-4566-917c-00f26a4d87dd.png",
        link: "https://example.com/project1",
        github: "https://github.com/yourusername/project1",
        technologies: ["TypeScript", "Svelte", "Node.js", "MongoDB"]
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A productivity app for managing tasks and projects",
        image: "https://res.cloudinary.com/dbgzsikcs/image/upload/v1718861956/intro5/3e3b8125-2f14-478d-9436-97f27409286c.png",
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
        image: "https://res.cloudinary.com/dbgzsikcs/image/upload/v1710211799/ourmemories/KD/ellayyo/c565c74b-8403-4f27-aca3-7ff70eafddd5.avif",
        link: "https://example.com/project4",
        github: "https://github.com/yourusername/project4",
        technologies: ["JavaScript", "API Integration", "Chart.js"]
    }
];