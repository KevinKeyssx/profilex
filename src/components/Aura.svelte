<figure class="aura-center absolute inset-0 z-10">
    <section class="img-bg"></section>
    <svg
        class="fill-token -scale-x-[100%]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
    >
    </svg>
</figure>

<style>
    .aura-center {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        inset: 0;
    }

    figure {
        display: flex;
        position: relative;
        flex-direction: column;
    }

    figure svg,
    .img-bg {
        width: 16rem;
        height: 16rem;
    }

    @media (min-width: 768px) {
        figure svg,
        .img-bg {
            width: 20rem;
            height: 20rem;
        }
    }

    .img-bg {
        position: absolute;
        z-index: -1;
        border-radius: 9999px;
        filter: blur(50px);
        transition: all;
        animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
        glow 5s linear infinite;
    }

    @keyframes glow {
        0% {
            background-color: rgba(129, 140, 248, 0.2);
        }
        33% {
            background-color: rgba(168, 85, 247, 0.2);
        }
        66% {
            background-color: rgba(236, 72, 153, 0.2);
        }
        100% {
            background-color: rgba(129, 140, 248, 0.2);
        }
    }

    @keyframes pulse {
        50% {
            transform: scale(4.5);
        }
    }
</style>
