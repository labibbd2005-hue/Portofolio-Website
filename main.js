
// ==========================================
// MAIN JAVASCRIPT
// Labib EEE Portfolio
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  const data = PORTFOLIO_DATA;


  // ==========================================
  // 1. HERO SECTION
  // ==========================================

  document.getElementById("hero-name").textContent =
    data.profile.name;

  document.getElementById("hero-subtitle").textContent =
    data.profile.title;

  document.getElementById("hero-tagline").textContent =
    data.profile.tagline;


  // ==========================================
  // 2. NAVIGATION
  // ==========================================

  const desktopNav = document.getElementById("desktop-nav");

  const mobileNav = document.getElementById("mobile-dropdown");

  data.nav.forEach(item => {

    const id = item.toLowerCase().replace(/\s+/g, "-");

    const link = `<a href="#${id}">${item}</a>`;

    desktopNav.insertAdjacentHTML("beforeend", link);

    mobileNav.insertAdjacentHTML("beforeend", link);

  });


  // Mobile menu

  const menuBtn = document.getElementById("mobile-menu-btn");

  menuBtn.addEventListener("click", () => {

    const isHidden = mobileNav.classList.toggle("hidden");

    menuBtn.setAttribute("aria-expanded", String(!isHidden));

  });


  mobileNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mobileNav.classList.add("hidden");

      menuBtn.setAttribute("aria-expanded", "false");

    });

  });


  // Header scroll effect

  const header = document.getElementById("site-header");

  window.addEventListener("scroll", () => {

    header.classList.toggle("scrolled", window.scrollY > 24);

  }, { passive: true });



  // ==========================================
  // 3. ABOUT SECTION
  // ==========================================

  const aboutContainer = document.getElementById("about-content");

  data.profile.about.forEach(paragraph => {

    const p = document.createElement("p");

    p.textContent = paragraph;

    aboutContainer.appendChild(p);

  });



  // ==========================================
  // 4. SKILLS SECTION
  // Technical Foundations + Working Tools
  // ==========================================

  const skillsContainer =
    document.getElementById("skills-container");


  data.skills.forEach((skillGroup, groupIndex) => {

    const card = document.createElement("div");

    card.className = "skill-group reveal";

    card.style.setProperty(
      "--card-delay",
      `${groupIndex * 120}ms`
    );


    const title = document.createElement("div");

    title.className = "skill-group-header";

    const heading = document.createElement("h3");

    heading.className = "skill-title";

    heading.textContent = skillGroup.group;

    title.appendChild(heading);


    const description = document.createElement("p");

    description.className = "skill-description";

    description.textContent = skillGroup.description || "";


    const grid = document.createElement("div");

    grid.className = "skill-chips";


    skillGroup.items.forEach((item, index) => {

      const skill = document.createElement("div");

      skill.className = "skill-item";

      skill.style.setProperty(
        "--item-delay",
        `${index * 45}ms`
      );


      const iconWrapper = document.createElement("div");

      iconWrapper.className = "skill-icon-wrapper";


      const img = document.createElement("img");

      img.className = "skill-icon";

      img.src = item.icon;

      img.alt = "";

      img.loading = "lazy";

      img.decoding = "async";


      // Fallback if external icon fails

      img.onerror = () => {

        iconWrapper.classList.add("icon-fallback");

        iconWrapper.textContent =
          item.name.substring(0, 2).toUpperCase();

      };


      iconWrapper.appendChild(img);


      const name = document.createElement("span");

      name.className = "skill-name";

      name.textContent = item.name;


      skill.appendChild(iconWrapper);

      skill.appendChild(name);

      grid.appendChild(skill);

    });


    card.appendChild(title);

    card.appendChild(description);

    card.appendChild(grid);

    skillsContainer.appendChild(card);

  });



  // ==========================================
  // 5. PROJECTS SECTION
  // ==========================================

  const projectsContainer =
    document.getElementById("projects-container");


  data.projects.forEach(project => {

    const card = document.createElement("div");

    card.className = "project-card reveal";


    const tags = project.tags.map(tag => {

      return `<span class="project-tag">${tag}</span>`;

    }).join("");


    const demoLink = project.isLive
      ? project.demoLink
      : "#";


    card.innerHTML = `

      <p class="project-category">
        ${project.category}
      </p>

      <h3 class="project-title">
        ${project.title}
      </h3>

      <p class="project-desc">
        ${project.description}
      </p>

      <div class="project-tags">
        ${tags}
      </div>

      <div class="project-links">

        <a href="${demoLink}"
           class="btn btn-primary btn-sm"
           ${project.isLive ? 'target="_blank" rel="noopener noreferrer"' : 'aria-disabled="true"'}>
          Live Demo →
        </a>

        <a href="${project.repoLink}"
           class="btn btn-ghost btn-sm"
           target="_blank"
           rel="noopener noreferrer">
          GitHub →
        </a>

      </div>

    `;

    projectsContainer.appendChild(card);

  });



  // ==========================================
  // 6. COMING SOON
  // ==========================================

  const comingSoonContainer =
    document.getElementById("coming-soon-container");


  data.comingSoon.forEach(topic => {

    const span = document.createElement("span");

    span.className = "coming-soon-tag";

    span.textContent = topic;

    comingSoonContainer.appendChild(span);

  });



  // ==========================================
  // 7. LEARNING JOURNEY
  // ==========================================

  const journeyContainer =
    document.getElementById("journey-container");


  data.journey.forEach(item => {

    const statusClass = item.status.replace(/\s+/g, "");

    const div = document.createElement("div");

    div.className = "status-item";

    div.innerHTML = `

      <span>${item.title}</span>

      <span class="status-pill status-${statusClass}">
        ${item.status}
      </span>

    `;

    journeyContainer.appendChild(div);

  });



  // ==========================================
  // 8. ACTIVITIES
  // ==========================================

  const activitiesContainer =
    document.getElementById("activities-container");


  data.activities.forEach(item => {

    const div = document.createElement("div");

    div.className = "status-item";

    div.innerHTML = `

      <span>${item.title}</span>

      <span class="status-pill status-Exploring">
        ${item.note}
      </span>

    `;

    activitiesContainer.appendChild(div);

  });



  // ==========================================
  // 9. EDUCATION
  // ==========================================

  document.getElementById("edu-degree").textContent =
    data.education.degree;

  document.getElementById("edu-inst").textContent =
    data.education.institution;

  document.getElementById("edu-status").textContent =
    data.education.status;

  document.getElementById("edu-desc").textContent =
    data.education.details;



  // ==========================================
  // 10. CONTACT
  // ==========================================

  const contactContainer =
    document.getElementById("contact-container");


  const contactItems = [

    {
      label: "Email",
      val: data.links.email.label,
      href: data.links.email.href
    },

    {
      label: "LinkedIn",
      val: data.links.linkedin.label,
      href: data.links.linkedin.href
    },

    {
      label: "GitHub",
      val: data.links.github.label,
      href: data.links.github.href
    }

  ];


  contactItems.forEach(item => {

    const a = document.createElement("a");

    a.href = item.href;

    a.className = "contact-card";

    if (!item.href.startsWith("mailto:")) {

      a.target = "_blank";

      a.rel = "noopener noreferrer";

    }


    const label = document.createElement("span");

    label.className = "contact-label";

    label.textContent = item.label;


    const value = document.createElement("span");

    value.className = "contact-value";

    value.textContent = item.val;


    a.appendChild(label);

    a.appendChild(value);

    contactContainer.appendChild(a);

  });



  // ==========================================
  // 11. FOOTER YEAR
  // ==========================================

  document.getElementById("current-year").textContent =
    new Date().getFullYear();



  // ==========================================
  // 12. SCROLL REVEAL ANIMATION
  // ==========================================

  const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;


  const revealElements = document.querySelectorAll(".reveal");


  if ("IntersectionObserver" in window && !prefersReducedMotion) {

    const observer = new IntersectionObserver((entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("is-visible");

          observer.unobserve(entry.target);

        }

      });

    }, {

      threshold: 0.12,

      rootMargin: "0px 0px -30px 0px"

    });


    revealElements.forEach(element => {

      observer.observe(element);

    });

  } else {

    revealElements.forEach(element => {

      element.classList.add("is-visible");

    });

  }



  // ==========================================
  // 13. CIRCUIT BACKGROUND PARALLAX
  // ==========================================

  const isFinePointer =
    window.matchMedia("(pointer: fine)").matches;

  const circuitSvg =
    document.getElementById("circuit-svg");


  if (isFinePointer && !prefersReducedMotion && circuitSvg) {

    let raf = 0;

    window.addEventListener("mousemove", event => {

      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {

        const x =
          (event.clientX / window.innerWidth - 0.5) * 14;

        const y =
          (event.clientY / window.innerHeight - 0.5) * 10;

        circuitSvg.style.transform =
          `translate3d(${x}px, ${y}px, 0)`;

      });

    }, { passive: true });

  }


  console.log("Labib EEE Portfolio initialized successfully.");

});
