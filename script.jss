  const isOpen = navPanel.classList.toggle('open');
  menuButton.setAttribute('aria-expconst menuButton = document.querySelector('.menu-button');
const navPanel = document.querySelector('.nav-panel');
const navLinks = document.querySelectorAll('.nav-link');

menuButton.addEventListener('click', () => {anded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  navPanel.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
}));

const sections = document.querySelectorAll('main section[id]');
const activateLink = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
sections.forEach((section) => activateLink.observe(section));

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealItems = document.querySelectorAll('.reveal');
  const reveal = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.1 });
  revealItems.forEach((item) => reveal.observe(item));
} else document.querySelectorAll('.reveal').forEach((item) => item.classList.add('visible'));

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = document.querySelector('#form-status');
  if (!form.checkValidity()) {
    status.textContent = 'Please complete all fields with a valid email address.';
    form.reportValidity();
    return;
  }
  status.textContent = 'Thanks for your message. This demo form has no email backend connected yet.';
});
