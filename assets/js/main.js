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
    "nav.process": "Approach",
    "nav.stack": "Tools",
    "nav.about": "About",
    "nav.contact": "Contact me",
    "hero.prompt": "development · web · blockchain",
    "hero.title1": "Code that",
    "hero.title2": "moves forward.",
    "hero.lead": "I'm Maryem Hadj Wannes, a full-stack developer. With Codiva, I build web applications, custom software and blockchain solutions — one single point of contact, from specifications to launch.",
    "hero.cta1": "Start a project",
    "hero.cta2": "See the approach",
    "meta.status.k": "Status",
    "meta.status.v": "Available",
    "meta.reply.k": "Reply",
    "meta.reply.v": "Within 48 h",
    "meta.quote.k": "Quote",
    "meta.quote.v": "Free",
    "meta.lang.k": "Languages",
    "services.title": "What I build",
    "services.web.title": "Web applications",
    "services.web.text": "Fast, polished interfaces designed around your users and easy to evolve.",
    "services.web.items": "Showcase sites · SaaS platforms · Dashboards · E-commerce",
    "services.software.title": "Custom software",
    "services.software.text": "Tools that fit the way you work, instead of bending your work to generic software.",
    "services.software.items": "Business tools · APIs · Automation · Integrations",
    "services.blockchain.title": "Blockchain solutions",
    "services.blockchain.text": "Secure smart contracts and decentralized applications, from prototype to production.",
    "services.blockchain.items": "Smart contracts · dApps · Tokens · Web3 integration",
    "process.title": "From need to launch",
    "process.s1.cmd": "analysis",
    "process.s2.cmd": "design",
    "process.s3.cmd": "development",
    "process.s4.cmd": "go-live",
    "process.s1.title": "Understand",
    "process.s1.text": "We discuss goals, users and constraints. You leave with a clear, free quote.",
    "process.s2.title": "Design",
    "process.s2.text": "Architecture, mockups, technical choices: tailored to your project and budget.",
    "process.s3.title": "Build",
    "process.s3.text": "Regular deliveries: you watch the project move forward and approve each step.",
    "process.s4.title": "Ship & support",
    "process.s4.text": "Testing, deployment and maintenance, for a solution that stays reliable over time.",
    "stack.title": "My tools",
    "stack.tools": "Data & DevOps",
    "projects.title": "Work",
    "ticket.label": "PROJECT",
    "ticket.client.k": "Client",
    "ticket.client.v": "You?",
    "ticket.status.k": "Status",
    "ticket.status.v": "Slot available",
    "ticket.start.k": "Start",
    "ticket.start.v": "Right now",
    "ticket.focus.k": "Attention",
    "ticket.focus.v": "100% dedicated",
    "ticket.note": "Codiva is just starting: the first case studies are on their way. The first project gets my full attention.",
    "ticket.cta": "Claim this number",
    "ticket.github": "My GitHub",
    "about.title": "About",
    "about.quote": "A project delivered, not a promise.",
    "about.role": "Full-stack developer · Blockchain · Founder of Codiva",
    "about.p1": "I founded Codiva to support companies, startups and entrepreneurs who want a reliable technical partner — not an agency where you get lost between contacts.",
    "about.p2": "My rule: understand your needs before writing a single line of code, deliver clean and documented work, and stay around after launch.",
    "about.v1": "One single contact, start to finish",
    "about.v2": "Clean, tested, documented code",
    "about.v3": "Deadlines met, transparent communication",
    "contact.title": "Let's talk about your project.",
    "contact.text": "A few lines are enough. I'll reply within 48 hours with a first estimate, free and with no commitment.",
    "form.name": "name",
    "form.email": "email",
    "form.type": "project type",
    "form.type.web": "Web application",
    "form.type.software": "Custom software",
    "form.type.blockchain": "Blockchain solution",
    "form.type.other": "Other",
    "form.budget": "budget",
    "form.budget.unknown": "Let's define it together",
    "form.message": "your project",
    "form.submit": "Send",
    "footer.tag": "Development · Web · Blockchain",
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

  // ---------- En-tête : filet au défilement ----------
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ---------- Animation au défilement ----------
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".service, .pipeline, .stack-col, .ticket, .quote, .about-body, .contact-inner").forEach(function (el) {
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
