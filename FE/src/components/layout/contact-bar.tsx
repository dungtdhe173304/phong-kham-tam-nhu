import { AssetImage } from "@/components/asset-image";

export function ContactBar() {
  return (
    <div className="w-full bg-[#14806f] h-[36px] sm:h-[40px] desktop:h-[clamp(37.5px,2.604vw,50px)] flex items-center px-3 sm:px-8 lg:px-12 xl:px-16 desktop:px-0 select-none z-50 relative">
      <div className="container-fig mx-auto w-full flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-4 sm:gap-8">
          <a href="tel:0393312336" className="flex items-center gap-1.5 sm:gap-2 hover:opacity-90 transition-opacity py-0.5">
            <div className="relative w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0">
              <AssetImage alt="Call" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vuesax-linear-call.svg" />
            </div>
            <span className="font-semibold sm:font-medium text-white text-[12.5px] sm:text-[13.5px] lg:text-[14px] tracking-[0.02px] whitespace-nowrap">
              {"0393312336"}
            </span>
          </a>
          <a href="mailto:thieuducdung254@gmail.com" className="hidden md:flex items-center gap-2 hover:opacity-90 transition-opacity py-0.5">
            <div className="relative w-4.5 h-4.5 shrink-0">
              <AssetImage alt="SMS" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vuesax-linear-sms.svg" />
            </div>
            <span className="font-medium text-white text-[12.5px] sm:text-[13.5px] lg:text-[14px] tracking-[0.02px] whitespace-nowrap">
              {"Email: thieuducdung254@gmail.com"}
            </span>
          </a>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a href="https://www.facebook.com/cltn.1801" target="_blank" rel="noopener noreferrer" className="relative w-8 h-8 sm:w-9 sm:h-9 hover:scale-105 transition-transform" aria-label="Facebook">
            <AssetImage alt="Facebook" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/facebook.svg" />
          </a>
          <a href="https://www.tiktok.com/@dungdan25" target="_blank" rel="noopener noreferrer" className="relative w-8 h-8 sm:w-9 sm:h-9 hover:scale-105 transition-transform" aria-label="YouTube">
            <AssetImage alt="YouTube" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/group74.svg" />
          </a>
          <a href="https://www.tiktok.com/@chuletamnhu" target="_blank" rel="noopener noreferrer" className="relative w-8 h-8 sm:w-9 sm:h-9 hover:scale-105 transition-transform" aria-label="TikTok">
            <AssetImage alt="TikTok" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/group307.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}
