import { Home } from "../../../components/Home";
import { StructuredData } from "../../../components/StructuredData";
import { metadata } from "../../../lib/site";
export const generateMetadata = () =>
  metadata(
    "en",
    "Codiva | Freelance Web, Software & Blockchain Developer",
    "Work with Maryem Hadj Wannes, a freelance full-stack developer for web applications, custom software and blockchain. From planning to launch. Free project quote.",
    "/",
    "/en/",
  );
export default function Page() {
  return (
    <>
      <StructuredData lang="en" />
      <Home lang="en" />
    </>
  );
}
