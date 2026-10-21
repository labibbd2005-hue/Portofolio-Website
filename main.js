/* Renders the page from js/data.js and adds small interactions.
   You normally do not need to edit this file. */
(function () {
  document.documentElement.classList.add("js");
  const $ = (id) => document.getElementById(id);

  // Build elements safely (textContent, never innerHTML) so data can't inject markup.
  function el(tag, opts, kids) {
    const n = document.createElement(tag);
    opts = opts || {};
    if (opts.cls) n.className = opts.cls;
    if (opts.text) n.textContent = opts.text;
    if (opts.attrs) for (const k in opts.attrs) n.setAttribute(k, opts.attrs[k]);
    (kids || []).forEach((k) => n.appendChild(k));
    return n;
  }
  const slug = (s) => s.toLowerCase().replace(/[^a-z]+/g, "");
  const link = (text, url) => el("a", { text: text, attrs: { href: url, target: "_blank", rel: "noopener noreferrer" } });

  // About
  SITE.about.forEach((p) => $("about-text").appendChild(el("p", { text: p })));

  // Education
  SITE.education.forEach((e) => {
    $("edu-list").appendChild(el("dt", { text: e.label }));
    $("edu-list").appendChild(el("dd", { text: e.value }));
  });

  // Skills, grouped by category
  let lastCat = "";
  SITE.skills.forEach((s) => {
    if (s.category !== lastCat) {
      $("skills-grid").appendChild(el("h3", { cls: "cat", text: s.category }));
      lastCat = s.category;
    }
    const kids = [el("h3", { text: s.name }), el("span", { cls: "level", text: s.level })];
    if (s.note) kids.push(el("p", { text: s.note }));
    $("skills-grid").appendChild(el("article", { cls: "card reveal" }, kids));
  });

  // Projects
  SITE.projects.forEach((p) => {
    const kids = [];
    if (p.image) kids.push(el("img", { cls: "proj-img", attrs: { src: p.image, alt: p.imageAlt || p.title, loading: "lazy" } }));
    kids.push(el("h3", { text: p.title }));
    kids.push(el("span", { cls: "status " + slug(p.status), text: p.status }));
    kids.push(el("p", { text: p.description }));
    kids.push(el("ul", { cls: "tech" }, p.tech.map((t) => el("li", { text: t }))));
    const links = el("div", { cls: "links" });
    links.appendChild(p.github ? link("GitHub", p.github) : el("span", { cls: "muted", text: "GitHub: not added yet" }));
    if (p.demo) links.appendChild(link("Live demo", p.demo));
    kids.push(links);
    $("projects-grid").appendChild(el("article", { cls: "card reveal" }, kids));
  });

  // Learning journey
  SITE.journey.forEach((j) => {
    const kids = [el("strong", { text: j.title }), el("p", { text: j.detail }), el("span", { cls: "status " + slug(j.status), text: j.status })];
    if (j.link) kids.push(el("p", {}, [link("View certificate / course", j.link)]));
    $("timeline").appendChild(el("li", { cls: slug(j.status) }, kids));
  });

  SITE.interests.forEach((i) => $("interests").appendChild(el("li", { text: i })));

  // Contact: empty values render as a dashed, non-clickable placeholder
  const c = SITE.contact;
  [["Email", c.email ? "mailto:" + c.email : "", true], ["LinkedIn", c.linkedin, false], ["GitHub", c.github, false]].forEach((x) => {
    $("contact-links").appendChild(
      x[1]
        ? el("a", { cls: "btn", text: x[0], attrs: x[2] ? { href: x[1] } : { href: x[1], target: "_blank", rel: "noopener noreferrer" } })
        : el("span", { cls: "btn off", text: x[0] + ": not added yet" })
    );
  });

  $("year").textContent = new Date().getFullYear();

  // Mobile menu
  const toggle = document.querySelector(".nav-toggle"), menu = $("menu");
  function setMenu(open) {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  toggle.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  menu.addEventListener("click", (e) => { if (e.target.tagName === "A") setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  // Active nav link
  const links = menu.querySelectorAll("a");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

  // Reveal cards on scroll (fails open: unsupported browsers just show everything)
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.1 });
    items.forEach((i) => io.observe(i));
  } else items.forEach((i) => i.classList.add("in"));

  // Scroll progress along the PCB rail
  const fill = document.querySelector(".rail-fill");
  let tick = false;
  addEventListener("scroll", () => {
    if (tick) return; tick = true;
    requestAnimationFrame(() => {
      const h = document.documentElement;
      fill.style.height = Math.min(100, (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100) + "%";
      tick = false;
    });
  }, { passive: true });
})();
