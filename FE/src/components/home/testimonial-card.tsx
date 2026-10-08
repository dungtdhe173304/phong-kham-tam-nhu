import { AssetImage } from "@/components/asset-image";
interface Testimonial { name: string; image: string; description: string }
export function TestimonialCard({ item, desktop = false }: { item: Testimonial; desktop?: boolean }) {
  const card = (
      <div className={"bg-white rounded-[16px] p-3.5 sm:p-4 flex items-center gap-3 sm:gap-4 shadow-[0px_4px_16px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300 min-h-[90px] sm:min-h-[104px] " + (desktop ? "w-[410px] h-[105px] shrink-0" : "")}>
        <div className="relative w-[54px] h-[54px] sm:w-[64px] sm:h-[64px] rounded-[10px] overflow-hidden shrink-0 bg-[#d9d9d9]">
          <AssetImage alt={item.name} loading="lazy" decoding="async" className="object-cover" fill src={item.image} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-[#4a4946] text-[15px] sm:text-[16px] leading-[22px] tracking-[0.03px] mb-0.5">
            {item.name}
          </h3>
          <p className="font-normal text-[#4a4946] text-[13px] sm:text-[13.5px] leading-[18px] sm:leading-[20px] opacity-85 tracking-[0.01px] line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>
  );
  return desktop ? card : <div className="w-[280px] sm:w-[320px] shrink-0">{card}</div>;
}
