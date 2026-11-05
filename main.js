// Interactive Functionality and Rendering for Md Fokrul Alam Labib Portfolio

document.addEventListener("DOMContentLoaded", () => {
  const data = PORTFOLIO_DATA;

  // 1. Populate Hero Content
  document.getElementById("hero-name").textContent = data.profile.name;
  document.getElementById("hero-subtitle").textContent = data.profile.title;
  document.getElementById("hero-tagline").textContent = data.profile.tagline;

  // 2. Navigation
  const desktopNav = document.getElementById("desktop-nav");
  const mobileNav = document.getElementById("mobile-dropdown");
  data.nav.forEach(item => {
    const id = item.toLowerCase();
    const link = `<a href="#${id}">${item}</a>`;
    desktopNav.insertAdjacentHTML("beforeend", link);
    mobileNav.insertAdjacentHTML("beforeend", link);
  });

  // Mobile menu toggle
  const menuBtn = document.getElementById("mobile-menu-btn");
  menuBtn.addEventListener("click", () => {
    const isHidden = mobileNav.classList.toggle("hidden");
    menuBtn.setAttribute("aria-expanded", !isHidden);
  });

  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobileNav.classList.add("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Header scroll shadow
  const header = document.getElementById("site-header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 24);
  }, { passive: true });

  // 3. About Section
  const aboutContainer = document.getElementById("about-content");
  data.profile.about.forEach(paragraph => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    aboutContainer.appendChild(p);
  });

  // 4. Skills Section
  const skillsContainer = document.getElementById("skills-container");
  data.skills.forEach(skillGroup => {
    const card = document.createElement("div");
    card.className = "skill-group reveal";
    card.innerHTML = `
      <h3 class="skill-title">${skillGroup.group}</h3>
      <div class="skill-chips">
        ${skillGroup.items.map(item => `<span class="chip">${item}</span>`).join("")}
      </div>
    `;
    skillsContainer.appendChild(card);
  });

  // 5. Projects Section
  const projectsContainer = document.getElementById("projects-container");
  data.projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card reveal";
    card.innerHTML = `
      <p class="project-category">${project.category}</p>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-desc">${project.description}</p>
      <div class="project-tags">
        ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
      </div>
      <div class="project-links">
        <a href="${project.demoLink}" class="btn btn-primary btn-sm">
          Live Demo <span class="placeholder-badge">Placeholder</span>
        </a>
        <a href="${project.repoLink}" class="btn btn-ghost btn-sm">
          GitHub Repo <span class="placeholder-badge">Placeholder</span>
        </a>
      </div>
    `;
    projectsContainer.appendChild(card);
  });

  // Coming Soon Tags
  const comingSoonContainer = document.getElementById("coming-soon-container");
  data.comingSoon.forEach(topic => {
    const span = document.createElement("span");
    span.className = "coming-soon-tag";
    span.textContent = topic;
    comingSoonContainer.appendChild(span);
  });

  // 6. Journey Section
  const journeyContainer = document.getElementById("journey-container");
  data.journey.forEach(item => {
    const statusClass = item.status.replace(/\s+/g, "");
    const div = document.createElement("div");
    div.className = "status-item";
    div.innerHTML = `
      <span>${item.title}</span>
      <span class="status-pill status-${statusClass}">${item.status}</span>
    `;
    journeyContainer.appendChild(div);
  });

  // Activities Section
  const activitiesContainer = document.getElementById("activities-container");
  data.activities.forEach(item => {
    const div = document.createElement("div");
    div.className = "status-item";
    div.innerHTML = `
      <span>${item.title}</span>
      <span class="status-pill status-Exploring">${item.note}</span>
    `;
    activitiesContainer.appendChild(div);
  });

  // 7. Education Section
  document.getElementById("edu-degree").textContent = data.education.degree;
  document.getElementById("edu-inst").textContent = data.education.institution;
  document.getElementById("edu-status").textContent = data.education.status;
  document.getElementById("edu-desc").textContent = data.education.details;

  // 8. Contact Section
  const contactContainer = document.getElementById("contact-container");
  const contactItems = [
    { label: "Email", val: data.links.email.label, href: data.links.email.href },
    { label: "LinkedIn", val: data.links.linkedin.label, href: data.links.linkedin.href },
    { label: "GitHub", val: data.links.github.label, href: data.links.github.href }
  ];

  contactItems.forEach(item => {
    const a = document.createElement("a");
    a.href = item.href;
    a.className = "contact-card";
    a.innerHTML = `
      <span class="contact-label">${item.label}</span>
      <span class="contact-value">${item.val} <span class="placeholder-badge">Placeholder</span></span>
    `;
    contactContainer.appendChild(a);
  });

  // Footer Year
  document.getElementById("current-year").textContent = new Date().getFullYear();

  // Scroll Reveal Animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // Mouse Parallax for circuit backdrop (desktop fine pointers only)
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const circuitSvg = document.getElementById("circuit-svg");

  if (isFinePointer && !prefersReduced && circuitSvg) {
    let raf = 0;
    window.addEventListener("mousemove", (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 14;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        circuitSvg.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    }, { passive: true });
  }
});
