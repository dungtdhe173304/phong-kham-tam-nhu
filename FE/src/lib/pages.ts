import pageMetadata from "@/data/page-metadata.json";

export interface ClinicPage {
  title: string;
  description: string;
}

export const pages: Record<string, ClinicPage> = pageMetadata;

export function normalizeRoute(slug?: string[]) {
  const route = `/${(slug ?? []).join("/")}`.replace(/\.html$/, "");
  if (route === "/index") return "/";
  return route;
}
