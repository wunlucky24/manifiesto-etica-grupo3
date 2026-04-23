document.addEventListener('DOMContentLoaded', function() {
    
    // ========== MENÚ HAMBURGUESA ==========
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('navList');
    
    if (hamburger && navList) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navList.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
            });
        });
    }
    
    // ========== SCROLL SUAVE ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // ========== BOTÓN SCROLL TOP ==========
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        });
        
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // ========== HEADER CAMBIA DE FONDO ==========
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255,255,255,0.98)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'rgba(255,255,255,0.95)';
            header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        }
    });
    
    // ========== MODO OSCURO ==========
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    if (darkModeToggle) {
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    }
    
    // ========== MODAL FILÓSOFOS ==========
    const modal = document.getElementById('filosofoModal');
    const modalImg = document.getElementById('modalImg');
    const modalName = document.getElementById('modalName');
    const modalFrase = document.getElementById('modalFrase');
    const closeModal = document.querySelector('.modal-close');
    
    const filosofosData = {
        aristoteles: {
            img: 'https://i.postimg.cc/HxrM9pNx/filosofo-aristoteles.jpg',
            nombre: 'Aristóteles',
            frase: '"La excelencia es un arte que se alcanza con la práctica. La virtud es el hábito de elegir el justo medio."'
        },
        socrates: {
            img: 'https://i.postimg.cc/hjXm1SYP/filosofo-socrates.jpg',
            nombre: 'Sócrates',
            frase: '"Solo sé que nada sé, y eso me hace más sabio que aquellos que creen saberlo todo."'
        },
        kant: {
            img: 'https://i.postimg.cc/vB4ntQKZ/filosofo-kant.jpg',
            nombre: 'Immanuel Kant',
            frase: '"Obra de tal modo que uses la humanidad, tanto en tu persona como en la persona de cualquier otro, siempre como un fin y nunca solo como un medio."'
        },
        mill: {
            img: 'https://i.postimg.cc/Ssn9fyPQ/filosofo-mill.jpg',
            nombre: 'John Stuart Mill',
            frase: '"Es mejor ser un ser humano insatisfecho que un cerdo satisfecho; mejor ser Sócrates insatisfecho que un necio satisfecho."'
        },
        sartre: {
            img: 'https://i.postimg.cc/LXJP3HW5/filosofo-sartre.jpg',
            nombre: 'Jean-Paul Sartre',
            frase: '"El hombre está condenado a ser libre. Porque una vez arrojado al mundo, es responsable de todo lo que hace."'
        },
        arendt: {
            img: 'https://i.postimg.cc/9MD9YWkz/filosofo-arentd.jpg',
            nombre: 'Hannah Arendt',
            frase: '"El pensamiento es la actividad más política que existe, porque sin pensamiento no hay juicio, y sin juicio no hay acción responsable."'
        },
        estoico: {
            img: 'https://i.postimg.cc/6QjRZ7MQ/filosofo-marcoaurelio.jpg',
            nombre: 'Marco Aurelio',
            frase: '"Tienes poder sobre tu mente, no sobre los eventos externos. Comprende esto y encontrarás la fuerza."'
        }
    };
    
    const filosofoCards = document.querySelectorAll('.filosofo-card');
    
    filosofoCards.forEach(card => {
        card.addEventListener('click', () => {
            const filosofoKey = card.getAttribute('data-filosofo');
            const data = filosofosData[filosofoKey];
            
            if (data) {
                modalImg.src = data.img;
                modalName.textContent = data.nombre;
                modalFrase.textContent = data.frase;
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // ========== PIRÁMIDE DE VALORES INTERACTIVA ==========
    const valueRows = document.querySelectorAll('.value-row');
    
    valueRows.forEach(row => {
        row.addEventListener('click', () => {
            valueRows.forEach(r => r.classList.remove('expanded'));
            row.classList.add('expanded');
        });
    });
    
    // ========== CARRUSEL DE IMÁGENES ==========
    const slides = document.querySelector('.carousel-slides');
    const slidesCount = document.querySelectorAll('.carousel-slide').length;
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    let currentIndex = 0;
    
    if (slides && slidesCount > 0) {
        // Crear dots
        for (let i = 0; i < slidesCount; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
        
        function goToSlide(index) {
            if (index < 0) index = slidesCount - 1;
            if (index >= slidesCount) index = 0;
            currentIndex = index;
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            document.querySelectorAll('.dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        }
        
        if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
        if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
        
        // Auto slide cada 5 segundos
        setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000);
    }
    
    // ========== TEST INTERACTIVO ==========
    const questions = document.querySelectorAll('.test-question');
    const testResult = document.querySelector('.test-result');
    const restartBtn = document.getElementById('restartTest');
    let currentQuestion = 0;
    let userAnswers = [];
    
    function showQuestion(index) {
        questions.forEach((q, i) => {
            q.classList.toggle('active', i === index);
        });
    }
    
    function calculateResult() {
        let score = 0;
        userAnswers.forEach(answer => {
            if (answer === 'b') score++;
        });
        
        const resultText = document.getElementById('testResultText');
        if (score === 3) {
            resultText.innerHTML = '🎉 ¡Excelente! Tienes un fuerte sentido ético profesional. Tomas decisiones basadas en principios y valores. ¡Sigue así! 🌟';
        } else if (score === 2) {
            resultText.innerHTML = '👍 ¡Bien! Tienes buen criterio ético, pero aún puedes fortalecer tu compromiso con la integridad profesional. ¡Sigue aprendiendo! 📚';
        } else {
            resultText.innerHTML = '⚠️ Necesitas reflexionar más sobre ética profesional. Recuerda que nuestra responsabilidad es ante todo con las personas y la verdad. ¡Revisa el manifiesto! 💪';
        }
        
        questions.forEach(q => q.classList.remove('active'));
        testResult.style.display = 'block';
    }
    
    function setupTest() {
        const options = document.querySelectorAll('.test-option');
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                const questionDiv = option.closest('.test-question');
                const qIndex = parseInt(questionDiv.getAttribute('data-q')) - 1;
                const value = option.getAttribute('data-value');
                
                userAnswers[qIndex] = value;
                
                if (currentQuestion < questions.length - 1) {
                    currentQuestion++;
                    showQuestion(currentQuestion);
                } else {
                    calculateResult();
                }
            });
        });
    }
    
    if (questions.length > 0) {
        setupTest();
        showQuestion(0);
    }
    
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            currentQuestion = 0;
            userAnswers = [];
            testResult.style.display = 'none';
            showQuestion(0);
        });
    }
    
    // ========== ANIMACIONES AL SCROLL ==========
    const animateElements = document.querySelectorAll('.metaphor-card, .purpose-card, .vulnerable-card, .filosofo-card, .negligence-card, .recurso-card, .equipo-card, .value-row, .flip-card, .timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'explodeIn 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
    // ========== CONTADOR DE ESTADÍSTICAS ==========
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateNumber(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 25);
    }
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    const number = parseInt(text);
                    if (!isNaN(number)) {
                        stat.textContent = '0';
                        animateNumber(stat, number);
                    }
                });
                statsObserver.disconnect();
            }
        });
    }, { threshold: 0.5 });
    
    if (statNumbers.length > 0) {
        const heroStats = document.querySelector('.hero-stats');
        if (heroStats) statsObserver.observe(heroStats);
    }
    
    // ========== LOG EN CONSOLA ==========
    console.log('✅ Manifiesto de Identidad Ética - Grupo 3 cargado correctamente');
    console.log('👥 Integrantes: 6 con fotos reales');
    console.log('📚 AC1, AC2, AC3, AC4 completados');
    console.log('🎨 Filósofos: 7 con imágenes de PostImage');
    console.log('🌓 Modo oscuro/claro activado');
    console.log('🃏 Tarjetas FLIP 3D activadas');
    console.log('🎠 Carrusel de imágenes funcionando');
    console.log('📝 Test interactivo listo');
    console.log('💥 Animaciones explosivas activadas');
});