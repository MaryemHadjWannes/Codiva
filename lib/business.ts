// Public business identifiers transcribed from the owner's RNE attestation.
// The source PDF and personal address must never be copied to public/.
export const business = {
  name: "Codiva",
  siren: "131068918",
  siret: "13106891800013",
  ape: "6201Z",
  city: (process.env.NEXT_PUBLIC_BUSINESS_CITY || "").trim(),
  country: "FR",
};
