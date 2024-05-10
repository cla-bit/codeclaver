document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('navbar_toggle');
  const menuList = document.querySelector('.menu_ul_items');
  const overlay = document.getElementById('overlay');
  
  menuToggle.addEventListener('click', toggleMenu);
  
  function toggleMenu() {
    menuList.classList.toggle('active');
    overlay.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', menuList.classList.contains('active'));
    const menuIcon = menuToggle.querySelector('.material-icons');
    menuIcon.textContent = menuList.classList.contains('active') ? 'close' : 'menu';
    menuIcon.style.color = menuList.classList.contains('active') ? 'white' : '';
  }

});
