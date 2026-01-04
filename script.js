const menuToggle=document.getElementById('menu-toggle'),navLinks=document.getElementById('nav-links'),navbar=document.getElementById('navbar');if(menuToggle&&navLinks){menuToggle.addEventListener('click',(e)=>{e.stopPropagation();navLinks.classList.toggle('active');updateNavbarPosition()});document.addEventListener('click',(e)=>{if(!navLinks.contains(e.target)&&!menuToggle.contains(e.target)){navLinks.classList.remove('active');updateNavbarPosition()}})}function updateNavbarPosition(){if(navbar){if(navLinks.classList.contains('active')){navbar.style.position='relative';navbar.style.top='auto'}else{navbar.style.position='sticky';navbar.style.top='0'}}}

// Dropdown toggle for desktop and mobile
const dropbtns = document.querySelectorAll('.dropbtn');
dropbtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdown = btn.parentElement;
    dropdown.classList.toggle('active');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown.active').forEach(d => d.classList.remove('active'));
  }
});
