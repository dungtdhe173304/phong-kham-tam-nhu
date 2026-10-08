import { AssetImage } from "@/components/asset-image";

export function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f3f3f3] pb-6 sm:pb-12 md:pb-16">
      <div className="absolute -left-[300px] top-0 w-[851px] h-[851px] opacity-5 pointer-events-none">
        <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/ellipse12.svg" />
      </div>
      <div className="relative w-full aspect-[1920/650] overflow-hidden">
        <div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-100 z-10">
          <AssetImage alt="Banner Tâm Như" decoding="async" className="object-contain sm:object-cover object-center" fill src="/assets/figma/banner-tam-nhu.png" />
        </div>
        <div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 z-0 pointer-events-none">
          <AssetImage alt="Banner Tâm Như 2" loading="lazy" decoding="async" className="object-contain sm:object-cover object-center" fill src="/uploads/images/3879f794-bd96-4871-9064-80e9f7a3448b.jpg" />
        </div>
        <div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 z-0 pointer-events-none">
          <AssetImage alt="Banner Tâm Như 3" loading="lazy" decoding="async" className="object-contain sm:object-cover object-center" fill src="/assets/figma/banner-tam-nhu.png" />
        </div>
        <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-3 md:gap-4">
          <button type="button" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[rgba(255,255,255,0.7)] hover:bg-white flex items-center justify-center transition-all rotate-180 shadow shrink-0" aria-label="Previous">
            <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4">
              <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vuesax-linear-arrow-right.svg" />
            </div>
          </button>
          <div className="flex items-center gap-1.5 sm:gap-2 px-1">
            <button type="button" className="transition-all rounded-full w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-[#14806f] border border-white sm:border-2" aria-label="Slide 1" />
            <button type="button" className="transition-all rounded-full w-2 h-2 sm:w-3 sm:h-3 bg-[#d2d1d1] border border-white sm:border-2 hover:bg-white" aria-label="Slide 2" />
            <button type="button" className="transition-all rounded-full w-2 h-2 sm:w-3 sm:h-3 bg-[#d2d1d1] border border-white sm:border-2 hover:bg-white" aria-label="Slide 3" />
          </div>
          <button type="button" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[rgba(255,255,255,0.7)] hover:bg-white flex items-center justify-center transition-all shadow shrink-0" aria-label="Next">
            <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4">
              <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vuesax-linear-arrow-right.svg" />
            </div>
          </button>
        </div>
      </div>
      <div className="container-fig mx-auto px-4 sm:px-6 lg:px-8 desktop:px-0 mt-3 sm:mt-6 md:mt-8">
        <div className="bg-transparent flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5 sm:gap-6 md:gap-0 desktop:justify-center desktop:gap-[clamp(60px,4.167vw,80px)]">
          <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto bg-white/80 md:bg-transparent p-2.5 sm:p-3.5 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none border border-gray-100 md:border-0">
            <div className="flex w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] lg:w-[62px] lg:h-[62px] shrink-0 items-center justify-center text-[#14806f]">
              <AssetImage alt="" loading="lazy" width="62" height="62" decoding="async" className="w-[85%] h-auto object-contain" style={{"color":"transparent"}} src="/assets/figma/quick-doctor.png" />
            </div>
            <div className="font-['Montserrat']">
              <h3 className="font-bold text-[16px] sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[25px] text-[#4a4946]">
                {"Tìm bác sĩ"}
              </h3>
              <p className="font-medium text-[13px] sm:text-[13.5px] lg:text-[14px] leading-[18px] sm:leading-[21px] text-[#4a4946]/90">
                {"Đội ngũ bác sĩ tận tâm"}
              </p>
            </div>
          </div>
          <div className="hidden md:block h-[46px] w-[1px] bg-[#4a4946]/20" />
          <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto bg-white/80 md:bg-transparent p-2.5 sm:p-3.5 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none border border-gray-100 md:border-0">
            <div className="flex w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] lg:w-[62px] lg:h-[62px] shrink-0 items-center justify-center text-[#14806f]">
              <AssetImage alt="" loading="lazy" width="62" height="62" decoding="async" className="w-[85%] h-auto object-contain" style={{"color":"transparent"}} src="/assets/figma/quick-booking.png" />
            </div>
            <div className="font-['Montserrat']">
              <h3 className="font-bold text-[16px] sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[25px] text-[#4a4946]">
                {"Đặt hẹn tư vấn"}
              </h3>
              <p className="font-medium text-[13px] sm:text-[13.5px] lg:text-[14px] leading-[18px] sm:leading-[21px] text-[#4a4946]/90">
                {"Chủ động thời gian tư vấn"}
              </p>
            </div>
          </div>
          <div className="hidden md:block h-[46px] w-[1px] bg-[#4a4946]/20" />
          <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto bg-white/80 md:bg-transparent p-2.5 sm:p-3.5 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none border border-gray-100 md:border-0">
            <div className="flex w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] lg:w-[62px] lg:h-[62px] shrink-0 items-center justify-center text-[#14806f]">
              <AssetImage alt="" loading="lazy" width="62" height="62" decoding="async" className="w-[85%] h-auto object-contain" style={{"color":"transparent"}} src="/assets/figma/quick-faq.png" />
            </div>
            <div className="font-['Montserrat']">
              <h3 className="font-bold text-[16px] sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[25px] text-[#4a4946]">
                {"Câu hỏi nhanh"}
              </h3>
              <p className="font-medium text-[13px] sm:text-[13.5px] lg:text-[14px] leading-[18px] sm:leading-[21px] text-[#4a4946]/90">
                {"Tư vấn nhanh từ bác sĩ"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
