"use client";
import { useEffect, useState } from "react";
import { home, local, type Lang } from "../lib/site";
export function Controls({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const nav = document.getElementById("nav");
    nav?.classList.toggle("open", open);
    const close = () => setOpen(false);
    nav?.addEventListener("click", close);
    return () => nav?.removeEventListener("click", close);
  }, [open]);
  function theme() {
    const root = document.documentElement;
    const current = root.dataset.theme || "dark";
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }
  return (
    <div className="header-actions">
      <a
        className="text-btn"
        href={local(home(lang === "fr" ? "en" : "fr"))}
        hrefLang={lang === "fr" ? "en" : "fr"}
        aria-label={
          lang === "fr" ? "EN — Read in English" : "FR — Lire en français"
        }
      >
        {lang === "fr" ? "EN" : "FR"}
      </a>
      <button
        className="text-btn"
        id="theme-toggle"
        onClick={theme}
        aria-label={lang === "fr" ? "Changer de thème" : "Switch theme"}
      >
        <svg
          className="theme-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2" />
        </svg>
      </button>
      <button
        className="text-btn menu-btn"
        id="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        aria-expanded={open}
        aria-controls="nav"
      >
        <span />
        <span />
      </button>
    </div>
  );
}
