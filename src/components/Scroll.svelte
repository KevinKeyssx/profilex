<!-- From Uiverse.io by mrhyddenn --> 
<div class="container_mouse">
    <span class="mouse-btn">
        <span class="mouse-scroll"></span>
    </span>
    <!-- <span>Scroll Down</span> -->
</div>

<style>
    .mouse-btn {
        margin: 10px auto;
        width: 40px;
        height: 80px;
        border: 3px solid rgba(58, 46, 119, 0.918);
        border-radius: 20px;
        display: flex;
    }

    .mouse-scroll {
        display: block;
        width: 20px;
        height: 20px;
        background: linear-gradient(170deg, rgba(45, 36, 92, 0.918), rgb(58, 46, 119, 0.918));
        border-radius: 50%;
        margin: auto;
        animation: scrolling13 1s linear infinite;
    }

    @keyframes scrolling13 {
        0% {
            opacity: 0;
            transform: translateY(-20px);
        }

        100% {
            opacity: 1;
            transform: translateY(20px);
        }
    }
</style>