const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
  window.pageYOffset > 100
    ? toTop.classList.add('active')
    : toTop.classList.remove('active');
});
