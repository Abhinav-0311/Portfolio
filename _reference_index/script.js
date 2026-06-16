const focusItems = [
  {
    title: "Clarity first",
    body:
      "The layout is built to make your profile easy to understand within seconds, with clean spacing and focused visual hierarchy.",
    tags: ["Minimal", "Readable", "Structured"],
  },
  {
    title: "Modern feel",
    body:
      "Subtle motion, soft lighting, and a lighter palette make the site feel current without drifting into clutter.",
    tags: ["Dynamic", "Elegant", "Responsive"],
  },
  {
    title: "Easy to personalize",
    body:
      "Your future edits stay simple because the cards, labels, and timeline are all managed from one file.",
    tags: ["Fast edits", "Flexible", "Vercel-ready"],
  },
];

const projectItems = [
  {
    index: "01",
    title: "Resume anchored portfolio",
    body:
      "A single-page web presence that turns a PDF resume into a cleaner, more memorable experience for recruiters and collaborators.",
    tags: ["Static site", "Portfolio", "Web"],
    linkLabel: "Open resume",
    linkHref: "./assets/Abhinav-Jain-CV.pdf",
  },
  {
    index: "02",
    title: "Project spotlight slot",
    body:
      "This card is ready for one of your best builds. Add the challenge, what you made, and the result to make it feel like a real case study.",
    tags: ["Impact", "Story", "Execution"],
    linkLabel: "Replace with project",
    linkHref: "#contact",
  },
  {
    index: "03",
    title: "Experience spotlight slot",
    body:
      "Use this area for an internship, leadership role, or hands-on experience that deserves more room than a short resume bullet.",
    tags: ["Growth", "Ownership", "Experience"],
    linkLabel: "Update this section",
    linkHref: "#journey",
  },
];

const timelineItems = [
  {
    period: "Step 01",
    title: "Strong visual foundation",
    body:
      "The portfolio now has a cleaner aesthetic and a more premium presentation style for future personalization.",
  },
  {
    period: "Step 02",
    title: "Add exact resume details",
    body:
      "Education, internships, links, and project highlights can be swapped in directly once you want the site to reflect your full profile.",
  },
  {
    period: "Step 03",
    title: "Deploy on Vercel",
    body:
      "Because the site is plain HTML, CSS, and JavaScript, deployment stays lightweight with no build setup required.",
  },
];

const rotatingLines = [
  "Thoughtful presentation.",
  "Modern minimal design.",
  "Subtle motion that matters.",
];

function renderTags(tags) {
  return tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

function renderFocus() {
  const grid = document.querySelector("#focus-grid");

  focusItems.forEach((item) => {
    const article = document.createElement("article");
    article.className = "focus-card reveal";
    article.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.body}</p>
      <div class="tag-row">${renderTags(item.tags)}</div>
    `;
    grid.appendChild(article);
  });
}

function renderProjects() {
  const grid = document.querySelector("#project-grid");

  projectItems.forEach((item) => {
    const article = document.createElement("article");
    article.className = "project-card reveal";
    article.innerHTML = `
      <div>
        <div class="project-top">
          <p class="project-index">${item.index}</p>
          <div class="tag-row">${renderTags(item.tags)}</div>
        </div>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </div>
      <a class="project-link" href="${item.linkHref}">
        <span>${item.linkLabel}</span>
        <span aria-hidden="true">-></span>
      </a>
    `;
    grid.appendChild(article);
  });
}

function renderTimeline() {
  const timeline = document.querySelector("#timeline");

  timelineItems.forEach((item) => {
    const article = document.createElement("article");
    article.className = "timeline-item reveal";
    article.innerHTML = `
      <p class="timeline-meta">${item.period}</p>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    `;
    timeline.appendChild(article);
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupRotatingLine() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const line = document.querySelector("#rotating-line");
  let index = 0;

  window.setInterval(() => {
    index = (index + 1) % rotatingLines.length;
    line.classList.add("is-switching");

    window.setTimeout(() => {
      line.textContent = rotatingLines[index];
      line.classList.remove("is-switching");
    }, 220);
  }, 2600);
}

function setupScrollProgress() {
  const progressBar = document.querySelector("#scroll-progress-bar");

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
}

function setupActiveNav() {
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".site-nav a")];

  const updateActiveLink = () => {
    const threshold = window.scrollY + 140;
    let currentId = sections[0]?.id;

    sections.forEach((section) => {
      if (section.offsetTop <= threshold) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${currentId}`);
    });
  };

  updateActiveLink();
  window.addEventListener("scroll", updateActiveLink, { passive: true });
}

function setupSpotlight() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const root = document.documentElement;

  window.addEventListener(
    "pointermove",
    (event) => {
      root.style.setProperty("--spotlight-x", `${event.clientX}px`);
      root.style.setProperty("--spotlight-y", `${event.clientY}px`);
    },
    { passive: true }
  );
}

renderFocus();
renderProjects();
renderTimeline();
setupReveal();
setupRotatingLine();
setupScrollProgress();
setupActiveNav();
setupSpotlight();
