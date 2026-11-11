import { notFound } from "next/navigation";
import { services, type ServiceSlug } from "../../../../../lib/services";
import { metadata } from "../../../../../lib/site";
import { ServicePage } from "../../../../../components/ServicePage";
export const dynamicParams = false;
export const generateStaticParams = () =>
  Object.keys(services).map((slug) => ({ slug }));
async function getSlug(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  if (!Object.hasOwn(services, slug)) notFound();
  return slug as ServiceSlug;
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = await getSlug(params);
  const item = services[slug]["en"];
  return metadata(
    "en",
    item.title + " | Codiva",
    item.description,
    `/services/${slug}/`,
    `/en/services/${slug}/`,
  );
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <ServicePage slug={await getSlug(params)} lang="en" />;
}
