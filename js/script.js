document.addEventListener('DOMContentLoaded', () => {
    // Datos de proyectos
    const proyectos = [
        {
            titulo: "Retrato a lapiz",
            imagenes: [
                "images/proyectos/d1.webp"
            ],
            descripcion: "",
            tags: ["Retratos", "Rostros", "Claroscuro"]
        },
        {
            titulo: "Kevin",
            imagenes: [
                "images/proyectos/d5.webp"
            ],
            descripcion: "",
            tags: ["Retratos", "Rostros", "Claroscuro"]
        },
        {
            titulo: "Edgar",
            imagenes: [
                "images/proyectos/d9.webp"
            ],
            descripcion: "",
            tags: ["Retratos", "Rostros", "Claroscuro"]
        },
        {
            titulo: "Onai",
            imagenes: [
                "images/proyectos/d2.webp"
            ],
            descripcion: "",
            tags: ["Retratos", "Rostros", "Claroscuro"]
        },
        {
            titulo: "Retrato a Lapiz",
            imagenes: [
                "images/proyectos/d6.webp"
            ],
            descripcion: "",
            tags: ["Retratos", "Rostros", "Claroscuro"]
        },
        {
            titulo: "Retrato a Lapiz",
            imagenes: [
                "images/proyectos/d4.webp"
            ],
            descripcion: "",
            tags: ["Retratos", "Rostros", "Claroscuro"]
        },
        {
            titulo: "La antigüedad del miedo",
            imagenes: [
                "images/proyectos/pi2.webp"
            ],
            descripcion: "Medidas:198 x 148 cm - Técnica: Acrílico / Lienzo - Año: 2024",
            tags: ["Retratos", "Rostros", "Claroscuro"]
        },
        {
            titulo: "En intimidad",
            imagenes: [
                "images/proyectos/pi3.webp"
            ],
            descripcion: "Medidas: 36 x 44 cm - Técnica: Acrílico / Lienzo - Año: 2017",
            tags: ["Retratos", "Rostros", "Claroscuro"]
        },
        {
            titulo: "La Cena",
            imagenes: [
                "images/proyectos/pi4.webp"
            ],
            descripcion: "Medidas: 110 x 138 cm - Técnica: Óleo / Tela - Año: 2017",
            tags: ["Retratos", "Rostros", "Claroscuro"]
        },
        {
            titulo: "Sin Nombre",
            imagenes: [
                "images/proyectos/pi5.webp"
            ],
            descripcion: "Técnica: Acrílico / Tela - Medidas: 90 x 105 cm - Año: 2025",
            tags: ["Retratos", "Rostros", "Claroscuro"]
        },
        {
            titulo: "Miradas extrañas",
            imagenes: [
                "images/proyectos/pi6.webp"
            ],
            descripcion: "Técnica: Acrílico / Tela - Medidas: 55,5 x 67,5 cm - Año: 2022",
            tags: ["Retratos", "Rostros", "Claroscuro"]
        },
        {
            titulo: "Habitación",
            imagenes: [
                "images/proyectos/pi7.webp"
            ],
            descripcion: "Técnica: Acrílico/lienzo - Medidas: 100cm x 100cm - Año: 2023",
            tags: ["Retratos", "Rostros", "Claroscuro"]
        },
        {
            titulo: "Sin Nombre",
            imagenes: [
                "images/proyectos/pi8.webp"
            ],
            descripcion: "",
            tags: ["Retratos", "Rostros", "Claroscuro"]
        },
        {
            titulo: "Mujer en el Pasillo",
            imagenes: [
                "images/proyectos/pi9.webp"
            ],
            descripcion: "Técnica: Óleo / Tela - Año: 2017",
            tags: ["Retratos", "Rostros", "Claroscuro"]
        },
        {
            titulo: "Estudio de Niña",
            imagenes: [
                "images/proyectos/pi10.webp"
            ],
            descripcion: "Técnica: Acrílico / Tela - Medidas: 16 x 17 cm - Año: 2024",
            tags: ["Retratos", "Rostros", "Claroscuro"]
        },
        {
            titulo: "Estudio de Anciano",
            imagenes: [
                "images/proyectos/pi11.webp"
            ],
            descripcion: "Técnica: Acrílico / Tela - Medidas: 11 x 14 cm - Año: 2024",
            tags: ["Retratos", "Rostros", "Claroscuro"]
        },
        {
            titulo: "Estudio de mujer",
            imagenes: [
                "images/proyectos/pi12.webp"
            ],
            descripcion: "Técnica: Acrílico / Tela - Medidas: 10 x 13 cm - Año: 2024",
            tags: ["Retratos", "Rostros", "Claroscuro"]
        },
        {
            titulo: "Dama de Compañia",
            imagenes: [
                "images/proyectos/pi13.webp"
            ],
            descripcion: "Técnica: Acrílico / tela - Medidas: 150 x 100cm - Año: 2023",
            tags: ["Retratos", "Rostros", "Claroscuro"]
        },
        {
            titulo: " Habitación 1 y 2",
            imagenes: [
                "images/proyectos/pi14.1.webp",
                "images/proyectos/pi14.2.webp"
            ],
            descripcion: "Técnica: Acrílico / Tela - Medidas: 40 x 40 cm - Año: 2023",
            tags: ["Retratos", "Rostros", "Claroscuro"]
        },
    ];

    // Generar proyectos
    const gridProyectos = document.querySelector('.proyectos-grid');
    
    proyectos.forEach((proyecto, index) => {
        const card = document.createElement('div');
        card.className = 'proyecto-card';
        card.innerHTML = `
            <img src="${proyecto.imagenes[0]}" alt="${proyecto.titulo}">
            <div class="card-content">
                <h3>${proyecto.titulo}</h3>
                <p>${proyecto.descripcion}</p>
                <div class="tags">${proyecto.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
            </div>
        `;
        
        card.addEventListener('click', () => openLightbox(index));
        gridProyectos.appendChild(card);
    });

    // Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const slider = document.querySelector('.lightbox-slider');
    const indicators = document.querySelector('.lightbox-indicators');
    let currentProjectIndex = 0;
    let currentImageIndex = 0;
    let isDragging = false;
    let startPosX = 0;

    function openLightbox(projectIndex) {
        currentProjectIndex = projectIndex;
        currentImageIndex = 0;
        loadImages();
        lightbox.classList.add('active');
    }

    function loadImages() {
        const proyecto = proyectos[currentProjectIndex];
        slider.innerHTML = proyecto.imagenes.map(img => `
            <img src="${img}" alt="${proyecto.titulo}">
        `).join('');
        updateIndicators();
        updateSliderPosition();
    }

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentImageIndex * 100}%)`;
    }

    function updateIndicators() {
        indicators.innerHTML = proyectos[currentProjectIndex].imagenes
            .map((_, i) => `<span class="${i === currentImageIndex ? 'active' : ''}"></span>`)
            .join('');
    }

    function navigate(direction) {
        const total = proyectos[currentProjectIndex].imagenes.length;
        currentImageIndex = (currentImageIndex + direction + total) % total;
        updateSliderPosition();
        updateIndicators();
    }

    // Event Listeners
    document.querySelector('.lightbox-close').addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    document.querySelector('.lightbox-prev').addEventListener('click', () => navigate(-1));
    document.querySelector('.lightbox-next').addEventListener('click', () => navigate(1));

    // Drag & Touch Events
    slider.addEventListener('mousedown', dragStart);
    slider.addEventListener('touchstart', dragStart);
    slider.addEventListener('mouseup', dragEnd);
    slider.addEventListener('touchend', dragEnd);
    slider.addEventListener('mousemove', drag);
    slider.addEventListener('touchmove', drag);

    function dragStart(e) {
        isDragging = true;
        startPosX = e.clientX || e.touches[0].clientX;
        slider.style.transition = 'none';
    }

    function drag(e) {
        if (!isDragging) return;
        const currentX = e.clientX || e.touches[0].clientX;
        const deltaX = currentX - startPosX;
        slider.style.transform = `translateX(calc(-${currentImageIndex * 100}% + ${deltaX}px))`;
    }

    function dragEnd(e) {
        if (!isDragging) return;
        isDragging = false;
        
        const deltaX = (e.clientX || e.changedTouches[0].clientX) - startPosX;
        const threshold = slider.offsetWidth * 0.1;
        
        if (Math.abs(deltaX) > threshold) {
            navigate(deltaX > 0 ? -1 : 1);
        } else {
            updateSliderPosition();
        }
        slider.style.transition = 'transform 0.5s ease';
    }

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'ArrowLeft') navigate(-1);
            if (e.key === 'ArrowRight') navigate(1);
            if (e.key === 'Escape') lightbox.classList.remove('active');
        }
    });    

    
});
