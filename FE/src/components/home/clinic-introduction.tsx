import Link from "next/link";
import { AssetImage } from "@/components/asset-image";

export function ClinicIntroduction() {
  return (
    <section id="ve-chung-toi" className="py-8 sm:py-12 lg:py-16 bg-[#f3f3f3] relative overflow-hidden">
      <div className="container-fig mx-auto px-4 sm:px-6 lg:px-8 desktop:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="space-y-4 sm:space-y-5 lg:space-y-6 font-['Montserrat']">
            <p className="font-bold text-[#14806f] text-[17px] sm:text-[19px] lg:text-[21px] desktop:text-[24px] leading-tight">
              {"Về phòng khám"}
            </p>
            <div className="font-extrabold text-[#1d1b18] text-[28px] sm:text-[36px] lg:text-[42px] desktop:text-[54px] leading-[36px] sm:leading-[44px] lg:leading-[52px] desktop:leading-[64px] uppercase tracking-[-0.01em]">
              <p className="mb-0.5 sm:mb-1">
                {"15 NĂM đồng hành"}
              </p>
              <p>
                {"VÌ SỨC KHỎE NGƯỜI VIỆT"}
              </p>
            </div>
            <p className="font-normal text-[#4a4946] text-[15px] sm:text-[16px] lg:text-[18px] desktop:text-[20px] leading-[25px] sm:leading-[28px] desktop:leading-[32px] tracking-[0.01em]">
              {"Với mỗi khách hàng, chúng tôi luôn đặt mình vào vị trí của họ để lắng nghe, thấu hiểu và xây dựng phác đồ điều trị phù hợp với từng tình trạng sức khỏe."}
            </p>
            <div className="grid grid-cols-3 divide-x divide-[#d2d1d1] py-3 sm:py-4">
              <div className="text-center px-1 sm:px-3">
                <p className="font-bold text-[#14806f] text-[22px] sm:text-[28px] lg:text-[32px] desktop:text-[36px] leading-tight tracking-tight">
                  {"+5.000"}
                </p>
                <p className="font-medium text-[#4a4946] text-[12px] sm:text-[14px] lg:text-[15px] desktop:text-[17px] leading-[17px] sm:leading-[22px] mt-1 sm:mt-1.5">
                  {"Khách hàng tin tưởng"}
                </p>
              </div>
              <div className="text-center px-1 sm:px-3">
                <p className="font-bold text-[#14806f] text-[22px] sm:text-[28px] lg:text-[32px] desktop:text-[36px] leading-tight tracking-tight">
                  {"+12.000"}
                </p>
                <p className="font-medium text-[#4a4946] text-[12px] sm:text-[14px] lg:text-[15px] desktop:text-[17px] leading-[17px] sm:leading-[22px] mt-1 sm:mt-1.5">
                  {"Lượt điều trị mỗi năm"}
                </p>
              </div>
              <div className="text-center px-1 sm:px-3">
                <p className="font-bold text-[#14806f] text-[22px] sm:text-[28px] lg:text-[32px] desktop:text-[36px] leading-tight tracking-tight">
                  {"98%"}
                </p>
                <p className="font-medium text-[#4a4946] text-[12px] sm:text-[14px] lg:text-[15px] desktop:text-[17px] leading-[17px] sm:leading-[22px] mt-1 sm:mt-1.5">
                  {"Hài lòng & giới thiệu"}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-5 pt-2">
              <Link prefetch={false} className="inline-flex items-center justify-center gap-2.5 bg-[#14806f] hover:bg-[#0f685a] px-5 sm:px-7 h-[46px] sm:h-[48px] desktop:h-[52px] rounded-[10px] shadow-sm transition-all text-white font-bold text-[15px] sm:text-[16px] desktop:text-[18px] tracking-[0.01em] whitespace-nowrap active:scale-95" href="/lien-he">
                <div className="relative w-5 h-5 shrink-0">
                  <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vuesax-linear-calendar.svg" />
                </div>
                <span>
                  {"Đặt lịch ngay"}
                </span>
              </Link>
              <Link prefetch={false} className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-gray-50 border border-gray-200 hover:border-[#14806f]/40 px-5 sm:px-7 h-[46px] sm:h-[48px] desktop:h-[52px] rounded-[10px] shadow-sm transition-all text-[#777674] hover:text-[#14806f] font-bold text-[15px] sm:text-[16px] desktop:text-[18px] tracking-[0.01em] whitespace-nowrap active:scale-95 group/more" href="/gioi-thieu">
                <span>
                  {"Tìm hiểu thêm"}
                </span>
                <div className="relative w-5 h-5 shrink-0 group-hover/more:translate-x-1 transition-transform">
                  <svg className="w-5 h-5 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.43 5.93L20.5 12L14.43 18.07" />
                    <path d="M3.5 12H20.33" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div data-image-reveal className="relative flex items-center justify-center w-full max-w-[500px] lg:max-w-none mx-auto">
            <div className="relative w-full aspect-[888/600]">
              <div className="absolute inset-x-0 bottom-0 top-[15.33%] rounded-[16px] sm:rounded-[20px] bg-[#14806f] overflow-hidden shadow-xl">
                <div className="absolute left-[5.4%] top-[11.4%] w-[109%] h-[191%] opacity-40 pointer-events-none">
                  <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/ellipse10.svg" />
                </div>
                <div className="absolute left-[28.9%] top-[52.5%] w-[72.3%] h-[126.4%] opacity-40 pointer-events-none">
                  <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/ellipse11.svg" />
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 top-0 z-10 w-[92.34%] mx-auto h-full">
                <AssetImage alt="Đội ngũ bác sĩ Tâm Như" decoding="async" className="object-contain object-bottom" fill src="/assets/figma/layer143534531.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
