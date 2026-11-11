import { business } from "./business";
import { absolute, linkedin } from "./site";
export const organization = {
  "@type": "Organization",
  "@id": absolute("/#organization"),
  name: business.name,
  url: absolute("/"),
  logo: absolute("/assets/icon-512.png"),
  email: "contact@codiva.fr",
  sameAs: [linkedin],
  identifier: [
    { "@type": "PropertyValue", propertyID: "SIREN", value: business.siren },
    { "@type": "PropertyValue", propertyID: "SIRET", value: business.siret },
  ],
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
