document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const sidemenu = document.querySelector('.sidemenu');
  const overlay = document.querySelector('.overlay');
  const sidemenuClose = document.querySelector('.sidemenu-close');
  
  if (menuToggle && sidemenu && overlay && sidemenuClose) {
    menuToggle.addEventListener('click', function() {
      sidemenu.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    function closeMenu() {
      sidemenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
    
    sidemenuClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
  }
  
  // Form submission to WhatsApp
  const form = document.getElementById('formulario-musica');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const ocasiao = document.getElementById('ocasiao').value;
      const historia = document.getElementById('historia').value;
      const referencia = document.getElementById('referencia').value;
      
      const message = `*Nova Solicitação de Música Personalizada*%0A%0A*Nome:* ${nome}%0A*Email:* ${email}%0A*Ocasião:* ${ocasiao}%0A*História:* ${historia}%0A*Referência:* ${referencia}`;
      
      window.open(`https://wa.me/5521984623153?text=${message}`, '_blank');
    });
  }
});