import { AssetImage } from "@/components/asset-image";

export function ConsultationProcess() {
  return (
    <section className="py-6 sm:py-10 lg:py-14 bg-[#f3f3f3] relative overflow-hidden">
      <div className="container-fig mx-auto px-4 sm:px-6 lg:px-8 desktop:px-0">
        <div className="text-center font-['Montserrat'] mb-6 sm:mb-10 lg:mb-12">
          <p className="font-bold text-[#14806f] text-[13px] sm:text-[14px] lg:text-[15px] desktop:text-[clamp(24px,1.667vw,32px)] desktop:leading-[clamp(30px,2.083vw,40px)] tracking-wider uppercase">
            {"Trách nhiệm của chúng tôi"}
          </p>
          <h2 className="font-bold text-[#1d1b18] text-[24px] sm:text-[30px] lg:text-[34px] leading-[32px] sm:leading-[38px] lg:leading-[42px] desktop:text-[clamp(40.5px,2.8125vw,54px)] desktop:leading-[clamp(46.5px,3.229vw,62px)] tracking-[0.054px] uppercase mt-0.5">
            {"QUY TRÌNH THĂM KHÁM & TRỊ LIỆU"}
          </h2>
        </div>
        <div className="flex lg:hidden flex-col gap-2.5 sm:gap-3 font-['Montserrat']">
          <div className="relative flex items-center gap-3.5 bg-white/80 p-3 sm:p-3.5 rounded-2xl shadow-sm border border-gray-100/80">
            <div className="relative w-[50px] h-[50px] shrink-0">
              <AssetImage alt="Đặt lịch thăm khám" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/group326.svg" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="inline-flex items-center justify-center bg-[#14806f] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shrink-0">
                  {"Bước 1"}
                </span>
                <h3 className="font-bold text-[15px] leading-[20px] text-[#1d1b18] truncate">
                  {"Đặt lịch thăm khám"}
                </h3>
              </div>
              <p className="font-medium text-[12.5px] leading-[17px] text-[#4a4946]/90 line-clamp-2">
                {"Hạn chế ảnh hưởng thời gian của khách hàng"}
              </p>
            </div>
          </div>
          <div className="relative flex items-center gap-3.5 bg-white/80 p-3 sm:p-3.5 rounded-2xl shadow-sm border border-gray-100/80">
            <div className="relative w-[50px] h-[50px] shrink-0">
              <AssetImage alt="Bác sĩ khám và tư vấn 1:1" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/group332.svg" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="inline-flex items-center justify-center bg-[#14806f] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shrink-0">
                  {"Bước 2"}
                </span>
                <h3 className="font-bold text-[15px] leading-[20px] text-[#1d1b18] truncate">
                  {"Bác sĩ khám và tư vấn 1:1"}
                </h3>
              </div>
              <p className="font-medium text-[12.5px] leading-[17px] text-[#4a4946]/90 line-clamp-2">
                {"Tư vấn chi tiết bệnh lý của khách hàng"}
              </p>
            </div>
          </div>
          <div className="relative flex items-center gap-3.5 bg-white/80 p-3 sm:p-3.5 rounded-2xl shadow-sm border border-gray-100/80">
            <div className="relative w-[50px] h-[50px] shrink-0">
              <AssetImage alt="Phác đồ điều trị" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/group330.svg" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="inline-flex items-center justify-center bg-[#14806f] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shrink-0">
                  {"Bước 3"}
                </span>
                <h3 className="font-bold text-[15px] leading-[20px] text-[#1d1b18] truncate">
                  {"Phác đồ điều trị"}
                </h3>
              </div>
              <p className="font-medium text-[12.5px] leading-[17px] text-[#4a4946]/90 line-clamp-2">
                {"Bác sĩ lên phác đồ phù hợp theo bệnh lý"}
              </p>
            </div>
          </div>
          <div className="relative flex items-center gap-3.5 bg-white/80 p-3 sm:p-3.5 rounded-2xl shadow-sm border border-gray-100/80">
            <div className="relative w-[50px] h-[50px] shrink-0">
              <AssetImage alt="Thực hiện trị liệu" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/group331.svg" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="inline-flex items-center justify-center bg-[#14806f] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shrink-0">
                  {"Bước 4"}
                </span>
                <h3 className="font-bold text-[15px] leading-[20px] text-[#1d1b18] truncate">
                  {"Thực hiện trị liệu"}
                </h3>
              </div>
              <p className="font-medium text-[12.5px] leading-[17px] text-[#4a4946]/90 line-clamp-2">
                {"Bác sĩ hướng dẫn trực tiếp KTV theo phác đồ"}
              </p>
            </div>
          </div>
          <div className="relative flex items-center gap-3.5 bg-white/80 p-3 sm:p-3.5 rounded-2xl shadow-sm border border-gray-100/80">
            <div className="relative w-[50px] h-[50px] shrink-0">
              <AssetImage alt="Theo dõi và hướng dẫn" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/ellipse15.svg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <AssetImage alt="" loading="lazy" width="32" height="25" decoding="async" className="w-[62%] h-auto object-contain" style={{"color":"transparent"}} src="/assets/figma/group.svg" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="inline-flex items-center justify-center bg-[#14806f] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shrink-0">
                  {"Bước 5"}
                </span>
                <h3 className="font-bold text-[15px] leading-[20px] text-[#1d1b18] truncate">
                  {"Theo dõi và hướng dẫn"}
                </h3>
              </div>
              <p className="font-medium text-[12.5px] leading-[17px] text-[#4a4946]/90 line-clamp-2">
                {"Bác sĩ theo dõi tiền trình và hướng dẫn chăm sóc sau trị liệu"}
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-full min-h-[440px] xl:min-h-[480px] desktop:min-h-[540px] pb-16 pt-4">
          <div style={{"left":"20%"}} className="absolute top-[105px] xl:top-[128px] desktop:top-[clamp(128px,8.125vw,156px)] -translate-x-1/2 -translate-y-1/2 w-[85px] lg:w-[95px] xl:w-[110px] desktop:w-[clamp(110px,6.25vw,120px)] aspect-[120/23] pointer-events-none z-0 rotate-[28deg] lg:rotate-[28deg] desktop:rotate-[30deg]">
            <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vector23.svg" />
          </div>
          <div style={{"left":"40%"}} className="absolute top-[105px] xl:top-[128px] desktop:top-[clamp(128px,8.125vw,156px)] -translate-x-1/2 -translate-y-1/2 w-[85px] lg:w-[95px] xl:w-[110px] desktop:w-[clamp(110px,6.25vw,120px)] aspect-[120/23] pointer-events-none z-0 -rotate-[28deg] lg:-rotate-[28deg] desktop:-rotate-[30deg]">
            <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vector24.svg" />
          </div>
          <div style={{"left":"60%"}} className="absolute top-[105px] xl:top-[128px] desktop:top-[clamp(128px,8.125vw,156px)] -translate-x-1/2 -translate-y-1/2 w-[85px] lg:w-[95px] xl:w-[110px] desktop:w-[clamp(110px,6.25vw,120px)] aspect-[120/23] pointer-events-none z-0 rotate-[28deg] lg:rotate-[28deg] desktop:rotate-[30deg]">
            <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vector23.svg" />
          </div>
          <div style={{"left":"80%"}} className="absolute top-[105px] xl:top-[128px] desktop:top-[clamp(128px,8.125vw,156px)] -translate-x-1/2 -translate-y-1/2 w-[85px] lg:w-[95px] xl:w-[110px] desktop:w-[clamp(110px,6.25vw,120px)] aspect-[120/23] pointer-events-none z-0 -rotate-[28deg] lg:-rotate-[28deg] desktop:-rotate-[30deg]">
            <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vector24.svg" />
          </div>
          <div className="grid grid-cols-5 gap-2 xl:gap-4 desktop:gap-6 relative z-10 w-full">
            <div className="flex flex-col items-center text-center transition-transform font-['Montserrat'] ">
              <div className="relative w-[95px] h-[95px] lg:w-[110px] lg:h-[110px] xl:w-[130px] xl:h-[130px] desktop:w-[clamp(130px,7.8125vw,150px)] desktop:h-[clamp(130px,7.8125vw,150px)] mb-3.5 xl:mb-5 hover:scale-105 transition-transform shrink-0">
                <AssetImage alt="Đặt lịch thăm khám" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/group326.svg" />
              </div>
              <div className="w-full max-w-[210px] lg:max-w-[240px] xl:max-w-[270px] desktop:max-w-[308px]">
                <h3 className="font-bold text-[16px] lg:text-[17px] xl:text-[20px] desktop:text-[clamp(20px,1.25vw,24px)] leading-[22px] lg:leading-[24px] xl:leading-[28px] desktop:leading-[clamp(26px,1.667vw,32px)] text-[#4a4946] mb-1.5 xl:mb-2 tracking-[0.002em]">
                  {"Đặt lịch thăm khám"}
                </h3>
                <p className="font-medium text-[13px] lg:text-[14px] xl:text-[16px] desktop:text-[clamp(16px,1.14vw,22px)] leading-[19px] lg:leading-[21px] xl:leading-[24px] desktop:leading-[clamp(24px,1.5vw,30px)] text-[#4a4946]/90 w-full tracking-[0.002em]">
                  {"Hạn chế ảnh hưởng thời gian của khách hàng"}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center transition-transform font-['Montserrat'] translate-y-[85px] lg:translate-y-[100px] xl:translate-y-[130px] desktop:translate-y-[clamp(121.5px,8.4375vw,162px)]">
              <div className="relative w-[95px] h-[95px] lg:w-[110px] lg:h-[110px] xl:w-[130px] xl:h-[130px] desktop:w-[clamp(130px,7.8125vw,150px)] desktop:h-[clamp(130px,7.8125vw,150px)] mb-3.5 xl:mb-5 hover:scale-105 transition-transform shrink-0">
                <AssetImage alt="Bác sĩ khám và tư vấn 1:1" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/group332.svg" />
              </div>
              <div className="w-full max-w-[210px] lg:max-w-[240px] xl:max-w-[270px] desktop:max-w-[308px]">
                <h3 className="font-bold text-[16px] lg:text-[17px] xl:text-[20px] desktop:text-[clamp(20px,1.25vw,24px)] leading-[22px] lg:leading-[24px] xl:leading-[28px] desktop:leading-[clamp(26px,1.667vw,32px)] text-[#4a4946] mb-1.5 xl:mb-2 tracking-[0.002em]">
                  {"Bác sĩ khám và tư vấn 1:1"}
                </h3>
                <p className="font-medium text-[13px] lg:text-[14px] xl:text-[16px] desktop:text-[clamp(16px,1.14vw,22px)] leading-[19px] lg:leading-[21px] xl:leading-[24px] desktop:leading-[clamp(24px,1.5vw,30px)] text-[#4a4946]/90 w-full tracking-[0.002em]">
                  {"Tư vấn chi tiết bệnh lý của khách hàng"}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center transition-transform font-['Montserrat'] ">
              <div className="relative w-[95px] h-[95px] lg:w-[110px] lg:h-[110px] xl:w-[130px] xl:h-[130px] desktop:w-[clamp(130px,7.8125vw,150px)] desktop:h-[clamp(130px,7.8125vw,150px)] mb-3.5 xl:mb-5 hover:scale-105 transition-transform shrink-0">
                <AssetImage alt="Phác đồ điều trị" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/group330.svg" />
              </div>
              <div className="w-full max-w-[210px] lg:max-w-[240px] xl:max-w-[270px] desktop:max-w-[308px]">
                <h3 className="font-bold text-[16px] lg:text-[17px] xl:text-[20px] desktop:text-[clamp(20px,1.25vw,24px)] leading-[22px] lg:leading-[24px] xl:leading-[28px] desktop:leading-[clamp(26px,1.667vw,32px)] text-[#4a4946] mb-1.5 xl:mb-2 tracking-[0.002em]">
                  {"Phác đồ điều trị"}
                </h3>
                <p className="font-medium text-[13px] lg:text-[14px] xl:text-[16px] desktop:text-[clamp(16px,1.14vw,22px)] leading-[19px] lg:leading-[21px] xl:leading-[24px] desktop:leading-[clamp(24px,1.5vw,30px)] text-[#4a4946]/90 w-full tracking-[0.002em]">
                  {"Bác sĩ lên phác đồ phù hợp theo bệnh lý"}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center transition-transform font-['Montserrat'] translate-y-[85px] lg:translate-y-[100px] xl:translate-y-[130px] desktop:translate-y-[clamp(121.5px,8.4375vw,162px)]">
              <div className="relative w-[95px] h-[95px] lg:w-[110px] lg:h-[110px] xl:w-[130px] xl:h-[130px] desktop:w-[clamp(130px,7.8125vw,150px)] desktop:h-[clamp(130px,7.8125vw,150px)] mb-3.5 xl:mb-5 hover:scale-105 transition-transform shrink-0">
                <AssetImage alt="Thực hiện trị liệu" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/group331.svg" />
              </div>
              <div className="w-full max-w-[210px] lg:max-w-[240px] xl:max-w-[270px] desktop:max-w-[308px]">
                <h3 className="font-bold text-[16px] lg:text-[17px] xl:text-[20px] desktop:text-[clamp(20px,1.25vw,24px)] leading-[22px] lg:leading-[24px] xl:leading-[28px] desktop:leading-[clamp(26px,1.667vw,32px)] text-[#4a4946] mb-1.5 xl:mb-2 tracking-[0.002em]">
                  {"Thực hiện trị liệu"}
                </h3>
                <p className="font-medium text-[13px] lg:text-[14px] xl:text-[16px] desktop:text-[clamp(16px,1.14vw,22px)] leading-[19px] lg:leading-[21px] xl:leading-[24px] desktop:leading-[clamp(24px,1.5vw,30px)] text-[#4a4946]/90 w-full tracking-[0.002em]">
                  {"Bác sĩ hướng dẫn trực tiếp KTV theo phác đồ"}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center transition-transform font-['Montserrat'] ">
              <div className="relative w-[95px] h-[95px] lg:w-[110px] lg:h-[110px] xl:w-[130px] xl:h-[130px] desktop:w-[clamp(130px,7.8125vw,150px)] desktop:h-[clamp(130px,7.8125vw,150px)] mb-3.5 xl:mb-5 hover:scale-105 transition-transform shrink-0">
                <AssetImage alt="Theo dõi và hướng dẫn" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/ellipse15.svg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <AssetImage alt="" loading="lazy" width="64" height="48" decoding="async" className="w-[62%] h-auto object-contain" style={{"color":"transparent"}} src="/assets/figma/group.svg" />
                </div>
              </div>
              <div className="w-full max-w-[210px] lg:max-w-[240px] xl:max-w-[270px] desktop:max-w-[308px]">
                <h3 className="font-bold text-[16px] lg:text-[17px] xl:text-[20px] desktop:text-[clamp(20px,1.25vw,24px)] leading-[22px] lg:leading-[24px] xl:leading-[28px] desktop:leading-[clamp(26px,1.667vw,32px)] text-[#4a4946] mb-1.5 xl:mb-2 tracking-[0.002em]">
                  {"Theo dõi và hướng dẫn"}
                </h3>
                <p className="font-medium text-[13px] lg:text-[14px] xl:text-[16px] desktop:text-[clamp(16px,1.14vw,22px)] leading-[19px] lg:leading-[21px] xl:leading-[24px] desktop:leading-[clamp(24px,1.5vw,30px)] text-[#4a4946]/90 w-full tracking-[0.002em]">
                  {"Bác sĩ theo dõi tiền trình và hướng dẫn chăm sóc sau trị liệu"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
