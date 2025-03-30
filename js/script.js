let currentProjects = []; // Añade esto al inicio de tu JS
// Preloader
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    const preloader = document.querySelector('.preloader');
    
    // Agrega la clase hidden después de 1 segundo
    setTimeout(() => {
        preloader.classList.add('hidden');
        
        // Elimina el preloader del DOM después de la animación
        preloader.addEventListener('transitionend', () => {
            preloader.remove();
        });
    }, 1500);
});

// JavaScript para clonar automáticamente
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slider-track');
    const logos = document.querySelectorAll('.logo-item');
    
    // Clonar logos
    logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        track.appendChild(clone);
    });
    
    // Reiniciar animación al finalizar
    track.addEventListener('animationiteration', () => {
        track.style.animation = 'none';
        void track.offsetWidth;
        track.style.animation = 'slide 200s linear infinite';
    });
});

// Añade este JS para manejar toques precisos
document.querySelectorAll('.logo-item').forEach(logo => {
    let isTouching = false;
    
    logo.addEventListener('touchstart', () => {
        isTouching = true;
        logo.classList.add('active');
    });
    
    logo.addEventListener('touchend', () => {
        isTouching = false;
        setTimeout(() => logo.classList.remove('active'), 200);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Datos de proyectos
    const proyectos = [
        {
            titulo: "Retrato a lapiz I",
            imagenes: [
                "images/proyectos/d1.webp"
            ],
            descripcion: "",
            tags: ["Retratos"]
        },
        {
            titulo: "Retrato a lapiz II",
            imagenes: [
                "images/proyectos/d5.webp"
            ],
            descripcion: "",
            tags: ["Retratos"]
        },
        {
            titulo: "Retrato a lapiz III",
            imagenes: [
                "images/proyectos/d9.webp"
            ],
            descripcion: "",
            tags: ["Retratos"]
        },
        {
            titulo: "Retrato a lapiz VI",
            imagenes: [
                "images/proyectos/d2.webp"
            ],
            descripcion: "",
            tags: ["Retratos"]
        },
        {
            titulo: "Retrato a lapiz V",
            imagenes: [
                "images/proyectos/d6.webp"
            ],
            descripcion: "",
            tags: ["Retratos"]
        },
        {
            titulo: "Retrato a lapiz VI",
            imagenes: [
                "images/proyectos/d4.webp"
            ],
            descripcion: "",
            tags: ["Retratos"]
        },
        {
            titulo: "La antigüedad del miedo",
            imagenes: [
                "images/proyectos/pi2.webp"
            ],
            descripcion: "Medidas:198 x 148 cm - Técnica: Acrílico / Lienzo - Año: 2024",
            tags: ["Pintura"]
        },
        {
            titulo: "En intimidad",
            imagenes: [
                "images/proyectos/pi3.webp"
            ],
            descripcion: "Medidas: 36 x 44 cm - Técnica: Acrílico / Lienzo - Año: 2017",
            tags: ["Pintura"]
        },
        {
            titulo: "La Cena",
            imagenes: [
                "images/proyectos/pi4.webp"
            ],
            descripcion: "Medidas: 110 x 138 cm - Técnica: Óleo / Tela - Año: 2017",
            tags: ["Pintura"]
        },
        {
            titulo: "La Fogata",
            imagenes: [
                "images/proyectos/pi5.webp"
            ],
            descripcion: "Técnica: Acrílico / Tela - Medidas: 90 x 105 cm - Año: 2025",
            tags: ["Pintura"]
        },
        {
            titulo: "Miradas extrañas",
            imagenes: [
                "images/proyectos/pi6.webp"
            ],
            descripcion: "Técnica: Acrílico / Tela - Medidas: 55,5 x 67,5 cm - Año: 2022",
            tags: ["Pintura"]
        },
        {
            titulo: "Habitación",
            imagenes: [
                "images/proyectos/pi7.webp"
            ],
            descripcion: "Técnica: Acrílico/lienzo - Medidas: 100cm x 100cm - Año: 2023",
            tags: ["Pintura"]
        },
        {
            titulo: "Mujer en el Pasillo",
            imagenes: [
                "images/proyectos/pi9.webp"
            ],
            descripcion: "Técnica: Óleo / Tela - Año: 2017",
            tags: ["Pintura"]
        },
        {
            titulo: "Estudio de Niña",
            imagenes: [
                "images/proyectos/pi10.webp"
            ],
            descripcion: "Técnica: Acrílico / Tela - Medidas: 16 x 17 cm - Año: 2024",
            tags: ["Pintura"]
        },
        {
            titulo: "Estudio de Anciano",
            imagenes: [
                "images/proyectos/pi11.webp"
            ],
            descripcion: "Técnica: Acrílico / Tela - Medidas: 11 x 14 cm - Año: 2024",
            tags: ["Pintura"]
        },
        {
            titulo: "Estudio de mujer",
            imagenes: [
                "images/proyectos/pi12.webp"
            ],
            descripcion: "Técnica: Acrílico / Tela - Medidas: 10 x 13 cm - Año: 2024",
            tags: ["Pintura"]
        },
        {
            titulo: "Dama de Compañia",
            imagenes: [
                "images/proyectos/pi13.webp"
            ],
            descripcion: "Técnica: Acrílico / tela - Medidas: 150 x 100cm - Año: 2023",
            tags: ["Pintura"]
        },
        {
            titulo: " Habitación 1 y 2",
            imagenes: [
                "images/proyectos/pi14.1.webp",
                "images/proyectos/pi14.2.webp"
            ],
            descripcion: "Técnica: Acrílico / Tela - Medidas: 40 x 40 cm - Año: 2023",
            tags: ["Pintura"]
        },
    ];

     generarFiltros(); // Añade esta línea después de inicializar todo
    filtrarProyectos({ target: document.querySelector('[data-tag="todos"]') }); // Mostrar todos al inicio

    // Función para generar los botones de filtro
function generarFiltros() {
    const contenedorFiltros = document.querySelector('.filtros-proyectos');
    const tagsUnicos = ['todos']; // Empezamos con el botón "Mostrar Todos"
    
    // Obtener tags únicos de todos los proyectos
    proyectos.forEach(proyecto => {
        proyecto.tags.forEach(tag => {
            if (!tagsUnicos.includes(tag.toLowerCase())) {
                tagsUnicos.push(tag.toLowerCase());
            }
        });
    });

    // Generar botones
    tagsUnicos.forEach(tag => {
        const boton = document.createElement('button');
        boton.className = `filtro-btn ${tag === 'todos' ? 'active' : ''}`;
        boton.dataset.tag = tag;
        boton.textContent = tag === 'todos'
            ? 'Mostrar Todos'
            : tag.charAt(0).toUpperCase() + tag.slice(1);
        contenedorFiltros.appendChild(boton);
    });

    // Event listeners para los botones
    document.querySelectorAll('.filtro-btn').forEach(boton => {
        boton.addEventListener('click', filtrarProyectos);
    });
}

// Función para filtrar proyectos
function filtrarProyectos(e) {
    const tag = e.target.dataset.tag;
    const grid = document.querySelector('.proyectos-grid');
    const cards = document.querySelectorAll('.proyecto-card');

    // Animación de salida
    cards.forEach(card => {
        card.classList.add('fade-out');
    });
    
    // Actualizar botones activos con transición
    document.querySelectorAll('.filtro-btn').forEach(boton => {
        boton.classList.remove('active');
    });
    e.target.classList.add('active');

    // Esperar a que termine la animación de salida
    setTimeout(() => {
        // Filtrar proyectos
        const proyectosFiltrados = tag === 'todos' 
            ? proyectos 
            : proyectos.filter(proyecto => 
                proyecto.tags.some(proyectoTag => 
                    proyectoTag.toLowerCase() === tag
                )
            );

        // Limpiar grid
        grid.innerHTML = '';

        // Generar nuevos proyectos con animación de entrada
        proyectosFiltrados.forEach((proyecto, index) => {
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
            
            card.addEventListener('click', () => openLightbox(index, proyectosFiltrados));
            
            // Agregar animación de entrada
            card.style.animation = `cardEntrance 0.5s ease ${index * 0.05}s forwards`;
            card.style.opacity = '0';
            
            grid.appendChild(card);
        });
    }, 100); // Tiempo igual a la duración de la animación de salida
}

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

    // Modifica la función openLightbox para recibir la lista filtrada
    function openLightbox(index, proyectosFiltrados = proyectos) {
    currentProjectIndex = index;
    currentProjects = proyectosFiltrados; // Nueva variable global
    currentImageIndex = 0; // <- Añade esta línea
    loadImages();
    lightbox.classList.add('active');
    }

    function loadImages() {
        const proyecto = currentProjects[currentProjectIndex]; // ← Usar currentProjects
        slider.innerHTML = proyecto.imagenes.map(img => `
            <img src="${img}" alt="${proyecto.titulo}">
        `).join('');

        // Añade estas líneas:
        currentImageIndex = 0; // Doble seguro
        slider.style.transform = 'translateX(0)'
        updateIndicators();
        updateSliderPosition();
    }

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentImageIndex * 100}%)`;
    }

    function updateIndicators() {
        indicators.innerHTML = currentProjects[currentProjectIndex].imagenes // ← currentProjects
            .map((_, i) => `<span class="${i === currentImageIndex ? 'active' : ''}"></span>`)
            .join('');
    }

    // Actualiza la navegación del lightbox para usar currentProjects
    function navigate(direction) {
        const total = currentProjects[currentProjectIndex].imagenes.length; // ← currentProjects
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
