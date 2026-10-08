import Link from "next/link";
import { AssetImage } from "@/components/asset-image";

export function ClinicFooter() {
  return (
    <footer className="bg-white text-[#4a4946] font-['Montserrat']">
      <div className="container-fig mx-auto px-4 sm:px-6 lg:px-8 desktop:px-0 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 desktop:gap-12">
          <div className="lg:col-span-4 space-y-6 sm:space-y-7 desktop:space-y-8">
            <div className="relative w-[210px] sm:w-[250px] lg:w-[280px] desktop:w-[320px] h-[55px] sm:h-[65px] lg:h-[72px] desktop:h-[80px]">
              <AssetImage alt="Phòng khám Tâm Như" decoding="async" className="object-contain object-left" fill src="/assets/figma/logo-tam-nhu.svg" />
            </div>
            <h3 className="font-bold text-[#4a4946] text-[18px] sm:text-[20px] lg:text-[24px] desktop:text-[clamp(24px,1.667vw,32px)] leading-[26px] sm:leading-[28px] desktop:leading-[clamp(32px,2.083vw,40px)] tracking-[0.002em]">
              <span className="block">
                {"Phòng khám y học cổ truyền"}
              </span>
              <span className="block">
                {"Tâm Như"}
              </span>
            </h3>
            <div className="flex items-center gap-2.5">
              <a href="https://www.facebook.com/cltn.1801" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#4a4946] hover:bg-[#14806f] flex items-center justify-center transition-all hover:scale-105" aria-label="Facebook">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="mailto:thieuducdung254@gmail.com" className="w-8 h-8 rounded-full bg-[#4a4946] hover:bg-[#14806f] flex items-center justify-center transition-all hover:scale-105" aria-label="Mail">
                <div className="relative w-4 h-4">
                  <AssetImage alt="Mail" loading="lazy" decoding="async" className="object-contain brightness-0 invert" fill src="/assets/figma/mail-ru.svg" />
                </div>
              </a>
              <a href="https://www.tiktok.com/@dungdan25" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#4a4946] hover:bg-[#14806f] flex items-center justify-center transition-all hover:scale-105" aria-label="YouTube">
                <div className="relative w-4 h-4">
                  <AssetImage alt="YouTube" loading="lazy" decoding="async" className="object-contain brightness-0 invert" fill src="/assets/figma/youtube.svg" />
                </div>
              </a>
              <a href="https://m.me/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#4a4946] hover:bg-[#14806f] flex items-center justify-center transition-all hover:scale-105" aria-label="Messenger">
                <div className="relative w-4 h-4">
                  <AssetImage alt="Messenger" loading="lazy" decoding="async" className="object-contain brightness-0 invert" fill src="/assets/figma/messenger.svg" />
                </div>
              </a>
              <a href="https://periscope.tv/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#4a4946] hover:bg-[#14806f] flex items-center justify-center transition-all hover:scale-105" aria-label="Periscope">
                <div className="relative w-4 h-4">
                  <AssetImage alt="Periscope" loading="lazy" decoding="async" className="object-contain brightness-0 invert" fill src="/assets/figma/periscope.svg" />
                </div>
              </a>
            </div>
            <p className="text-[#4a4946] text-[16px] sm:text-[18px] desktop:text-[24px] leading-[24px] sm:leading-[28px] desktop:leading-[32px] tracking-[0.002em]">
              <span className="font-bold">
                {"Giờ làm việc: "}
              </span>
              <span className="font-normal">
                {"08h30 - 19h00"}
              </span>
            </p>
          </div>
          <div className="lg:col-span-4 space-y-6 lg:space-y-8 border-t lg:border-t-0 pt-6 lg:pt-0 border-gray-200">
            <div>
              <button type="button" className="w-full flex items-center justify-between text-left lg:pointer-events-none mb-3 sm:mb-4 cursor-pointer">
                <h4 className="font-bold text-[#4a4946] text-[20px] sm:text-[24px] lg:text-[26px] desktop:text-[32px] leading-[28px] sm:leading-[32px] desktop:leading-[40px] tracking-[0.002em]">
                  {"Dịch vụ của chúng tôi"}
                </h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-5 h-5 text-gray-500 transition-transform duration-200 lg:hidden" aria-hidden="true">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="hidden lg:block space-y-2 sm:space-y-2.5 animate-in fade-in duration-150">
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 xl:w-5 xl:h-5 shrink-0 text-[#14806F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 18L15 12L9 6" />
                  </svg>
                  <span className="font-bold text-[#4a4946] text-[15px] sm:text-[17px] xl:text-[18px] desktop:text-[20px] leading-[22px] sm:leading-[24px] desktop:leading-[28px] tracking-[0.002em] whitespace-nowrap">
                    {"Giãn cơ"}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 xl:w-5 xl:h-5 shrink-0 text-[#14806F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 18L15 12L9 6" />
                  </svg>
                  <span className="font-bold text-[#4a4946] text-[15px] sm:text-[17px] xl:text-[18px] desktop:text-[20px] leading-[22px] sm:leading-[24px] desktop:leading-[28px] tracking-[0.002em] whitespace-nowrap">
                    {"Đả thông kinh lạc"}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 xl:w-5 xl:h-5 shrink-0 text-[#14806F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 18L15 12L9 6" />
                  </svg>
                  <span className="font-bold text-[#4a4946] text-[15px] sm:text-[17px] xl:text-[18px] desktop:text-[20px] leading-[22px] sm:leading-[24px] desktop:leading-[28px] tracking-[0.002em] whitespace-nowrap">
                    {"Tác động thần kinh cột sống"}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 xl:w-5 xl:h-5 shrink-0 text-[#14806F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 18L15 12L9 6" />
                  </svg>
                  <span className="font-bold text-[#4a4946] text-[15px] sm:text-[17px] xl:text-[18px] desktop:text-[20px] leading-[22px] sm:leading-[24px] desktop:leading-[28px] tracking-[0.002em] whitespace-nowrap">
                    {"Ngọc bích dung nhan"}
                  </span>
                </div>
              </div>
            </div>
            <div className="border-t lg:border-t-0 pt-5 lg:pt-0 border-gray-100">
              <button type="button" className="w-full flex items-center justify-between text-left lg:pointer-events-none mb-3 sm:mb-4 cursor-pointer">
                <h4 className="font-bold text-[#4a4946] text-[20px] sm:text-[24px] lg:text-[26px] desktop:text-[32px] leading-[28px] sm:leading-[32px] desktop:leading-[40px] tracking-[0.002em]">
                  {"Điều trị bệnh lý"}
                </h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-5 h-5 text-gray-500 transition-transform duration-200 lg:hidden" aria-hidden="true">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <ul className="hidden lg:block space-y-1.5 sm:space-y-2 font-normal text-[#4a4946] text-[14px] sm:text-[16px] desktop:text-[20px] leading-[22px] sm:leading-[26px] desktop:leading-[32px] tracking-[0.001em] animate-in fade-in duration-150">
                <li className="flex items-center gap-2">
                  <span className="text-[#a5a4a3] select-none text-base leading-none">
                    {"•"}
                  </span>
                  <span>
                    {"Thoát vị đĩa đệm"}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#a5a4a3] select-none text-base leading-none">
                    {"•"}
                  </span>
                  <span>
                    {"Thoái hoá cột sống"}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#a5a4a3] select-none text-base leading-none">
                    {"•"}
                  </span>
                  <span>
                    {"Thoái hoá cột sống cổ"}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#a5a4a3] select-none text-base leading-none">
                    {"•"}
                  </span>
                  <span>
                    {"Đau thần kinh toạ"}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#a5a4a3] select-none text-base leading-none">
                    {"•"}
                  </span>
                  <span>
                    {"Chấn thương thể thao"}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#a5a4a3] select-none text-base leading-none">
                    {"•"}
                  </span>
                  <span>
                    {"Các chứng đau xương khớp"}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#a5a4a3] select-none text-base leading-none">
                    {"•"}
                  </span>
                  <span>
                    {"Đau cổ"}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#a5a4a3] select-none text-base leading-none">
                    {"•"}
                  </span>
                  <span>
                    {"Đau vai"}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#a5a4a3] select-none text-base leading-none">
                    {"•"}
                  </span>
                  <span>
                    {"Đau thắt lưng"}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#a5a4a3] select-none text-base leading-none">
                    {"•"}
                  </span>
                  <span>
                    {"Tê tay, tê chân"}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-4 space-y-6 lg:space-y-8 border-t lg:border-t-0 pt-6 lg:pt-0 border-gray-200">
            <div>
              <button type="button" className="w-full flex items-center justify-between text-left lg:pointer-events-none mb-3 sm:mb-4 cursor-pointer">
                <h4 className="font-bold text-[#4a4946] text-[20px] sm:text-[24px] lg:text-[26px] desktop:text-[32px] leading-[28px] sm:leading-[32px] desktop:leading-[40px] tracking-[0.002em]">
                  {"Phòng khám Y Học Cổ Truyền"}
                </h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-5 h-5 text-gray-500 transition-transform duration-200 lg:hidden" aria-hidden="true">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="hidden lg:block space-y-3.5 animate-in fade-in duration-150">
                <div className="space-y-1.5">
                  <p className="font-bold text-[#4a4946] text-[17px] sm:text-[20px] desktop:text-[24px] leading-[24px] sm:leading-[28px] desktop:leading-[32px] tracking-[0.002em]">
                    {"Chi nhánh Kim Liên - Hà Nội"}
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 shrink-0">
                      <AssetImage alt="Call" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vuesax-linear-call1.svg" />
                    </div>
                    <a href="tel:0393312336" className="font-normal text-[#4a4946] text-[15px] sm:text-[17px] desktop:text-[20px] leading-[22px] sm:leading-[26px] desktop:leading-[28px] hover:text-[#14806f] transition-colors">
                      {"0393312336"}
                    </a>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5">
                      <AssetImage alt="Location" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vuesax-linear-location.svg" />
                    </div>
                    <p className="font-normal text-[#4a4946] text-[14px] sm:text-[16px] desktop:text-[20px] leading-[20px] sm:leading-[24px] desktop:leading-[28px]">
                      {"Đại học Y Hà Nội"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block pt-2 space-y-5 animate-in fade-in duration-150">
              <h4 className="font-bold text-[#4a4946] text-[20px] sm:text-[24px] lg:text-[26px] desktop:text-[32px] leading-[28px] sm:leading-[32px] desktop:leading-[40px] tracking-[0.002em] mb-3 sm:mb-4">
                {"Trung tâm chăm sóc sức khỏe"}
              </h4>
              <div className="space-y-4 sm:space-y-5">
                <div className="space-y-1.5">
                  <p className="font-bold text-[#4a4946] text-[17px] sm:text-[20px] desktop:text-[24px] leading-[24px] sm:leading-[28px] desktop:leading-[32px] tracking-[0.002em]">
                    {"Chi nhánh Hoằng Hóa - Thanh Hóa"}
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 shrink-0">
                      <AssetImage alt="Call" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vuesax-linear-call1.svg" />
                    </div>
                    <a href="tel:0393312336" className="font-normal text-[#4a4946] text-[15px] sm:text-[17px] desktop:text-[20px] leading-[22px] sm:leading-[26px] desktop:leading-[28px] hover:text-[#14806f] transition-colors">
                      {"0393312336"}
                    </a>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5">
                      <AssetImage alt="Location" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vuesax-linear-location.svg" />
                    </div>
                    <p className="font-normal text-[#4a4946] text-[14px] sm:text-[16px] desktop:text-[20px] leading-[20px] sm:leading-[24px] desktop:leading-[28px]">
                      {"Hoằng Hóa, Thanh Hóa"}
                    </p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <p className="font-bold text-[#4a4946] text-[17px] sm:text-[20px] desktop:text-[24px] leading-[24px] sm:leading-[28px] desktop:leading-[32px] tracking-[0.002em]">
                    {"Chi nhánh Cầu Diễn - Hà Nội"}
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 shrink-0">
                      <AssetImage alt="Call" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vuesax-linear-call1.svg" />
                    </div>
                    <a href="tel:0393312336" className="font-normal text-[#4a4946] text-[15px] sm:text-[17px] desktop:text-[20px] leading-[22px] sm:leading-[26px] desktop:leading-[28px] hover:text-[#14806f] transition-colors">
                      {"0393312336"}
                    </a>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5">
                      <AssetImage alt="Location" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vuesax-linear-location.svg" />
                    </div>
                    <p className="font-normal text-[#4a4946] text-[14px] sm:text-[16px] desktop:text-[20px] leading-[20px] sm:leading-[24px] desktop:leading-[28px]">
                      {"Cầu Diễn, Hà Nội"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2 sm:pt-3">
              <Link prefetch={false} className="w-full sm:w-[298px] h-[44px] bg-[#14806f] hover:bg-[#0f685a] text-white rounded-[5px] inline-flex items-center justify-center gap-2.5 shadow-sm transition-all text-[16px] sm:text-[18px] desktop:text-[20px] font-semibold" href="/lien-he">
                <div className="relative w-5 h-5 shrink-0">
                  <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vuesax-linear-send2.svg" />
                </div>
                <span>
                  {"Liên hệ với chúng tôi"}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#14806f] min-h-[50px] sm:h-[60px] desktop:h-[80px] w-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="container-fig mx-auto w-full flex flex-col sm:flex-row items-center gap-2 sm:gap-5 text-white font-normal text-[14px] sm:text-[15px] desktop:text-[16px] leading-[24px] tracking-[0.001em] text-center sm:text-left">
          <p>
            {"© ™ 2026 Tâm Như Thiết kế bởi @ThieuDung"}
          </p>
          <div className="hidden sm:block w-[1px] h-3 bg-white/80 shrink-0" />
          <Link prefetch={false} className="hover:underline text-white" href="/cam-nang">
            {"Cẩm nang sức khoẻ"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
