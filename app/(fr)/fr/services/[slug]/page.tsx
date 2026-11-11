import { notFound } from "next/navigation";
import { services } from "../../../../../lib/services";
import {
  metadata,
  serviceSegment,
  serviceFromSegment,
  serviceRoute,
  type ServiceSlug,
} from "../../../../../lib/site";
import { ServicePage } from "../../../../../components/ServicePage";
export const dynamicParams = false;
export const generateStaticParams = () =>
  (Object.keys(services) as ServiceSlug[]).map((key) => ({
    slug: serviceSegment(key, "fr"),
  }));
async function getSlug(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  const key = serviceFromSegment(slug, "fr");
  if (!key) notFound();
  return key;
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = await getSlug(params);
  const item = services[slug]["fr"];
  return metadata(
    "fr",
    item.title + " | Codiva",
    item.description,
    serviceRoute(slug, "fr"),
    serviceRoute(slug, "en"),
  );
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <ServicePage slug={await getSlug(params)} lang="fr" />;
}
