import { business } from "./business";
import { absolute, linkedin } from "./site";
export const organization = {
  "@type": "Organization",
  "@id": absolute("/#organization"),
  name: business.name,
  url: absolute("/"),
  logo: absolute("/assets/icon-512.png"),
  email: business.email,
  sameAs: [linkedin],
  description:
    "Web development, custom software and blockchain solutions for businesses.",
  knowsLanguage: ["fr", "en"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: business.email,
    availableLanguage: ["French", "English"],
  },
  makesOffer: ["Web development", "Custom software", "Blockchain development"].map(
    (name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } }),
  ),
  ...(business.city
    ? {
        address: {
          "@type": "PostalAddress",
          addressLocality: business.city,
          addressCountry: business.country,
        },
      }
    : {}),
};
