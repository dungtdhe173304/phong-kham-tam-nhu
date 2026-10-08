import { AssetImage } from "@/components/asset-image";

export function HealthConcerns() {
  return (
    <section className="py-5 sm:py-8 lg:py-10 bg-[#f3f3f3] relative z-10 overflow-hidden font-['Montserrat']">
      <div className="container-fig mx-auto px-4 sm:px-6 lg:px-8 desktop:px-0">
        <div className="relative w-full rounded-[20px] overflow-hidden shadow-lg bg-[#1d1b18] flex flex-col lg:block lg:h-[750px] desktop:h-[807px]">
          <div className="relative h-[280px] sm:h-[360px] lg:absolute lg:inset-0 lg:h-auto">
            <div className="absolute inset-0 transition-opacity duration-500 pointer-events-none rounded-[20px] overflow-hidden opacity-0 w-full">
              <AssetImage alt="Đau vùng vai gáy" decoding="async" className="rounded-[20px] object-cover object-center" fill src="/assets/figma/concerns-bg-vai-gay.png" />
            </div>
            <div className="absolute inset-0 transition-opacity duration-500 pointer-events-none rounded-[20px] overflow-hidden opacity-100 w-full">
              <AssetImage alt="Thoát vị đĩa đệm" decoding="async" className="rounded-[20px] object-cover object-center" fill src="/assets/figma/banner-thoat-vi.png" />
            </div>
            <div className="absolute inset-0 transition-opacity duration-500 pointer-events-none rounded-[20px] overflow-hidden opacity-0 w-full">
              <AssetImage alt="Chấn thương thể thao" decoding="async" className="rounded-[20px] object-cover object-center" fill src="/assets/figma/banner-chan-thuong.png" />
            </div>
            <div className="absolute inset-0 transition-opacity duration-500 pointer-events-none rounded-[20px] overflow-hidden opacity-0 w-full">
              <AssetImage alt="Đau cổ vai gáy" decoding="async" className="rounded-[20px] object-cover object-center" fill src="/assets/figma/banner-dau-co-vai-gay.png" />
            </div>
            <div className="absolute inset-0 transition-opacity duration-500 pointer-events-none rounded-[20px] overflow-hidden opacity-0 w-full">
              <AssetImage alt="Đau khớp gối" decoding="async" className="rounded-[20px] object-cover object-center" fill src="/assets/figma/concerns-bg-khop-goi.png" />
            </div>
            <div className="absolute inset-0 transition-opacity duration-500 pointer-events-none rounded-[20px] overflow-hidden opacity-0 w-full">
              <AssetImage alt="Đau thần kinh tọa" decoding="async" className="rounded-[20px] object-cover object-center" fill src="/assets/figma/concerns-bg-than-kinh.png" />
            </div>
            <div className="absolute inset-0 transition-opacity duration-500 pointer-events-none rounded-[20px] overflow-hidden opacity-0 w-full lg:w-[calc(100%-420px)] desktop:w-[calc(100%-480px)]">
              <AssetImage alt="Các vấn đề khác" decoding="async" className="rounded-[20px] object-cover object-[center_top] lg:object-contain lg:object-[left_top]" fill src="/assets/figma/layer143534531.png" />
            </div>
            <div className="lg:hidden absolute inset-x-0 bottom-0 h-[180px] sm:h-[230px] pointer-events-none z-10 rounded-b-[20px] overflow-hidden">
              <AssetImage alt="" decoding="async" className="object-fill pointer-events-none rounded-b-[20px]" fill src="/assets/figma/banner-bottom-gradient.png" />
            </div>
            <div className="absolute left-5 sm:left-10 lg:left-12 desktop:left-[60px] bottom-5 sm:bottom-10 lg:bottom-12 desktop:bottom-[60px] z-50 pointer-events-none max-w-[690px]">
              <p className="font-bold text-white text-[16px] sm:text-[22px] lg:text-[26px] desktop:text-[32px] leading-[22px] sm:leading-[28px] lg:leading-[34px] desktop:leading-[40px] tracking-[0.002em] mb-1 sm:mb-2">
                {"Thăm khám nhanh"}
              </p>
              <h2 className="font-bold text-white text-[24px] sm:text-[34px] lg:text-[44px] desktop:text-[54px] leading-[30px] sm:leading-[42px] lg:leading-[52px] desktop:leading-[62px] tracking-[0.001em] uppercase whitespace-nowrap">
                {"VẤN ĐỀ BẠN QUAN TÂM"}
              </h2>
            </div>
          </div>
          <div className="relative lg:absolute lg:right-6 desktop:right-8 lg:top-[24px] lg:bottom-0 z-30 flex items-stretch gap-3 sm:gap-4 desktop:gap-5 p-3 sm:p-5 lg:p-0 w-full lg:w-auto max-w-full overflow-hidden">
            <div className="relative w-full max-w-full lg:w-[380px] xl:w-[410px] desktop:w-[440px] shrink-0 h-full overflow-hidden">
              <div className="w-full h-full flex lg:block gap-3 sm:gap-3.5 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto lg:space-y-4 snap-x snap-mandatory lg:snap-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none pb-2 sm:pb-3 lg:pb-8" data-carousel-track="true">
                <div className="relative w-[280px] sm:w-[340px] lg:w-full h-[200px] sm:h-[220px] lg:h-[235px] desktop:h-[250px] shrink-0 snap-start rounded-[20px] overflow-hidden cursor-pointer select-none transition-all duration-300 bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.18)]">
                  <div className="absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none">
                    <AssetImage alt="Đau vùng vai gáy" loading="lazy" decoding="async" className="object-cover pointer-events-none" fill src="/assets/figma/concerns-card-vai-gay.png" />
                  </div>
                  <div className="absolute inset-0 rounded-[20px] bg-[#1D1B18] transition-opacity duration-300 pointer-events-none opacity-40" />
                  <div className="absolute inset-x-0 bottom-0 px-4 sm:px-5 desktop:px-[22px] pb-3 sm:pb-3.5 desktop:pb-[20px] z-10 space-y-1">
                    <h3 className="font-bold text-[#1D1B18] text-[17px] sm:text-[19px] xl:text-[22px] desktop:text-[24px] leading-[23px] sm:leading-[25px] xl:leading-[29px] desktop:leading-[32px] tracking-[0.002em] whitespace-nowrap">
                      {"Đau vùng vai gáy"}
                    </h3>
                    <p className="font-normal text-[#4A4946] text-[12.5px] sm:text-[13px] xl:text-[14.5px] desktop:text-[16px] leading-[18px] sm:leading-[19px] xl:leading-[21px] desktop:leading-[24px] tracking-[0.001em] line-clamp-3 sm:line-clamp-4 w-full">
                      {"Thường xuyên đau vai gáy là tình trạng thường gặp của người đi làm văn phòng, với tư thế ngồi làm việc lâu ngày các cơ vùng cổ vai chịu áp lực quá mức gây đau mỏi"}
                    </p>
                  </div>
                </div>
                <div className="relative w-[280px] sm:w-[340px] lg:w-full h-[200px] sm:h-[220px] lg:h-[235px] desktop:h-[250px] shrink-0 snap-start rounded-[20px] overflow-hidden cursor-pointer select-none transition-all duration-300 bg-white shadow-[0px_6px_20px_rgba(0,0,0,0.3)] ring-1 ring-white/60">
                  <div className="absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none">
                    <AssetImage alt="Thoát vị đĩa đệm" loading="lazy" decoding="async" className="object-cover pointer-events-none" fill src="/uploads/images/4efe960d-0b39-4bac-9b7c-50771ef826f0.png" />
                  </div>
                  <div className="absolute inset-0 rounded-[20px] bg-[#1D1B18] transition-opacity duration-300 pointer-events-none opacity-0" />
                  <div className="absolute inset-x-0 bottom-0 px-4 sm:px-5 desktop:px-[22px] pb-3 sm:pb-3.5 desktop:pb-[20px] z-10 space-y-1">
                    <h3 className="font-bold text-[#1D1B18] text-[17px] sm:text-[19px] xl:text-[22px] desktop:text-[24px] leading-[23px] sm:leading-[25px] xl:leading-[29px] desktop:leading-[32px] tracking-[0.002em] whitespace-nowrap">
                      {"Thoát vị đĩa đệm"}
                    </h3>
                    <p className="font-normal text-[#4A4946] text-[12.5px] sm:text-[13px] xl:text-[14.5px] desktop:text-[16px] leading-[18px] sm:leading-[19px] xl:leading-[21px] desktop:leading-[24px] tracking-[0.001em] line-clamp-3 sm:line-clamp-4 w-full">
                      {"Bệnh ngày càng có xu hướng trẻ hóa và gây ra nhiều biến chứng, thậm chí bại liệt nếu không điều trị sớm và đúng cách."}
                    </p>
                  </div>
                </div>
                <div className="relative w-[280px] sm:w-[340px] lg:w-full h-[200px] sm:h-[220px] lg:h-[235px] desktop:h-[250px] shrink-0 snap-start rounded-[20px] overflow-hidden cursor-pointer select-none transition-all duration-300 bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.18)]">
                  <div className="absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none">
                    <AssetImage alt="Chấn thương thể thao" loading="lazy" decoding="async" className="object-cover pointer-events-none" fill src="/uploads/images/7ec7b5e7-d513-406a-8787-37e447a792ad.png" />
                  </div>
                  <div className="absolute inset-0 rounded-[20px] bg-[#1D1B18] transition-opacity duration-300 pointer-events-none opacity-40" />
                  <div className="absolute inset-x-0 bottom-0 px-4 sm:px-5 desktop:px-[22px] pb-3 sm:pb-3.5 desktop:pb-[20px] z-10 space-y-1">
                    <h3 className="font-bold text-[#1D1B18] text-[17px] sm:text-[19px] xl:text-[22px] desktop:text-[24px] leading-[23px] sm:leading-[25px] xl:leading-[29px] desktop:leading-[32px] tracking-[0.002em] whitespace-nowrap">
                      {"Chấn thương thể thao"}
                    </h3>
                    <p className="font-normal text-[#4A4946] text-[12.5px] sm:text-[13px] xl:text-[14.5px] desktop:text-[16px] leading-[18px] sm:leading-[19px] xl:leading-[21px] desktop:leading-[24px] tracking-[0.001em] line-clamp-3 sm:line-clamp-4 w-full">
                      {"Nguy cơ chấn thương thể thao có thể xảy ra với những người đam mê vận động, gây tổn thương ở 1 hoặc nhiều bộ phận cơ thể."}
                    </p>
                  </div>
                </div>
                <div className="relative w-[280px] sm:w-[340px] lg:w-full h-[200px] sm:h-[220px] lg:h-[235px] desktop:h-[250px] shrink-0 snap-start rounded-[20px] overflow-hidden cursor-pointer select-none transition-all duration-300 bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.18)]">
                  <div className="absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none">
                    <AssetImage alt="Đau cổ vai gáy" loading="lazy" decoding="async" className="object-cover pointer-events-none" fill src="/uploads/images/fb00238f-eaef-4b8e-9843-550074570b53.png" />
                  </div>
                  <div className="absolute inset-0 rounded-[20px] bg-[#1D1B18] transition-opacity duration-300 pointer-events-none opacity-40" />
                  <div className="absolute inset-x-0 bottom-0 px-4 sm:px-5 desktop:px-[22px] pb-3 sm:pb-3.5 desktop:pb-[20px] z-10 space-y-1">
                    <h3 className="font-bold text-[#1D1B18] text-[17px] sm:text-[19px] xl:text-[22px] desktop:text-[24px] leading-[23px] sm:leading-[25px] xl:leading-[29px] desktop:leading-[32px] tracking-[0.002em] whitespace-nowrap">
                      {"Đau cổ vai gáy"}
                    </h3>
                    <p className="font-normal text-[#4A4946] text-[12.5px] sm:text-[13px] xl:text-[14.5px] desktop:text-[16px] leading-[18px] sm:leading-[19px] xl:leading-[21px] desktop:leading-[24px] tracking-[0.001em] line-clamp-3 sm:line-clamp-4 w-full">
                      {"Đau cổ vai gáy khiến bạn mệt mỏi, khó vận động và ảnh hưởng trực tiếp đến chất lượng cuộc sống."}
                    </p>
                  </div>
                </div>
                <div className="relative w-[280px] sm:w-[340px] lg:w-full h-[200px] sm:h-[220px] lg:h-[235px] desktop:h-[250px] shrink-0 snap-start rounded-[20px] overflow-hidden cursor-pointer select-none transition-all duration-300 bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.18)]">
                  <div className="absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none">
                    <AssetImage alt="Đau khớp gối" loading="lazy" decoding="async" className="object-cover pointer-events-none" fill src="/assets/figma/concerns-card-khop-goi.png" />
                  </div>
                  <div className="absolute inset-0 rounded-[20px] bg-[#1D1B18] transition-opacity duration-300 pointer-events-none opacity-40" />
                  <div className="absolute inset-x-0 bottom-0 px-4 sm:px-5 desktop:px-[22px] pb-3 sm:pb-3.5 desktop:pb-[20px] z-10 space-y-1">
                    <h3 className="font-bold text-[#1D1B18] text-[17px] sm:text-[19px] xl:text-[22px] desktop:text-[24px] leading-[23px] sm:leading-[25px] xl:leading-[29px] desktop:leading-[32px] tracking-[0.002em] whitespace-nowrap">
                      {"Đau khớp gối"}
                    </h3>
                    <p className="font-normal text-[#4A4946] text-[12.5px] sm:text-[13px] xl:text-[14.5px] desktop:text-[16px] leading-[18px] sm:leading-[19px] xl:leading-[21px] desktop:leading-[24px] tracking-[0.001em] line-clamp-3 sm:line-clamp-4 w-full">
                      {"Khớp gối thoái hóa hoặc viêm dịch khiến việc đi lại, lên xuống cầu thang đau buốt, ảnh hưởng lớn đến sinh hoạt hàng ngày."}
                    </p>
                  </div>
                </div>
                <div className="relative w-[280px] sm:w-[340px] lg:w-full h-[200px] sm:h-[220px] lg:h-[235px] desktop:h-[250px] shrink-0 snap-start rounded-[20px] overflow-hidden cursor-pointer select-none transition-all duration-300 bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.18)]">
                  <div className="absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none">
                    <AssetImage alt="Đau thần kinh tọa" loading="lazy" decoding="async" className="object-cover pointer-events-none" fill src="/uploads/images/b54d2d26-d33b-43db-b2ff-4d4bcd483dfc.png" />
                  </div>
                  <div className="absolute inset-0 rounded-[20px] bg-[#1D1B18] transition-opacity duration-300 pointer-events-none opacity-40" />
                  <div className="absolute inset-x-0 bottom-0 px-4 sm:px-5 desktop:px-[22px] pb-3 sm:pb-3.5 desktop:pb-[20px] z-10 space-y-1">
                    <h3 className="font-bold text-[#1D1B18] text-[17px] sm:text-[19px] xl:text-[22px] desktop:text-[24px] leading-[23px] sm:leading-[25px] xl:leading-[29px] desktop:leading-[32px] tracking-[0.002em] whitespace-nowrap">
                      {"Đau thần kinh tọa"}
                    </h3>
                    <p className="font-normal text-[#4A4946] text-[12.5px] sm:text-[13px] xl:text-[14.5px] desktop:text-[16px] leading-[18px] sm:leading-[19px] xl:leading-[21px] desktop:leading-[24px] tracking-[0.001em] line-clamp-3 sm:line-clamp-4 w-full">
                      {"Những cơn đau nhức lan tỏa từ vùng thắt lưng xuống hông, đùi và cẳng chân kèm cảm giác tê bì, châm chích khó chịu."}
                    </p>
                  </div>
                </div>
                <div className="relative w-[280px] sm:w-[340px] lg:w-full h-[200px] sm:h-[220px] lg:h-[235px] desktop:h-[250px] shrink-0 snap-start rounded-[20px] overflow-hidden cursor-pointer select-none transition-all duration-300 bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.18)]">
                  <div className="absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none">
                    <AssetImage alt="Các vấn đề khác" loading="lazy" decoding="async" className="object-cover pointer-events-none" fill src="/uploads/images/df5dedf9-cc08-4c2b-a3a5-61b74d169deb.png" />
                  </div>
                  <div className="absolute inset-0 rounded-[20px] bg-[#1D1B18] transition-opacity duration-300 pointer-events-none opacity-40" />
                  <div className="absolute inset-x-0 bottom-0 px-4 sm:px-5 desktop:px-[22px] pb-3 sm:pb-3.5 desktop:pb-[20px] z-10 space-y-1">
                    <h3 className="font-bold text-[#1D1B18] text-[17px] sm:text-[19px] xl:text-[22px] desktop:text-[24px] leading-[23px] sm:leading-[25px] xl:leading-[29px] desktop:leading-[32px] tracking-[0.002em] whitespace-nowrap">
                      {"Các vấn đề khác"}
                    </h3>
                    <p className="font-normal text-[#4A4946] text-[12.5px] sm:text-[13px] xl:text-[14.5px] desktop:text-[16px] leading-[18px] sm:leading-[19px] xl:leading-[21px] desktop:leading-[24px] tracking-[0.001em] line-clamp-3 sm:line-clamp-4 w-full">
                      {"Hỏi đáp trực tiếp cùng bác sĩ y học cổ truyền để được chẩn đoán và tư vấn phương pháp điều trị an toàn, tự nhiên."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block w-[10px] h-full bg-[#D9D9D9]/30 rounded-[70px] cursor-pointer shrink-0 transition-colors z-50" title="Kéo hoặc nhấp để cuộn">
              <div style={{"transform":"translateY(0px)","height":"166px"}} className="absolute top-0 left-0 w-full rounded-[70px] cursor-grab active:cursor-grabbing transition-transform duration-75 bg-[#D2D1D1] hover:bg-white " />
            </div>
          </div>
          <div className="hidden lg:block absolute inset-x-0 bottom-0 h-[289px] pointer-events-none z-40 rounded-b-[20px] overflow-hidden">
            <AssetImage alt="" decoding="async" className="object-fill pointer-events-none rounded-b-[20px]" fill src="/assets/figma/banner-bottom-gradient.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
