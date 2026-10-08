import Link from "next/link";
import { AssetImage } from "@/components/asset-image";
import type { serviceItems } from "@/data/home-content";
export function ServiceCard({ item }: { item: (typeof serviceItems)[number] }) {
  return (
    <Link prefetch={false} className="w-[210px] sm:w-[240px] md:w-[265px] lg:w-[280px] desktop:w-[clamp(280px,19.2vw,320px)] shrink-0 snap-start relative rounded-[16px] bg-white overflow-hidden shadow-[0px_2px_6px_rgba(0,0,0,0.09)] border border-[#e5e4e2] flex flex-col group hover:shadow-[0px_4px_12px_rgba(0,0,0,0.12)] transition-all duration-300" href={item.href}>
      <div className="relative w-full h-[140px] sm:h-[160px] xl:h-[180px] overflow-hidden rounded-t-[16px]">
        <AssetImage alt={item.title} loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src={item.image} />
      </div>
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-start">
        <h3 className="font-bold text-[#4a4946] text-[16px] sm:text-[17px] xl:text-[18px] leading-[22px] sm:leading-[25px] tracking-[0.03px] mb-1 sm:mb-2 group-hover:text-[#14806f] transition-colors line-clamp-1">
          {item.title}
        </h3>
        <p className="font-normal text-[#4a4946] text-[13px] sm:text-[14px] xl:text-[14.5px] leading-[19px] sm:leading-[22px] opacity-85 tracking-[0.01px] line-clamp-2 sm:line-clamp-3">
          {item.description}
        </p>
      </div>
    </Link>
  );
}
