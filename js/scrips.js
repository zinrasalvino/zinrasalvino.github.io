document.addEventListener('DOMContentLoaded', function () {
    console.log("Portfólio de Zinrã Salvino carregado com sucesso.");

    /* ─────────────────────────────────────────
       THEME TOGGLE
    ───────────────────────────────────────── */
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    const ICON_SUN  = '<i class="fas fa-sun"></i>';
    const ICON_MOON = '<i class="fas fa-moon"></i>';

    // Carrega preferência salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.replace('dark-mode', 'light-mode');
        themeToggle.innerHTML = ICON_MOON;
    } else {
        themeToggle.innerHTML = ICON_SUN;
    }

    // Troca ao clicar
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.replace('dark-mode', 'light-mode');
            themeToggle.innerHTML = ICON_MOON;
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.replace('light-mode', 'dark-mode');
            themeToggle.innerHTML = ICON_SUN;
            localStorage.setItem('theme', 'dark');
        }
    });

    /* ─────────────────────────────────────────
       ANIMAÇÃO DE ENTRADA DAS SEÇÕES (FADE-IN NO SCROLL)
    ───────────────────────────────────────── */
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

    /* ─────────────────────────────────────────
       NAV LINK ATIVO NO SCROLL
    ───────────────────────────────────────── */
    const navLinks = document.querySelectorAll('.nav-link');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, {
        threshold: 0.4
    });

    sections.forEach(section => navObserver.observe(section));
});
