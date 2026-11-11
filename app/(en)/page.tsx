import { Home } from "../../components/Home";
import { StructuredData } from "../../components/StructuredData";
import { metadata } from "../../lib/site";
export const generateMetadata = () =>
  metadata(
    "en",
    "Codiva | Web Development, Custom Software & Blockchain",
    "Codiva builds websites, web applications, custom software and blockchain solutions for businesses. From planning to launch, with a free initial project estimate.",
    "/fr/",
    "/",
  );
export default function Page() {
  return (
    <>
      <StructuredData lang="en" />
      <Home lang="en" />
    </>
  );
}
