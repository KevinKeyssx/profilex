<button 
    class="skeleton-card px-6 py-1 rounded-full text-sm transition-all bg-gray-800 text-gray-300 relative overflow-hidden"
>
    <!-- Skeleton background with shimmer effect -->
    <div class="absolute inset-0 bg-gray-900/50 skeleton-bg"></div>

    <!-- Loader -->
    <svg class="relative z-10" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#ca84c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="16" stroke-dashoffset="16" d="M12 3c4.97 0 9 4.03 9 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="16;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path><path stroke-dasharray="64" stroke-dashoffset="64" stroke-opacity="0.3" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="64;0"/></path></g></svg>
</button>

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

    @keyframes skeleton-shimmer {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }
</style>