"use client";
import { useEffect, useState } from "react";
export function Rotator({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [swap, setSwap] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setSwap(true);
      setTimeout(() => {
        setI((n) => (n + 1) % words.length);
        setSwap(false);
      }, 300);
    }, 2600);
    return () => clearInterval(id);
  }, [words.length]);
  return <span className={"rotator" + (swap ? " swap" : "")}>{words[i]}</span>;
}
