import { AssetImage } from "@/components/asset-image";

export function HealthSearchBanner() {
  return (
    <section className="relative w-full h-auto min-h-[360px] sm:min-h-[420px] lg:h-[480px] bg-[#14806f] overflow-hidden flex items-center font-['Montserrat'] py-10 sm:py-14 lg:py-0">
      <div className="absolute inset-0 pointer-events-none">
        <AssetImage alt="" decoding="async" className="object-cover object-[70%_15%] sm:object-[75%_20%] lg:object-[80%_25%]" fill src="/assets/figma/rectangle127.png" />
        <div className="absolute inset-0 bg-[#14806f]/60" />
      </div>
      <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 w-[320px] sm:w-[420px] lg:w-[500px] h-[320px] sm:h-[420px] lg:h-[500px] pointer-events-none select-none z-10">
        <svg className="w-full h-full" viewBox="0 0 790 790" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="395" cy="395" r="373" stroke="white" strokeWidth="40" strokeOpacity="0.22" />
          <circle cx="395" cy="395" r="247" stroke="white" strokeWidth="40" strokeOpacity="0.22" />
        </svg>
      </div>
      <div className="container-fig w-full mx-auto px-4 sm:px-6 lg:px-8 desktop:px-0 relative z-20 text-white">
        <div className="font-bold text-[26px] sm:text-[36px] lg:text-[44px] desktop:text-[56px] leading-[34px] sm:leading-[44px] lg:leading-[52px] desktop:leading-[64px] tracking-[0.005em] uppercase">
          <p className="mb-0.5 sm:mb-1">
            {"PHÒNG KHÁM TÂM NHƯ"}
          </p>
          <p>
            {"KHỎE TỪ GỐC, AN TỪ TÂM"}
          </p>
        </div>
        <p className="font-normal text-[15px] sm:text-[18px] lg:text-[20px] desktop:text-[24px] leading-[24px] sm:leading-[28px] lg:leading-[30px] desktop:leading-[32px] tracking-[0.002em] max-w-[990px] mt-3 sm:mt-4 mb-6 sm:mb-8 text-left sm:text-justify text-white">
          {"Chăm sóc sức khỏe chủ động, tập trung vào cơ thể từ gốc, giúp bạn cải thiện tình trạng đau mỏi và tìm lại sự nhẹ nhàng, cân bằng trong cuộc sống."}
        </p>
        <form className="w-full sm:w-auto inline-flex">
          <div className="bg-white rounded-[40px] px-5 sm:px-6 py-2.5 sm:py-3 flex items-center gap-3 w-full sm:w-[480px] lg:w-[517px] shadow-lg">
            <div className="relative w-5 h-5 sm:w-6 sm:h-6 shrink-0">
              <AssetImage alt="Search" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/file-search-line.svg" />
            </div>
            <input type="text" placeholder="Tìm kiếm theo tình trạng bệnh lý" className="w-full bg-transparent text-[#1d1b18] placeholder-[#a5a4a3] font-semibold text-[15px] sm:text-[17px] desktop:text-[20px] tracking-[0.001em] focus:outline-none" defaultValue="" />
          </div>
        </form>
      </div>
    </section>
  );
}
