import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { normalizeRoute, pages } from "@/lib/pages";
import { ClinicSite } from "@/components/layout/clinic-site";
import { pageViews } from "@/lib/page-views";

type Props = { params: Promise<{ slug?: string[] }> };

export function generateStaticParams() {
  return Object.keys(pages).map(route => ({ slug: route === "/" ? [] : route.slice(1).split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = pages[normalizeRoute((await params).slug)];
  return page ? { title: page.title, description: page.description } : {};
}

export default async function Page({ params }: Props) {
  const route = normalizeRoute((await params).slug);
  const View = pageViews[route as keyof typeof pageViews];
  if (!View) notFound();
  return <ClinicSite route={route}><View /></ClinicSite>;
}
