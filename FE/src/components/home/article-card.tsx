import Link from "next/link";
import { AssetImage } from "@/components/asset-image";
import type { articleItems } from "@/data/home-content";
export function ArticleCard({ item }: { item: (typeof articleItems)[number] }) {
  return (
    <article className="w-[210px] sm:w-[240px] md:w-[265px] lg:w-[280px] desktop:w-[clamp(280px,19.2vw,320px)] shrink-0 snap-start relative rounded-[16px] bg-white overflow-hidden shadow-[0px_2px_6px_rgba(0,0,0,0.09)] border border-[#e5e4e2] flex flex-col justify-between group hover:shadow-[0px_4px_12px_rgba(0,0,0,0.12)] transition-all duration-300 min-h-[280px] sm:min-h-[320px] lg:min-h-[350px]">
      <div>
        <Link prefetch={false} className="block relative w-full h-[140px] sm:h-[160px] xl:h-[180px] overflow-hidden rounded-t-[16px]" href={item.href}>
          <AssetImage alt={item.title} loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src={item.image} />
        </Link>
        <div className="p-3.5 sm:p-4 space-y-1.5 sm:space-y-2">
          <Link prefetch={false} className="block" href={item.href}>
            <h3 className="font-bold text-[#4a4946] text-[16px] sm:text-[17px] xl:text-[18px] leading-[22px] sm:leading-[25px] tracking-[0.03px] group-hover:text-[#14806f] transition-colors line-clamp-2">
              {item.title}
            </h3>
          </Link>
          <p className="font-normal text-[#4a4946] text-[13.5px] sm:text-[14px] xl:text-[14.5px] leading-[20px] sm:leading-[22px] opacity-85 tracking-[0.01px] line-clamp-2 sm:line-clamp-3">
            {item.description}
          </p>
        </div>
      </div>
      <div className="px-3.5 sm:px-5 pb-3.5 sm:pb-4 pt-1">
        <Link prefetch={false} className="inline-flex items-center gap-1.5 text-[#14806f] font-semibold text-[14px] sm:text-[14.5px] xl:text-[15px] tracking-[0.02px] group/link hover:opacity-80 transition-opacity" href={item.href}>
          <span>
            {"Xem chi tiết"}
          </span>
          <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 group-hover/link:translate-x-1 transition-transform">
            <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vuesax-linear-arrow-right3.svg" />
          </div>
        </Link>
      </div>
    </article>
  );
}
