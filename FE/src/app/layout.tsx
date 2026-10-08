import type { Metadata } from "next";
import pageMetadata from "@/data/page-metadata.json";
import { NavigationScroll } from "@/components/navigation-scroll";
import "./globals.css";

export const metadata: Metadata = {
  title: pageMetadata["/"].title,
  description: pageMetadata["/"].description,
  icons: { icon: "/assets/figma/logo-tam-nhu.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans"><NavigationScroll />{children}</body>
    </html>
  );
}
