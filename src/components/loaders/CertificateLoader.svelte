<card class="group relative block rounded-xl transition-all duration-500 skeleton-card">
    <!-- Card content -->
    <div class="h-full bg-gray-900 rounded-lg overflow-hidden z-10 relative">
        <!-- Skeleton background with shimmer effect (ahora dentro del contenedor) -->
        <div class="absolute inset-0 bg-gray-900/30 skeleton-bg"></div>
        
        <!-- Certificate info skeleton -->
        <div class="p-6 relative">
            <!-- Title skeleton -->
            <div class="flex items-center gap-1 h-7 w-3/4 bg-gray-800/40 rounded-md mb-4 skeleton-pulse"></div>

            <!-- Description skeleton -->
            <div class="space-y-2 mb-4">
                <div class="h-4 bg-gray-800/30 rounded-md w-full skeleton-pulse"></div>
                <div class="h-4 bg-gray-800/30 rounded-md w-5/6 skeleton-pulse"></div>
            </div>

            <!-- Bottom info skeleton -->
            <div class="relative h-8 mt-2">
                <!-- Date and teacher info skeleton -->
                <div class="flex justify-between">
                    <div class="flex items-center">
                        <div class="h-4 w-4 mr-2 bg-gray-800/40 rounded-full skeleton-pulse"></div>
                        <div class="h-4 w-20 bg-gray-800/30 rounded-md skeleton-pulse"></div>
                    </div>
                    <div class="flex items-center">
                        <div class="h-4 w-4 mr-2 bg-gray-800/40 rounded-full skeleton-pulse"></div>
                        <div class="h-4 w-20 bg-gray-800/30 rounded-md skeleton-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Issuer badge skeleton -->
    <div class="z-10 absolute top-0 right-0 transform -translate-y-1/2 bg-gray-800/50 h-6 w-24 rounded-full skeleton-pulse" style="margin-top: -1px;"></div>
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
</style>