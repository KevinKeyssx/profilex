<script>
    import Social from "./cards/Social.svelte";
</script>

<footer class="bg-gray-900 py-12 border-t border-gray-800">
    <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-6 md:mb-0">
                <h2 class="text-2xl font-bold text-purple-400 mb-2">
                    <a href="https://github.com/KevinKeyssx" target="_blank" rel="noopener noreferrer">
                        KevinKeyssx
                    </a>
                </h2>

                <p class="text-gray-400">Full Stack Developer</p>
            </div>

            <Social />
        </div>

        <div class="mt-8 pt-8 border-t border-gray-800 text-center">
            <p class="text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
    </div>
</footer>