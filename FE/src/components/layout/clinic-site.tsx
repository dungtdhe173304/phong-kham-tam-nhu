import type { ReactNode } from "react";
import { ContactBar } from "./contact-bar";
import { ClinicHeader } from "./clinic-header";
import { ClinicFooter } from "./clinic-footer";
import { SiteInteractions } from "../site-interactions";

export function ClinicSite({ route, children }: { route: string; children: ReactNode }) {
  return <SiteInteractions key={route}>
    <div className="min-h-screen flex flex-col bg-white text-[#171717] font-sans antialiased selection:bg-[#14806f] selection:text-white">
      <ContactBar />
      <ClinicHeader route={route} />
      <main className="flex-1 flex flex-col">{children}</main>
      <ClinicFooter />
    </div>
  </SiteInteractions>;
}
