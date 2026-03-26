export default function StarsField(canvasElement) {
    const canvas = canvasElement;
    const ctx = canvas.getContext('2d');
    let stars = [];

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createStars();
    };

    function createStars() {
        stars = [];

        const layers = [
            { count: 50, radius: 2, opacity: [0.7, 0.9], speed: 0.2, color: "#EEF2FF" },   // Large
            { count: 75, radius: 1.5, opacity: [0.4, 0.6], speed: 0.15, color: "#EEF2FF" }, // Medium
            { count: 150, radius: 1, opacity: [0.2, 0.4], speed: 0.1, color: "#EEF2FF" },  // Tiny
            { count: 6, radius: 2.5, opacity: [0.5, 0.5], speed: 0, color: "#00E5FF" }     // Cyan Accents
        ];

        layers.forEach(layer => {
            for (let i = 0; i < layer.count; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    dx: (Math.random() - 0.5) * layer.speed,
                    dy: (Math.random() - 0.5) * layer.speed,
                    radius: layer.radius,
                    opacity: layer.opacity[0] + Math.random() * (layer.opacity[1] - layer.opacity[0]),
                    color: layer.color,
                });
            }
        });
    }

    function draw() {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach((star) => {
            ctx.save();
            ctx.beginPath();
            ctx.globalAlpha = star.opacity;
            ctx.fillStyle = star.color;

            if (star.color === "#00E5FF") {
                ctx.shadowBlur = 10;
                ctx.shadowColor = "#00E5FF";
            }

            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        });
    }

    function update() {
        stars.forEach((star) => {
            star.x += star.dx;
            star.y += star.dy;

            if (star.x < 0) star.x = canvas.width;
            if (star.x > canvas.width) star.x = 0;
            if (star.y < 0) star.y = canvas.height;
            if (star.y > canvas.height) star.y = 0;
        });

        canvas.style.position = 'fixed';
        canvas.style.zIndex = '-1';

        draw();
        requestAnimationFrame(update);
    }


    window.addEventListener('resize', resize);
    resize();
    update();
}