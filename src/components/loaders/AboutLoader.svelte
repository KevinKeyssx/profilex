<script>
    import LoaderStar from "./StarLoader.svelte";
</script>

<div class="relative w-full h-[400px] max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl">
    <div class="absolute inset-0 bg-gray-800/50 skeleton-bg"></div>

    <!-- Skeleton content elements -->
    <div class="absolute left-4 top-6 h-8 w-1/3 bg-gray-700/50 rounded-md skeleton-pulse"></div>

    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoaderStar />
    </div>
</div>

<style>
    .skeleton-bg::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
        animation: skeleton-shimmer 1.5s infinite;
    }
    
    .skeleton-pulse {
        opacity: 0.7;
        animation: skeleton-pulse 1.5s infinite ease-in-out alternate;
    }
    
    @keyframes skeleton-shimmer {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }
    
    @keyframes skeleton-pulse {
        0% {
            opacity: 0.5;
        }
        100% {
            opacity: 0.8;
        }
    }
</style>
