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
