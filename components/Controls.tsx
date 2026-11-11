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
    const current =
      root.dataset.theme ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
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
        <span aria-hidden="true">◐</span>
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
