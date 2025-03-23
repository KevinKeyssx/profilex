import type { Project } from "$models/project";

export const projects: Project[] = [
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