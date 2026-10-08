import { AssetImage } from "@/components/asset-image";
import type { experienceItems } from "@/data/home-content";
export function ExperienceCard({ item }: { item: (typeof experienceItems)[number] }) {
  return (
    <div className="w-[200px] sm:w-[240px] md:w-[260px] lg:w-[275px] desktop:w-[clamp(275px,18.75vw,320px)] shrink-0 snap-start relative h-[372px] sm:h-[432px] lg:h-[480px] xl:h-[516px] rounded-[16px] overflow-hidden shadow-md group cursor-pointer bg-[#1d1b18]" title="Bấm để phát video">
      <AssetImage alt={item.imageAlt} loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-[16px]" fill src={item.image} />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none rounded-b-[16px]" />
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 z-10 text-white font-['Montserrat'] pointer-events-none">
        <p className="text-[13px] sm:text-[14px] lg:text-[14.5px] font-semibold line-clamp-2 drop-shadow-md text-white/95 leading-[18px] sm:leading-[20px]">
          {item.title}
        </p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] lg:w-[56px] lg:h-[56px] group-hover:scale-110 transition-transform duration-300 drop-shadow-xl">
          <AssetImage alt="Play video" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/group382.svg" />
        </div>
      </div>
    </div>
  );
}
