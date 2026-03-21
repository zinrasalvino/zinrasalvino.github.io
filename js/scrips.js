document.addEventListener('DOMContentLoaded', function() {
    console.log("Portfólio de Zinrã Salvino carregado com sucesso.");

    // --- Animação de Entrada das Seções (Fade-In no Scroll) --- //
    const sections = document.querySelectorAll('section');
    
    if (sections.length > 0) {
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15 // Ativa quando 15% da seção aparece
        });
        
        sections.forEach(section => {
            section.classList.add('section-hidden');
            sectionObserver.observe(section);
        });
    }
});
