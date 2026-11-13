// Public brand details only. Administrative identifiers and personal data
// (registration numbers, addresses, source documents) must never be published.
export const business = {
  name: "Codiva",
  email: "Maryem.hadjwannes@codiva.eu",
  city: (process.env.NEXT_PUBLIC_BUSINESS_CITY || "").trim(),
  country: "FR",
};
