document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const sidemenu = document.querySelector('.sidemenu');
    const sidemenuClose = document.querySelector('.sidemenu-close');
    const overlay = document.querySelector('.overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    
    // Open menu
    menuToggle.addEventListener('click', function() {
        sidemenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });
    
    // Close menu functions
    function closeMenu() {
        sidemenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }
    
    sidemenuClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    
    // Close menu when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
            
            // Smooth scroll to section (existing functionality)
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                setTimeout(() => {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }, 300); // Small delay to allow menu to close first
            }
        });
    });

    // Existing smooth scrolling for desktop
    document.querySelectorAll('.desktop-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission to WhatsApp
    const form = document.getElementById('formulario-musica');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const ocasiao = document.getElementById('ocasiao').value;
        const historia = document.getElementById('historia').value;
        const referencia = document.getElementById('referencia').value;
        
        // Format the message for WhatsApp
        let message = `*Nova Encomenda de Música - Som de Afeto*%0A%0A`;
        message += `*Nome:* ${nome}%0A`;
        message += `*Email:* ${email}%0A`;
        message += `*Ocasião:* ${ocasiao}%0A%0A`;
        message += `*História para a música:*%0A${historia}%0A%0A`;
        message += `*Referência musical:* ${referencia}%0A%0A`;
        
        // Open WhatsApp with the formatted message
        window.open(`https://wa.me/5521984623153?text=${message}`, '_blank');
    });

    // Add animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.passo, .depoimento, .preco-card, .sobre-content, .imagem');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };

    // Add CSS class for animation
    const style = document.createElement('style');
    style.innerHTML = `
        .passo, .depoimento, .preco-card, .sobre-content, .imagem {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});