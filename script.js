const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
function showPage(pageId) {
  pages.forEach(page => page.classList.remove('active'));
  navItems.forEach(item => item.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  document.querySelector(`[data-page="${pageId}"]`).classList.add('active');
}
navItems.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const pageId = this.getAttribute('data-page');
    showPage(pageId);
  });
});
showPage('skills');