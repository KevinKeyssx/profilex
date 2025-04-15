<script>
    import GithubStars from "./cards/GithubStars.svelte";
    import Social from "./cards/Social.svelte";

    const github = {
        url: 'https://github.com/KevinKeyssx/profilex',
        stack: 'Frontend',
    };
</script>

<footer class="bg-gray-900 py-12 border-t border-gray-800">
    <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-6 md:mb-0 space-y-4">
                <h2 class="text-2xl font-bold text-purple-400 mb-2">
                    <a href="https://github.com/KevinKeyssx" target="_blank" rel="noopener noreferrer">
                        KevinKeyssx
                    </a>
                </h2>

                <p class="text-gray-400">Full Stack Developer</p>

                <p class="text-gray-400">View the repository</p>

                <GithubStars github={github} />
            </div>


            <img src="https://res.cloudinary.com/dbgzsikcs/image/upload/v1744697064/kevinkeyssx/3c28e3e5-50e0-421d-95d6-7c4f5e17d979.avif" alt="logo" class="w-48 h-48 rounded-4xl aspect-auto">

            <Social />
        </div>

        <div class="mt-8 pt-8 border-t border-gray-800 text-center">
            <p class="text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
            <p class="text-purple-400">Powered by <a href="https://github.com/KevinKeyssx" target="_blank" rel="noopener noreferrer">kevinkeyssx</a></p>
        </div>
    </div>
</footer>