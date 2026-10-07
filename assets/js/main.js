(function () {
  "use strict";

  var config = window.CODIVA_CONFIG || {};
  var root = document.documentElement;

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { return null; }
  }

  // ---------- Traductions (le français est dans le HTML) ----------
  var EN = {
    "skip": "Skip to content",
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.stack": "Skills",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact me",
    "hero.badge": "Available for new projects",
    "hero.title1": "Your idea,",
    "hero.title2": "from requirements to launch.",
    "hero.lead": "I'm Maryem Hadj Wannes, a freelance fullstack developer. With Codiva, I design and build web applications, custom software and blockchain solutions.",
    "hero.cta1": "Let's talk about your project",
    "hero.cta2": "See my services",
    "services.eyebrow": "Services",
    "services.title": "What I can do for you",
    "services.web.title": "Web applications",
    "services.web.text": "Showcase sites, SaaS platforms, dashboards, e-commerce: fast, responsive applications designed around your users.",
    "services.software.title": "Custom software",
    "services.software.text": "Business tools, APIs, automations and integrations: software that fits the way you work and is easy to evolve.",
    "services.blockchain.title": "Blockchain solutions",
    "services.blockchain.text": "Smart contracts, dApps, tokens and Web3 integration: secure decentralized solutions, from prototype to production.",
    "process.eyebrow": "Process",
    "process.title": "End-to-end support",
    "process.s1.title": "Requirements analysis",
    "process.s1.text": "We discuss your goals, users and constraints. You get a clear, free quote.",
    "process.s2.title": "Design",
    "process.s2.text": "Technical architecture, mockups and the right technologies for your project and budget.",
    "process.s3.title": "Development",
    "process.s3.text": "Iterative development with regular check-ins: you follow progress and approve each step.",
    "process.s4.title": "Launch & support",
    "process.s4.text": "Testing, deployment, go-live and maintenance so your solution stays reliable over time.",
    "stack.eyebrow": "Skills",
    "stack.title": "My tech stack",
    "stack.tools": "Data & tools",
    "projects.eyebrow": "Projects",
    "projects.title": "Work",
    "projects.launch.title": "Codiva is launching 🚀",
    "projects.launch.text": "The first client projects are coming soon. Yours could be the first: enjoy 100% dedicated attention and close follow-up.",
    "projects.launch.cta": "Start a project",
    "projects.launch.github": "See my GitHub",
    "about.eyebrow": "About",
    "about.role": "Fullstack & Blockchain Developer · Founder of Codiva",
    "about.p1": "Passionate about development, I founded Codiva to help companies, startups and entrepreneurs bring their digital ideas to life.",
    "about.p2": "My approach: understand your needs before writing a single line of code, deliver clean and documented work, and stay available after launch.",
    "about.v1": "✔ One single point of contact, start to finish",
    "about.v2": "✔ Clean, tested and documented code",
    "about.v3": "✔ Transparent communication and deadlines met",
    "contact.eyebrow": "Contact",
    "contact.title": "Got a project in mind?",
    "contact.text": "Tell me about your needs in a few lines. I'll reply within 48 hours with a first estimate, free and with no commitment.",
    "contact.email": "Email",
    "form.name": "Name *",
    "form.email": "Email *",
    "form.type": "Project type",
    "form.type.web": "Web application",
    "form.type.software": "Custom software",
    "form.type.blockchain": "Blockchain solution",
    "form.type.other": "Other",
    "form.budget": "Estimated budget",
    "form.budget.unknown": "Not sure yet",
    "form.message": "Your project *",
    "form.submit": "Send my request",
    "footer.legal": "Legal notice",
    "legal.back": "← Back to home"
  };

  var MSG = {
    fr: {
      required: "Merci de remplir les champs obligatoires.",
      email: "L'adresse email semble invalide.",
      sending: "Envoi en cours…",
      ok: "Merci ! Votre message a bien été envoyé, je vous réponds très vite.",
      err: "Oups, l'envoi a échoué. Vous pouvez m'écrire directement à ",
      mailto: "Votre messagerie va s'ouvrir avec le message pré-rempli."
    },
    en: {
      required: "Please fill in the required fields.",
      email: "The email address looks invalid.",
      sending: "Sending…",
      ok: "Thank you! Your message has been sent, I'll get back to you soon.",
      err: "Oops, sending failed. You can email me directly at ",
      mailto: "Your email app will open with the message pre-filled."
    }
  };

  var FR = {};
  var nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach(function (el) { FR[el.dataset.i18n] = el.textContent; });

  var lang = store("lang") === "en" ? "en" : "fr";
  var langBtn = document.getElementById("lang-toggle");

  function applyLang(l) {
    lang = l;
    var dict = l === "en" ? EN : FR;
    nodes.forEach(function (el) {
      var v = dict[el.dataset.i18n];
      if (v) el.textContent = v;
    });
    root.lang = l;
    if (langBtn) {
      langBtn.textContent = l === "en" ? "FR" : "EN";
      langBtn.setAttribute("aria-label", l === "en" ? "Passer en français" : "Switch to English");
    }
  }
  if (lang === "en") applyLang("en");
  if (langBtn) langBtn.addEventListener("click", function () {
    applyLang(lang === "en" ? "fr" : "en");
    store("lang", lang);
  });

  // ---------- Thème clair / sombre ----------
  var themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) themeBtn.addEventListener("click", function () {
    var current = root.dataset.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    store("theme", next);
  });

  // ---------- Menu mobile ----------
  var menuBtn = document.getElementById("menu-toggle");
  var nav = document.getElementById("nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ---------- Liens configurables ----------
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  var emailLink = document.getElementById("link-email");
  if (emailLink && config.email) emailLink.href = "mailto:" + config.email;
  var liLink = document.getElementById("link-linkedin");
  if (liLink && config.linkedin) liLink.href = config.linkedin;
  document.querySelectorAll("[data-config]").forEach(function (el) {
    var v = config[el.dataset.config];
    if (!v) return;
    el.textContent = v;
    if (el.tagName === "A" && el.dataset.config === "email") el.href = "mailto:" + v;
  });

  // ---------- Animation au défilement ----------
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".card, .step, .stack-group, .launch-card, .about, .form").forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  // ---------- Formulaire de contact ----------
  var form = document.getElementById("contact-form");
  if (!form) return;
  var status = document.getElementById("form-status");

  function setStatus(text, kind) {
    status.textContent = text;
    status.className = "form-status" + (kind ? " " + kind : "");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var m = MSG[lang];
    var data = new FormData(form);
    if (data.get("_gotcha")) return; // robot

    var invalid = false;
    ["name", "email", "message"].forEach(function (id) {
      var el = form.elements[id];
      var bad = !el.value.trim();
      el.classList.toggle("invalid", bad);
      invalid = invalid || bad;
    });
    if (invalid) return setStatus(m.required, "err");
    if (!form.elements.email.checkValidity()) {
      form.elements.email.classList.add("invalid");
      return setStatus(m.email, "err");
    }

    // Pas de service configuré : on ouvre la messagerie du visiteur
    if (!config.formEndpoint) {
      var body = [
        "Nom : " + data.get("name"),
        "Email : " + data.get("email"),
        "Type de projet : " + data.get("type"),
        "Budget : " + data.get("budget"),
        "",
        data.get("message")
      ].join("\n");
      window.location.href = "mailto:" + config.email +
        "?subject=" + encodeURIComponent("Nouveau projet — " + data.get("name")) +
        "&body=" + encodeURIComponent(body);
      return setStatus(m.mailto, "ok");
    }

    var btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    setStatus(m.sending);
    fetch(config.formEndpoint, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    }).then(function (res) {
      if (!res.ok) throw new Error(res.status);
      form.reset();
      setStatus(m.ok, "ok");
    }).catch(function () {
      setStatus(m.err + config.email, "err");
    }).finally(function () {
      btn.disabled = false;
    });
  });
})();
