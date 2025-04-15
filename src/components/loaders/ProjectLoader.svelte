<script>
    import LoaderStar from "./StarLoader.svelte";
</script>

<card class="skeleton-card w-full h-[25.5rem] shadow-lg relative overflow-hidden rounded-xl">
    <!-- Skeleton background with shimmer effect -->
    <div class="absolute inset-0 bg-gray-900/50 skeleton-bg"></div>

    <!-- Skeleton header -->
    <div class="absolute top-0 left-0 right-0 h-48 bg-gray-800/30 skeleton-pulse"></div>

    <!-- Skeleton content -->
    <div class="absolute top-48 left-0 right-0 bottom-0 px-[1.45rem] py-[1.5rem]">
        <!-- Title skeleton -->
        <div class="mt-1.5 h-6 w-2/3 bg-gray-800/40 rounded-md mb-4 skeleton-pulse"></div>

        <!-- Description skeleton -->
        <div class="space-y-2">
            <div class="h-4 bg-gray-800/30 rounded-md w-full skeleton-pulse"></div>
            <div class="h-4 bg-gray-800/30 rounded-md w-5/6 skeleton-pulse"></div>
            <div class="h-4 bg-gray-800/30 rounded-md w-4/6 skeleton-pulse"></div>
        </div>

        <!-- Button skeleton -->
        <div class=" flex gap-3 py-[1.05rem]">
            <div class="bottom-6 left-6 h-10 w-14 bg-gray-800/40 rounded-md skeleton-pulse"></div>
            <div class="bottom-6 left-6 h-10 w-28 bg-gray-800/40 rounded-md skeleton-pulse"></div>
            <div class="bottom-6 left-6 h-10 w-28 bg-gray-800/40 rounded-md skeleton-pulse"></div>
        </div>
    </div>

    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoaderStar />
    </div>
</card>

<style>
    .skeleton-card {
        background-color: #101828;
    }

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

    @keyframes load012323 {
        to {
            transform: rotate(360deg);
        }
    }
</style>
