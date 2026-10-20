const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 28), { passive: true });
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const hero = document.querySelector('.hero');
const circuit = document.querySelector('.hero-circuit');
if (matchMedia('(pointer:fine)').matches) {
  hero.addEventListener('pointermove', event => {
    const x = (event.clientX / innerWidth - .5) * 10;
    const y = (event.clientY / innerHeight - .5) * 7;
    circuit.style.transform = `translate(${x}px, ${y}px)`;
  });
  hero.addEventListener('pointerleave', () => circuit.style.transform = 'translate(0, 0)');
}
