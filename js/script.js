//toggle class active//
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#bars-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};