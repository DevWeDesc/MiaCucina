function getVisibleSection() {
  const sections = document.querySelectorAll('main section[id]');

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const rect = section.getBoundingClientRect();

    // Verifica se o topo do elemento está dentro da janela de visualização
    if (rect.top >= 0 && rect.top <= window.innerHeight) {
      return section;
    }
  }

  return null; // Retorna null se nenhuma seção estiver visível
}

window.addEventListener('scroll', function() {
    const visibleSection = getVisibleSection();
    const menuItems = document.querySelectorAll('nav ul li a[href^="#"]');
    
    // Remove a classe 'active' de todos os itens do menu
    menuItems.forEach(function(item) {
      item.classList.remove('active');
    });
    
    if (visibleSection) {
      const activeMenuItem = document.querySelector('nav ul li a[href="#' + visibleSection.id + '"]');
      if (activeMenuItem) {
        activeMenuItem.classList.add('active');
      }
    }
  });