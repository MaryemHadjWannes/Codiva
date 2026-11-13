// Public brand details. Registration identifiers are in `legalIdentifiers` and
// must be shown ONLY on the legal notice page (never footer or structured data).
// Never publish personal addresses or source documents.
export const legalIdentifiers = {
  siren: "131068918",
  siret: "13106891800013",
  ape: "6201Z",
};
export const business = {
  name: "Codiva",
  email: "Maryem.hadjwannes@codiva.eu",
  city: (process.env.NEXT_PUBLIC_BUSINESS_CITY || "").trim(),
  country: "FR",
};
