"use client";
import { useState, type FormEvent } from "react";
import type { Lang } from "../lib/site";
import { business } from "../lib/business";
import { translations } from "../lib/translations";
export function ContactForm({ lang }: { lang: Lang }) {
  const t = translations[lang];
  const [status, setStatus] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("_gotcha")) return;
    let invalid = false;
    for (const name of ["name", "email", "message"]) {
      const field = form.elements.namedItem(name) as HTMLInputElement;
      const bad = !field.value.trim() || !field.checkValidity();
      field.classList.toggle("invalid", bad);
      field.setAttribute("aria-invalid", String(bad));
      invalid ||= bad;
    }
    if (invalid) {
      setStatus(
        lang === "fr"
          ? "Merci de remplir les champs obligatoires avec une adresse email valide."
          : "Please complete the required fields with a valid email address.",
      );
      (form.querySelector(".invalid") as HTMLElement)?.focus();
      return;
    }
    const body = `Nom : ${data.get("name")}\nEmail : ${data.get("email")}\nProjet : ${data.get("type")}\nBudget : ${data.get("budget")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent("Projet Codiva — " + data.get("name"))}&body=${encodeURIComponent(body)}`;
    setStatus(
      lang === "fr"
        ? "Votre messagerie va s’ouvrir avec votre message prérempli. L’envoi se fait depuis votre messagerie."
        : "Your email app will open with your message. Send it from your email app.",
    );
  }
  return (
    <form className="form" id="contact-form" noValidate onSubmit={submit}>
      <div className="field">
        <label htmlFor="name">&gt; {t["form.name"]}</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          maxLength={150}
        />
      </div>
      <div className="field">
        <label htmlFor="email">&gt; {t["form.email"]}</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
        />
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="type">&gt; {t["form.type"]}</label>
          <select id="type" name="type">
            {(["web", "software", "blockchain", "other"] as const).map(
              (key) => (
                <option key={key}>{t[`form.type.${key}`]}</option>
              ),
            )}
          </select>
        </div>
        <div className="field">
          <label htmlFor="budget">&gt; {t["form.budget"]}</label>
          <select id="budget" name="budget">
            <option>{t["form.budget.unknown"]}</option>
            {[
              "< 1 000 €",
              "1 000 – 5 000 €",
              "5 000 – 15 000 €",
              "> 15 000 €",
            ].map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">&gt; {t["form.message"]}</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          maxLength={5000}
        />
      </div>
      <input
        name="_gotcha"
        className="hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <p>
        {lang === "fr"
          ? "Ce formulaire prépare un email dans votre messagerie."
          : "This form prepares a message in your email app."}
      </p>
      <button type="submit" className="btn btn-gold">
        {t["form.submit"]} <span aria-hidden="true">&gt;</span>
      </button>
      <p
        className="form-status"
        id="form-status"
        role="status"
        aria-live="polite"
      >
        {status}
      </p>
    </form>
  );
}
