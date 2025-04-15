<script lang="ts">
    const socials = [
        {
            name: 'GitHub',
            url: 'https://github.com/kevinkeyssx',
            icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>`,
            color: 'github',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/kevinkeyssx/',
            icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path></svg>`,
            color: 'linkedin',
        },
        {
            name: 'Email',
            url: 'mailto:keyss1700@gmail.com',
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`,
            color: 'email',
        },
        {
            name: 'WhatsApp',
            url: 'https://api.whatsapp.com/send?phone=+56978863344&text=Hola Kevin! Me contacto contigo desde tu portfolio 🌐',
            icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M20.472 3.528C18.208 1.264 15.208 0 12 0 5.432 0 0 5.432 0 12c0 2.136.576 4.208 1.6 6.064L0 24l6.064-1.6C7.792 23.424 9.864 24 12 24c6.568 0 12-5.432 12-12 0-3.208-1.264-6.208-3.528-8.472zM12 22.08c-2.016 0-3.984-.576-5.68-1.6l-.416-.24-4.24 1.12 1.12-4.24-.24-.416C1.52 15.984.96 14.016.96 12c0-6.096 4.944-11.04 11.04-11.04 2.944 0 5.712 1.152 7.792 3.232s3.232 4.848 3.232 7.792c0 6.096-4.944 11.04-11.04 11.04zm6.24-8.24c-.336-.168-1.968-.968-2.272-1.08-.304-.112-.528-.168-.752.168-.224.336-.864 1.08-1.056 1.304-.192.224-.384.24-.72.08-.336-.168-1.44-.528-2.736-1.68-.96-.848-1.68-1.904-1.872-2.24-.192-.336-.016-.528.144-.696.152-.152.336-.384.504-.576.168-.192.224-.336.336-.576.112-.24.056-.448-.024-.624-.08-.176-.752-1.808-1.024-2.48-.272-.672-.544-.576-.752-.576-.192 0-.416-.024-.64-.024s-.592.08-.896.416c-.304.336-1.168 1.144-1.168 2.776s1.192 3.216 1.36 3.44c.168.224 2.344 3.576 5.68 5.024 3.36 1.456 3.36.976 3.968.912.608-.064 1.968-.8 2.24-1.584.272-.784.272-1.44.192-1.584z" clip-rule="evenodd"></path></svg>`,
            color: 'whatsapp',
        },
    ];


    const basicColors = {
        bg      : 'bg-gray-900/80',
        shadow  : 'shadow-gray-900/80',
        glow    : 'rgba(200, 162, 200, 0.3)',
    }


    const getColorClasses = ( color: string ) => ({
        'github'    : { ...basicColors, hover: 'hover:bg-gray-800' },
        'linkedin'  : { ...basicColors, hover: 'hover:bg-blue-900' },
        'email'     : { ...basicColors, hover: 'hover:bg-purple-900' },
        'whatsapp'  : { ...basicColors, hover: 'hover:bg-green-900' },
    }[color]       ?? { ...basicColors, hover: 'hover:bg-gray-800' });
</script>

<div class="flex flex-wrap justify-center gap-4 p-6">
    {#each socials as social}
        {@const colors = getColorClasses(social.color)}
        <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            class="social-button group relative flex items-center justify-center w-14 h-14 rounded-full {colors.bg} {colors.hover} transition-all duration-300 ease-out hover:scale-110"
            style="--glow-color: {colors.glow}"
            aria-label={social.name}
        >
            <div class="relative z-10 transition-all duration-300 group-hover:scale-110 text-white">
                {@html social.icon}
            </div>

            <div class="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

            <span class="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-all duration-200 text-sm text-gray-300 whitespace-nowrap">
                {social.name}
            </span>
        </a>    
    {/each}
</div>

<style>
    @keyframes shadowPulse {
        0%, 100% {
            box-shadow: 0 0 45px var(--glow-color);
        }
        50% {
            box-shadow: 0 0 10px var(--glow-color);
        }
    }

    .social-button {
        animation: shadowPulse 3s ease-in-out infinite;
    }

    .social-button:hover {
        animation: none;
    }
</style>