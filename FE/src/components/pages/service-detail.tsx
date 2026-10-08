import Link from "next/link";
import type { ServiceContent } from "@/data/service-content";
import { AssetImage } from "../asset-image";
import { ServiceSidebar } from "../service-sidebar";

const fill = { position: "absolute", inset: 0, width: "100%", height: "100%", color: "transparent" } as const;

export function ServiceDetail({ item }: { item: ServiceContent }) {
  return <div className="bg-[#f3f3f3] pt-6 sm:pt-10 pb-10 sm:pb-14">
    <div className="container-fig desktop:!max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 desktop:px-0">
      <nav aria-label="Breadcrumb" className="flex items-center gap-3 font-semibold text-[#14806f] text-[13px] sm:text-[14px]">
        <Link prefetch={false} className="hover:opacity-80" href="/#dich-vu">Menu</Link>
        <span aria-hidden="true" className="h-2.5 w-px bg-[#14806f]" />
        <span>{item.name}</span>
      </nav>
      <h1 className="mt-2 font-bold text-[#1d1b18] text-[22px] sm:text-[28px] xl:text-[32px] desktop:text-[34px] leading-[30px] sm:leading-[36px] xl:leading-[40px] desktop:leading-[44px] tracking-[0.2px]">{item.title}</h1>
      <div className="mt-5 xl:mt-7 grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-8 xl:gap-12 items-start">
        <div className="min-w-0">
          <div>{item.sheets.map((sheet, index) => <div key={index} className="relative w-full overflow-hidden" style={{ aspectRatio: sheet.aspectRatio }}>
            <div className="absolute left-0 w-full" style={{ height: sheet.cropHeight, top: sheet.cropTop }}>
              <AssetImage alt={sheet.imageAlt} src={sheet.image} loading="lazy" decoding="async" className="object-fill" style={fill} />
            </div>
          </div>)}</div>
          <h2 className="mt-6 xl:mt-8 font-bold text-[#1d1b18] text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] tracking-[0.2px]">{item.procedureTitle}</h2>
          <p className="mt-2.5 font-normal text-[#4a4946] text-[13.5px] sm:text-[14.5px] leading-[24px] sm:leading-[26px] text-justify">{item.description}</p>
        </div>
        <ServiceSidebar service={item.slug} />
      </div>
    </div>
  </div>;
}
