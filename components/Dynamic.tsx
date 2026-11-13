"use client";
import { useEffect } from "react";

/** Progressive enhancement: scroll reveal, counters, progress bar, active nav. */
export function Dynamic() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const header = document.querySelector<HTMLElement>(".site-header");
    const bar = document.getElementById("scroll-progress");
    const top = document.getElementById("back-to-top");

    const onScroll = () => {
      const y = window.scrollY;
      const max = root.scrollHeight - window.innerHeight;
      header?.classList.toggle("scrolled", y > 8);
      if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      top?.classList.toggle("visible", y > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const count = (el: HTMLElement) => {
      const end = Number(el.dataset.count);
      if (reduce || !Number.isFinite(end)) return (el.textContent = String(end));
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / 1100, 1);
        el.textContent = String(Math.round(end * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    let reveal: IntersectionObserver | undefined;
    if (!reduce && "IntersectionObserver" in window) {
      root.classList.add("reveal-on");
      reveal = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            el.classList.add("revealed");
            el.querySelectorAll<HTMLElement>("[data-count]").forEach(count);
            reveal?.unobserve(el);
          }),
        { threshold: 0.15 },
      );
      targets.forEach((el, i) => {
        el.style.transitionDelay = `${(i % 4) * 80}ms`;
        reveal?.observe(el);
      });
    } else {
      document.querySelectorAll<HTMLElement>("[data-count]").forEach(count);
    }

    const links = new Map<string, HTMLAnchorElement>();
    document.querySelectorAll<HTMLAnchorElement>('.nav a[href^="#"]').forEach((a) =>
      links.set(a.getAttribute("href")!.slice(1), a),
    );
    const spy = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          links.forEach((a) => a.removeAttribute("aria-current"));
          links.get(e.target.id)?.setAttribute("aria-current", "true");
        }),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    links.forEach((_, id) => {
      const s = document.getElementById(id);
      if (s) spy.observe(s);
    });

    const art = document.querySelector<HTMLElement>(".hero-art");
    const move = (e: PointerEvent) => {
      if (!art || e.pointerType !== "mouse") return;
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      art.style.transform = `translate(${x}px, ${y}px)`;
    };
    if (!reduce) window.addEventListener("pointermove", move);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", onScroll);
      reveal?.disconnect();
      spy.disconnect();
    };
  }, []);
  return (
    <>
      <div id="scroll-progress" aria-hidden="true" />
      <a id="back-to-top" href="#top" aria-label="Top">
        ↑
      </a>
    </>
  );
}
