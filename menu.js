document.addEventListener('DOMContentLoaded', () => {
  const btnMenuWrap = document.getElementById('btn-menu');
  const menuMobile = document.getElementById('menu-mobile');
  const overlay = document.getElementById('overlay-menu');

  if (!menuMobile) return; // nothing to do

  const btnOpen = btnMenuWrap ? btnMenuWrap.querySelector('button') || btnMenuWrap : null;
  const btnClose = menuMobile.querySelector('.btn-fechar button');

  function openMenu() {
    menuMobile.classList.add('abrir-menu');
    // rely on CSS sibling selector to show overlay (.menu-mobile.abrir-menu ~ .overlay-menu)
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuMobile.classList.remove('abrir-menu');
    document.body.style.overflow = '';
  }

  if (btnOpen) btnOpen.addEventListener('click', (e) => { e.preventDefault(); openMenu(); });
  if (btnClose) btnClose.addEventListener('click', (e) => { e.preventDefault(); closeMenu(); });
  if (overlay) overlay.addEventListener('click', closeMenu);

  // Close when pressing Escape
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

  // Close when clicking any link inside the mobile nav
  menuMobile.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
});
