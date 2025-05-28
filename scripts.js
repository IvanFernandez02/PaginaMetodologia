document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll para enlaces de navegación
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            const nav = document.querySelector('header nav');
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });

    // Menú móvil
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const nav = document.querySelector('header nav');
    if (mobileMenuButton && nav) {
        mobileMenuButton.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Toggle para información adicional en "Conceptos Clave"
    const toggleButtons = document.querySelectorAll('.toggle-info-btn');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const infoAdicional = button.nextElementSibling;
            const isExpanded = button.getAttribute('aria-expanded') === 'true' || false;
            button.setAttribute('aria-expanded', !isExpanded);
            infoAdicional.classList.toggle('visible');
            button.textContent = infoAdicional.classList.contains('visible') ? 'Leer menos' : 'Leer más';
        });
    });

    // Modal "Pregúntale a la IA"
    const askAiBtn = document.getElementById('ask-ai-btn');
    const aiModal = document.getElementById('ai-modal');
    const closeBtn = aiModal.querySelector('.close-btn');
    const submitAiQuestionBtn = document.getElementById('submit-ai-question-btn');
    const aiResponse = document.getElementById('ai-response');
    const aiQuestionTextarea = document.getElementById('ai-question');

    if (askAiBtn) {
        askAiBtn.addEventListener('click', () => {
            aiModal.style.display = 'block';
        });
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            aiModal.style.display = 'none';
            aiResponse.textContent = '';
            aiQuestionTextarea.value = '';
        });
    }
    window.addEventListener('click', (event) => {
        if (event.target === aiModal) {
            aiModal.style.display = 'none';
            aiResponse.textContent = '';
            aiQuestionTextarea.value = '';
        }
    });
    if (submitAiQuestionBtn) {
        submitAiQuestionBtn.addEventListener('click', () => {
            const question = aiQuestionTextarea.value;
            if (question.trim() === "") {
                aiResponse.textContent = 'Por favor, escribe una pregunta.';
                aiResponse.className = 'feedback incorrecta';
                return;
            }
            aiResponse.textContent = `Gracias por tu pregunta: "${question}". Esta version esta en Proceso... Por ahora, te recomendamos explorar los artículos en la sección "Explora Más".`;
            aiResponse.className = 'feedback correcta';
        });
    }
});