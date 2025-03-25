<script lang="ts">
    export let styles = '';
    export let href : string;
</script>


<button
    class={`flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  text-white shadow  h-11 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-auto justify-center gap-0 rounded-lg transition-all duration-300 ease-out hover:scale-105 ${styles}`}
    on:click={() => window.open(href, '_blank')}
>
    <span
        class="absolute right-0 -mt-12 h-52 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
    ></span>
    <slot />
</button>
