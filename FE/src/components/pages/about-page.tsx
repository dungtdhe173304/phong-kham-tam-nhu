import Link from "next/link";
import { AssetImage } from "@/components/asset-image";

export function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-[#f3f3f3] pt-12 sm:pt-16 lg:pt-[120px] pb-12 sm:pb-16 lg:pb-[120px]">
      <div aria-hidden="true" className="absolute -left-[113px] -top-[28px] w-[1009px] h-[1009px] pointer-events-none">
        <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/ellipse12.svg" />
      </div>
      <div aria-hidden="true" className="absolute left-[18px] top-[103px] w-[747px] h-[747px] pointer-events-none">
        <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/ellipse13.svg" />
      </div>
      <div className="relative space-y-12 sm:space-y-16 lg:space-y-[120px]">
        <section className="relative">
          <div className="container-fig mx-auto px-4 sm:px-6 lg:px-8 desktop:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[850fr_400fr_348fr] gap-8 lg:gap-8 items-start">
            <div className="md:col-span-2 lg:col-span-1">
              <p className="font-bold text-[#14806f] text-[13px] sm:text-[14px] lg:text-[15px] desktop:text-[clamp(24px,1.667vw,32px)] desktop:leading-[clamp(30px,2.083vw,40px)] tracking-wider uppercase">
                {"Về chúng tôi"}
              </p>
              <h1 className="mt-1.5 sm:mt-2 font-bold text-[#1d1b18] text-[24px] sm:text-[30px] xl:text-[34px] leading-[32px] sm:leading-[38px] xl:leading-[44px] desktop:text-[clamp(40.5px,2.8125vw,54px)] desktop:leading-[clamp(46.5px,3.229vw,62px)] tracking-[0.054px]">
                {"Phòng khám Y Học"}
                <br />
                {"Cổ Truyền Tâm Như"}
                <br />
                <span className="relative inline-block font-semibold">
                  {"Chữa lành"}
                  <AssetImage alt="" loading="lazy" width="262" height="17" decoding="async" className="absolute left-0 -bottom-[2%] w-full h-auto pointer-events-none" style={{"color":"transparent"}} src="/assets/figma/about-title-badge.png" />
                </span>
                {" bằng cả trái tim"}
              </h1>
              <div className="relative mt-6 lg:mt-8 w-full aspect-[850/464] rounded-[20px] overflow-hidden">
                <AssetImage alt="Đội ngũ bác sĩ Tâm Như" decoding="async" className="object-cover" fill src="/assets/figma/about-hero-main.png" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="relative w-full aspect-[400/320] rounded-[20px] overflow-hidden">
                <AssetImage alt="Bác sĩ trị liệu cho khách hàng" loading="lazy" decoding="async" className="object-cover scale-[1.34] -translate-x-[4.5%]" fill src="/assets/figma/about-hero-mission.jpg" />
              </div>
              <h2 className="mt-4 sm:mt-5 desktop:mt-[clamp(15px,1.042vw,20px)] font-bold text-[#4a4946] text-[20px] sm:text-[22px] xl:text-[24px] desktop:text-[clamp(24px,1.667vw,32px)] leading-[28px] sm:leading-[30px] xl:leading-[32px] desktop:leading-[clamp(31.5px,2.1875vw,42px)]">
                {"Sứ mệnh"}
                <br />
                {"của chúng tôi"}
              </h2>
              <p className="mt-3 sm:mt-4 desktop:mt-[clamp(12px,0.833vw,16px)] font-normal text-[#4a4946] opacity-90 text-[15px] sm:text-[15.5px] xl:text-[16px] desktop:text-[clamp(18px,1.25vw,24px)] leading-[25px] sm:leading-[27px] desktop:leading-[clamp(27px,1.875vw,36px)] tracking-[0.01px]">
                {"Thấu hiểu thể trạng mỗi người, lựa chọn phương pháp phù hợp và đồng hành cùng khách hàng trên hành trình phục hồi và bảo dưỡng sức khỏe bền vững."}
              </p>
            </div>
            <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-[348/619] max-md:max-w-[480px] max-md:mx-auto rounded-[20px] overflow-hidden">
              <AssetImage alt="Không gian trị liệu Tâm Như" loading="lazy" decoding="async" className="object-cover" fill src="/assets/figma/about-hero-tall.jpg" />
              <button type="button" aria-label="Phát video giới thiệu" className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[56px] h-[56px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] cursor-pointer transition-transform hover:scale-105">
                <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/group382.svg" />
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fig desktop:!max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 desktop:px-0">
            <div className="relative overflow-hidden rounded-[20px] bg-[linear-gradient(52.6deg,#3fb7a4_0%,#14806f_50%)] shadow-[inset_-4px_-4px_20px_rgba(0,0,0,0.1)] text-white">
              <div aria-hidden="true" className="absolute -top-[300px] -right-[321px] w-[630px] h-[630px] rounded-full border-[30px] border-white/5 pointer-events-none" />
              <div aria-hidden="true" className="absolute -top-[226px] -right-[247px] w-[482px] h-[482px] rounded-full border-[30px] border-white/5 pointer-events-none" />
              <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 px-4 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-6 lg:min-h-[160px]">
                <div className="lg:max-w-[650px]">
                  <h2 className="font-bold text-[20px] sm:text-[22px] lg:text-[24px] leading-[28px] sm:leading-[32px] tracking-[0.04px]">
                    {"Tầm nhìn"}
                  </h2>
                  <p className="mt-1.5 font-normal text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-[24px] sm:leading-[26px] tracking-[0.02px] text-left sm:text-justify opacity-95">
                    {"Trở thành hệ thống chăm sóc cơ xương khớp và dưỡng sinh Đông Y uy tín, chuyên nghiệp, mang giá trị sức khỏe chủ động hàng đầu Việt Nam."}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-6 lg:gap-8 text-center pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10 shrink-0">
                  <div>
                    <p className="font-bold text-[20px] sm:text-[24px] lg:text-[26px] leading-[28px] sm:leading-[32px] tracking-[0.04px] whitespace-nowrap">
                      {"+5.000"}
                    </p>
                    <p className="mt-0.5 font-medium text-[12.5px] sm:text-[13.5px] lg:text-[14px] leading-[18px] sm:leading-[20px] opacity-90">
                      {"Khách hàng tin tưởng"}
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-[20px] sm:text-[24px] lg:text-[26px] leading-[28px] sm:leading-[32px] tracking-[0.04px] whitespace-nowrap">
                      {"+12.000"}
                    </p>
                    <p className="mt-0.5 font-medium text-[12.5px] sm:text-[13.5px] lg:text-[14px] leading-[18px] sm:leading-[20px] opacity-90">
                      {"Lượt điều trị mỗi năm"}
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-[20px] sm:text-[24px] lg:text-[26px] leading-[28px] sm:leading-[32px] tracking-[0.04px] whitespace-nowrap">
                      {"98%"}
                    </p>
                    <p className="mt-0.5 font-medium text-[12.5px] sm:text-[13.5px] lg:text-[14px] leading-[18px] sm:leading-[20px] opacity-90">
                      {"Hài lòng & giới thiệu"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden py-4 sm:py-6 lg:py-10">
          <div className="w-full pl-4 sm:pl-6 lg:pl-8 desktop:pl-[max(2rem,calc((100vw-clamp(1260px,87.5vw,1680px))/2))] pr-0">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 xl:gap-[60px] 2xl:gap-[76px]">
              <div className="w-full lg:w-[440px] xl:w-[500px] 2xl:w-[582px] shrink-0 flex flex-col justify-center pr-4 sm:pr-6 lg:pr-0 font-['Montserrat']">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="relative w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] 2xl:w-[60px] 2xl:h-[60px] rounded-full bg-[rgba(0,114,222,0.05)] flex items-center justify-center shrink-0">
                    <div className="relative w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] 2xl:w-[40px] 2xl:h-[40px]">
                      <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/about-gallery-favorite.svg" />
                    </div>
                  </div>
                  <span className="font-semibold text-[#14806f] text-[15px] sm:text-[17px] lg:text-[19px] xl:text-[21px] 2xl:text-[24px] leading-[22px] sm:leading-[26px] 2xl:leading-[32px] tracking-[0.001em] uppercase">
                    {"Album ảnh"}
                  </span>
                </div>
                <h2 className="mt-3 sm:mt-4 lg:mt-5 font-bold uppercase text-[#1d1b18] text-[26px] sm:text-[34px] lg:text-[40px] xl:text-[46px] 2xl:text-[54px] leading-[32px] sm:leading-[42px] lg:leading-[48px] xl:leading-[54px] 2xl:leading-[62px] tracking-[0.001em]">
                  {"khoảnh khắc"}
                  <br />
                  {"đáng nhớ"}
                </h2>
                <h3 className="mt-3 sm:mt-4 lg:mt-5 font-bold text-[#4a4946] text-[16px] sm:text-[18px] lg:text-[22px] xl:text-[26px] 2xl:text-[32px] leading-[24px] sm:leading-[28px] lg:leading-[32px] xl:leading-[36px] 2xl:leading-[40px] tracking-[0.001em]">
                  {"Mỗi hành trình là một câu chuyện, mỗi nụ cười là một kỷ niệm."}
                </h3>
                <div className="mt-3.5 sm:mt-5 lg:mt-6 space-y-3 sm:space-y-4 font-medium text-[#4a4946] text-[13.5px] sm:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[22px] sm:leading-[25px] lg:leading-[27px] xl:leading-[30px] 2xl:leading-[32px] tracking-[0.001em] text-justify">
                  <p>
                    {"Cảm ơn Quý khách đã tin tưởng và lựa chọn Tâm Như trên hành trình chăm sóc sức khỏe. Chúng tôi trân trọng từng cuộc gặp gỡ, từng lời chia sẻ và những thay đổi tích cực mà Quý khách đã cảm nhận."}
                  </p>
                  <p>
                    {"Mỗi nụ cười, mỗi khoảnh khắc cơ thể được thư giãn và khỏe hơn là động lực để Tâm Như tiếp tục tận tâm đồng hành cùng Quý khách trên hành trình chăm sóc sức khỏe."}
                  </p>
                  <p>
                    {"Chân thành cảm ơn."}
                    <br />
                    {"Tập thể "}
                    <span className="text-[#14806f] font-semibold">
                      {"Tâm Như."}
                    </span>
                  </p>
                </div>
              </div>
              <div className="relative min-w-0 flex-1 w-full overflow-hidden">
                <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 bottom-0 w-[50px] sm:w-[80px] lg:w-[120px] 2xl:w-[136px] bg-gradient-to-r from-[#f3f3f3] via-[#f3f3f3]/90 to-transparent z-10" />
                <div className="flex flex-col gap-2 sm:gap-2.5 2xl:gap-[10px] w-full overflow-hidden select-none py-1">
                  <div className="animate-album-marquee-left flex items-center gap-2 sm:gap-2.5 2xl:gap-[10px]">
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 1" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-01.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 2" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-02.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 3" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-03.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"374 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 4" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-04.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"421 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 5" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-05.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 1" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-01.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 2" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-02.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 3" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-03.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"374 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 4" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-04.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"421 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 5" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-05.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 1" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-01.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 2" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-02.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 3" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-03.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"374 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 4" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-04.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"421 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 5" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-05.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 1" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-01.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 2" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-02.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 3" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-03.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"374 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 4" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-04.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"421 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 5" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-05.jpg" />
                    </div>
                  </div>
                  <div className="animate-album-marquee-left-mid flex items-center gap-2 sm:gap-2.5 2xl:gap-[10px]">
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"373 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 6" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-06.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"373 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 7" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-07.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"285 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 8" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-08.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"421 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 9" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-09.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 10" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-10.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"373 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 6" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-06.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"373 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 7" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-07.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"285 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 8" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-08.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"421 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 9" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-09.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 10" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-10.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"373 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 6" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-06.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"373 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 7" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-07.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"285 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 8" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-08.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"421 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 9" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-09.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 10" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-10.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"373 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 6" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-06.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"373 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 7" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-07.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"285 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 8" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-08.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"421 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 9" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-09.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 10" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-10.jpg" />
                    </div>
                  </div>
                  <div className="animate-album-marquee-left-alt flex items-center gap-2 sm:gap-2.5 2xl:gap-[10px]">
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"420 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 11" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-11.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"280 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 12" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-12.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 13" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-13.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 14" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-14.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"169 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 15" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-15.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 16" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-16.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"420 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 11" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-11.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"280 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 12" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-12.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 13" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-13.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 14" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-14.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"169 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 15" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-15.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 16" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-16.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"420 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 11" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-11.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"280 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 12" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-12.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 13" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-13.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 14" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-14.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"169 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 15" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-15.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 16" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-16.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"420 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 11" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-11.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"280 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 12" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-12.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 13" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-13.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 14" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-14.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"169 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 15" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-15.jpg" />
                    </div>
                    <div className="relative h-[130px] sm:h-[160px] md:h-[200px] xl:h-[240px] 2xl:h-[280px] rounded-[12px] sm:rounded-[14px] lg:rounded-[18px] 2xl:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all group shrink-0" style={{"aspectRatio":"210 / 280"}}>
                      <AssetImage alt="Khoảnh khắc Tâm Như 16" draggable="false" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="/assets/figma/about-album-16.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fig mx-auto px-4 sm:px-6 lg:px-8 desktop:px-0">
            <div className="relative overflow-hidden rounded-[20px] bg-white shadow-[4px_4px_15px_rgba(0,0,0,0.06)] px-6 sm:px-8 lg:px-10 py-8 lg:py-10">
              <div aria-hidden="true" className="absolute -bottom-[560px] -left-[180px] w-[760px] h-[760px] rounded-full border-[30px] border-[#14806f]/5 pointer-events-none" />
              <div aria-hidden="true" className="absolute -bottom-[470px] -left-[85px] w-[570px] h-[570px] rounded-full border-[30px] border-[#14806f]/5 pointer-events-none" />
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
                <div>
                  <p className="font-bold text-[#14806f] text-[13px] sm:text-[14px] lg:text-[15px] desktop:text-[clamp(24px,1.667vw,32px)] desktop:leading-[clamp(30px,2.083vw,40px)] tracking-wider uppercase">
                    {"Giá trị cốt lõi"}
                  </p>
                  <h2 className="mt-2 sm:mt-2.5 font-bold text-[#1d1b18] text-[24px] sm:text-[30px] lg:text-[34px] leading-[32px] sm:leading-[40px] lg:leading-[44px] desktop:text-[clamp(40.5px,2.8125vw,54px)] desktop:leading-[clamp(46.5px,3.229vw,62px)] tracking-[0.054px]">
                    {"Sức khỏe của bạn, ưu tiên "}
                    <br className="hidden xl:block" />
                    {"hàng đầu của chúng tôi."}
                  </h2>
                  <p className="mt-3 sm:mt-4 font-normal text-[#4a4946] text-[15px] sm:text-[16px] lg:text-[16.5px] leading-[24px] sm:leading-[26px] desktop:text-[clamp(18px,1.25vw,24px)] desktop:leading-[clamp(24px,1.667vw,32px)] tracking-[0.02px]">
                    {"Lấy thấu hiểu làm nền tảng - Phù hợp làm phương pháp -"}
                    <br />
                    {"Đồng hành làm cam kết"}
                  </p>
                  <div className="mt-5 sm:mt-6 lg:mt-8 flex flex-nowrap items-center gap-3 sm:gap-6">
                    <Link prefetch={false} className="bg-[#14806f] hover:bg-[#0f685a] transition-colors rounded-[10px] px-3 sm:px-5 h-[38px] sm:h-[44px] flex items-center justify-center gap-1.5 sm:gap-2.5 text-[#f3f3f3] font-semibold text-[13px] sm:text-[15px] tracking-[0.02px] whitespace-nowrap shrink-0" href="/lien-he">
                      <div className="relative w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0">
                        <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vuesax-linear-calendar.svg" />
                      </div>
                      <span>
                        {"Đặt lịch ngay"}
                      </span>
                    </Link>
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                      <div className="flex w-[34px] h-[34px] sm:w-[42px] sm:h-[42px] shrink-0 items-center justify-center rounded-full bg-[#14806f]/10">
                        <div className="relative w-5 h-5 sm:w-6 sm:h-6 shrink-0">
                          <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/chat-icon 1.png" />
                        </div>
                      </div>
                      <div className="text-[11.5px] sm:text-[14px] leading-[16px] sm:leading-[20px] desktop:text-[clamp(15px,1.0417vw,20px)] desktop:leading-[clamp(21px,1.458vw,28px)] tracking-[0.01px]">
                        <p className="font-medium text-[#4a4946] whitespace-nowrap">
                          {"Bạn cần hỗ trợ?"}
                        </p>
                        <a href="tel:0393312336" className="font-bold text-[#14806f] hover:opacity-80 whitespace-nowrap">
                          {"0393312336"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 lg:gap-[24px]">
                  <Link prefetch={false} className="group bg-white border border-[#a5a4a3] rounded-[20px] min-h-[72px] sm:min-h-[96px] lg:h-[120px] px-4 sm:px-6 lg:px-8 flex items-center gap-3 sm:gap-4 hover:border-[#14806f] transition-colors" href="/cam-nang">
                    <div className="relative w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 shrink-0 transition-transform group-hover:translate-x-1">
                      <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vuesax-linear-arrow-right3.svg" />
                    </div>
                    <span className="font-bold text-[#4a4946] text-[16px] xs:text-[18px] sm:text-[22px] lg:text-[26px] leading-[26px] sm:leading-[32px] tracking-[0.04px] whitespace-nowrap">
                      {"Cẩm nang cho sức khoẻ"}
                    </span>
                  </Link>
                  <div className="relative overflow-hidden rounded-[20px] bg-[#14806f] text-white text-center px-6 sm:px-10 py-8 lg:py-10 lg:h-[400px] flex flex-col items-center justify-center">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                      <AssetImage alt="" decoding="async" className="object-cover object-center" fill src="/assets/figma/about-album-01.jpg" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,128,111,0.5)] to-[rgba(34,174,152,0.5)]" />
                    </div>
                    <div className="relative flex flex-col items-center">
                      <div className="relative w-[70px] h-[70px]">
                        <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/about-ellipse17.svg" />
                        <div className="absolute inset-[23.75%]">
                          <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/about-profile-2user.svg" />
                        </div>
                      </div>
                      <h3 className="mt-5 font-bold text-[22px] sm:text-[26px] lg:text-[28px] leading-[30px] sm:leading-[36px] desktop:text-[clamp(24px,1.667vw,32px)] desktop:leading-[clamp(30px,2.083vw,40px)] tracking-[0.05px]">
                        {"Tham gia cộng đồng sức khoẻ"}
                      </h3>
                      <p className="mt-2 font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[25px] desktop:text-[clamp(18px,1.25vw,24px)] desktop:leading-[clamp(24px,1.667vw,32px)] tracking-[0.02px] max-w-[620px] opacity-95">
                        {"Cùng Tâm Như chia sẻ kiến thức, lan tỏa lối sống lành mạnh và chủ động chăm sóc sức khỏe mỗi ngày."}
                      </p>
                      <a href="https://zalo.me/" target="_blank" rel="noopener noreferrer" className="mt-5 lg:mt-6 inline-flex items-center justify-center gap-2 border border-white rounded-[40px] px-6 py-2.5 font-semibold text-[14px] sm:text-[15px] leading-[22px] tracking-[0.02px] hover:bg-white/10 transition-colors whitespace-nowrap">
                        <span>
                          {"Tham gia ngay"}
                        </span>
                        <div className="relative w-5 h-5 shrink-0">
                          <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/about-arrow-right-white.svg" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
