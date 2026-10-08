import Link from "next/link";
import { AssetImage } from "@/components/asset-image";

export function HandbookPage() {
  return (
    <div className="bg-[#f3f3f3] pt-6 sm:pt-10 pb-10 sm:pb-14">
      <div className="container-fig desktop:!max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 desktop:px-0">
        <header className="text-center">
          <div className="max-w-[1080px] desktop:max-w-[1140px] mx-auto">
            <p className="font-bold text-[#14806f] text-[13px] sm:text-[14px] desktop:text-[clamp(18px,1.25vw,24px)] desktop:leading-[clamp(24px,1.667vw,32px)] uppercase tracking-wider">
              {"Cẩm nang"}
            </p>
            <h1 className="mt-1 font-bold text-[#1d1b18] text-[24px] sm:text-[30px] xl:text-[34px] leading-[32px] sm:leading-[38px] xl:leading-[42px] desktop:text-[clamp(42px,2.9167vw,56px)] desktop:leading-[clamp(48px,3.333vw,64px)] tracking-[0.2px]">
              {"Tin tức sức khoẻ"}
            </h1>
            <div className="mt-3 sm:mt-4 font-normal text-[#4a4946] text-[14px] sm:text-[15px] lg:text-[15.5px] xl:text-[16px] desktop:text-[16.5px] leading-[22px] sm:leading-[24px] desktop:leading-[25px] text-center space-y-0">
              <p className="text-balance m-0 p-0">
                {"Đừng bỏ lỡ! Kho kiến thức cùng bí quyết chăm sóc cột sống và xương khớp khỏe mạnh từ các chuyên gia."}
              </p>
              <p className="text-balance m-0 p-0">
                {"Hãy xây dựng thói quen tầm soát định kỳ và không chủ quan khi có triệu chứng bất thường."}
              </p>
              <p className="text-balance m-0 p-0">
                {"Liên hệ ngay với Tâm Như để được hỗ trợ tư vấn!"}
              </p>
            </div>
          </div>
        </header>
        <div className="mt-6 w-full mx-auto">
          <div className="w-full">
            <div className="flex md:hidden flex-nowrap items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-1 px-1 -mx-1" role="group" aria-label="Chủ đề bài viết">
              <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=tri-lieu-than-kinh-cot-song">
                {"Trị liệu thần kinh cột sống"}
              </Link>
              <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=thoat-vi-dia-dem">
                {"Thoát vị đĩa đệm"}
              </Link>
              <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=dau-lung">
                {"Đau lưng"}
              </Link>
              <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=dau-co-vai-gay">
                {"Đau cổ vai gáy"}
              </Link>
              <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=chan-thuong-the-thao">
                {"Chấn thương thể thao"}
              </Link>
              <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=dau-co-xuong-khop">
                {"Đau cơ xương khớp"}
              </Link>
              <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=dau-dau-goi">
                {"Đau đầu gối"}
              </Link>
              <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=dau-than-kinh-toa">
                {"Đau thần kinh toạ"}
              </Link>
              <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=thoai-hoa-cot-song">
                {"Thoái hoá cột sống"}
              </Link>
              <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=van-de-ve-khop">
                {"Vấn đề về khớp"}
              </Link>
              <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=te-chan-te-tay">
                {"Tê chân tê tay"}
              </Link>
              <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=lech-veo-cot-song">
                {"Lệch vẹo cột sống"}
              </Link>
              <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=benh-ly-khac">
                {"Bệnh lý khác"}
              </Link>
            </div>
            <div className="hidden md:flex flex-col items-center gap-2 sm:gap-2.5 desktop:gap-[clamp(7.5px,0.521vw,10px)] w-full">
              <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap w-full py-0.5">
                <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=tri-lieu-than-kinh-cot-song">
                  {"Trị liệu thần kinh cột sống"}
                </Link>
                <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=thoat-vi-dia-dem">
                  {"Thoát vị đĩa đệm"}
                </Link>
                <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=dau-lung">
                  {"Đau lưng"}
                </Link>
                <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=dau-co-vai-gay">
                  {"Đau cổ vai gáy"}
                </Link>
                <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=chan-thuong-the-thao">
                  {"Chấn thương thể thao"}
                </Link>
                <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=dau-co-xuong-khop">
                  {"Đau cơ xương khớp"}
                </Link>
              </div>
              <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap w-full py-0.5">
                <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=dau-dau-goi">
                  {"Đau đầu gối"}
                </Link>
                <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=dau-than-kinh-toa">
                  {"Đau thần kinh toạ"}
                </Link>
                <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=thoai-hoa-cot-song">
                  {"Thoái hoá cột sống"}
                </Link>
                <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=van-de-ve-khop">
                  {"Vấn đề về khớp"}
                </Link>
                <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=te-chan-te-tay">
                  {"Tê chân tê tay"}
                </Link>
                <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=lech-veo-cot-song">
                  {"Lệch vẹo cột sống"}
                </Link>
                <Link prefetch={false} className="rounded-[40px] border border-[#14806f] px-2.5 sm:px-3 lg:px-3.5 desktop:px-4 py-1 sm:py-1.5 desktop:py-1.5 font-medium sm:font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] desktop:text-[14.5px] leading-[20px] sm:leading-[22px] desktop:leading-[22px] tracking-[0.01px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-[#14806f] hover:bg-[#14806f]/10" href="/cam-nang?tag=benh-ly-khac">
                  {"Bệnh lý khác"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-10 grid grid-cols-1 xl:grid-cols-[1fr_340px] desktop:grid-cols-[1fr_360px] gap-6 xl:gap-8 desktop:gap-10 items-start">
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-3 sm:gap-5 desktop:gap-6 content-start">
              <article className="group flex flex-col overflow-hidden rounded-[14px] sm:rounded-[16px] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0px_6px_20px_rgba(0,0,0,0.08)]">
                <Link prefetch={false} className="relative block h-[120px] xs:h-[140px] sm:h-[180px] xl:h-[200px] desktop:h-[240px] overflow-hidden" href="/cam-nang/cang-co-la-gi-nguyen-nhan-va-cach-thu-gian-co">
                  <AssetImage alt="Căng cơ là gì? Nguyên nhân và cách thư giãn cơ..." loading="lazy" decoding="async" className="object-cover transition-transform duration-500 group-hover:scale-105" fill src="/assets/figma/blog-post-01.jpg" />
                </Link>
                <div className="flex flex-1 flex-col p-2.5 xs:p-3 sm:p-5 desktop:p-6">
                  <h3 className="font-bold text-[#1d1b18] text-[14.5px] xs:text-[15.5px] sm:text-[16.5px] xl:text-[18px] desktop:text-[20px] leading-[20px] xs:leading-[22px] sm:leading-[25px] desktop:leading-[28px] line-clamp-2">
                    <Link prefetch={false} className="hover:text-[#14806f] transition-colors" href="/cam-nang/cang-co-la-gi-nguyen-nhan-va-cach-thu-gian-co">
                      {"Căng cơ là gì? Nguyên nhân và cách thư giãn cơ..."}
                    </Link>
                  </h3>
                  <p className="hidden sm:block mt-2 font-normal text-[#4a4946] opacity-85 text-[13.5px] sm:text-[14px] xl:text-[14.5px] desktop:text-[15px] leading-[20px] sm:leading-[22px] desktop:leading-[23px] line-clamp-2">
                    {"Căng cơ là tình trạng khá phổ biến, có thể xuất hiện sau khi vận động quá sức, ngồi hoặc đứng lâu, làm việc sai tư..."}
                  </p>
                  <Link prefetch={false} className="mt-auto pt-2.5 sm:pt-4 self-start inline-flex items-center gap-1.5 font-semibold text-[#14806f] text-[13px] sm:text-[14px] desktop:text-[15px] hover:text-[#0f685a] transition-colors" href="/cam-nang/cang-co-la-gi-nguyen-nhan-va-cach-thu-gian-co">
                    <span>
                      {"Xem chi tiết"}
                    </span>
                    <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform group-hover:translate-x-1">
                      <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/blog-arrow-right.svg" />
                    </div>
                  </Link>
                </div>
              </article>
              <article className="group flex flex-col overflow-hidden rounded-[14px] sm:rounded-[16px] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0px_6px_20px_rgba(0,0,0,0.08)]">
                <Link prefetch={false} className="relative block h-[120px] xs:h-[140px] sm:h-[180px] xl:h-[200px] desktop:h-[240px] overflow-hidden" href="/cam-nang/da-thong-kinh-lac-la-gi-nhung-ai-nen-thuc-hien">
                  <AssetImage alt="Đả thông kinh lạc là gì? Những ai nên thực hiện?" loading="lazy" decoding="async" className="object-cover transition-transform duration-500 group-hover:scale-105" fill src="/assets/figma/blog-post-02.jpg" />
                </Link>
                <div className="flex flex-1 flex-col p-2.5 xs:p-3 sm:p-5 desktop:p-6">
                  <h3 className="font-bold text-[#1d1b18] text-[14.5px] xs:text-[15.5px] sm:text-[16.5px] xl:text-[18px] desktop:text-[20px] leading-[20px] xs:leading-[22px] sm:leading-[25px] desktop:leading-[28px] line-clamp-2">
                    <Link prefetch={false} className="hover:text-[#14806f] transition-colors" href="/cam-nang/da-thong-kinh-lac-la-gi-nhung-ai-nen-thuc-hien">
                      {"Đả thông kinh lạc là gì? Những ai nên thực hiện?"}
                    </Link>
                  </h3>
                  <p className="hidden sm:block mt-2 font-normal text-[#4a4946] opacity-85 text-[13.5px] sm:text-[14px] xl:text-[14.5px] desktop:text-[15px] leading-[20px] sm:leading-[22px] desktop:leading-[23px] line-clamp-2">
                    {"Căng cơ là tình trạng khá phổ biến, có thể xuất hiện sau khi vận động quá sức, ngồi hoặc đứng lâu, làm việc sai tư..."}
                  </p>
                  <Link prefetch={false} className="mt-auto pt-2.5 sm:pt-4 self-start inline-flex items-center gap-1.5 font-semibold text-[#14806f] text-[13px] sm:text-[14px] desktop:text-[15px] hover:text-[#0f685a] transition-colors" href="/cam-nang/da-thong-kinh-lac-la-gi-nhung-ai-nen-thuc-hien">
                    <span>
                      {"Xem chi tiết"}
                    </span>
                    <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform group-hover:translate-x-1">
                      <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/blog-arrow-right.svg" />
                    </div>
                  </Link>
                </div>
              </article>
              <article className="group flex flex-col overflow-hidden rounded-[14px] sm:rounded-[16px] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0px_6px_20px_rgba(0,0,0,0.08)]">
                <Link prefetch={false} className="relative block h-[120px] xs:h-[140px] sm:h-[180px] xl:h-[200px] desktop:h-[240px] overflow-hidden" href="/cam-nang/dau-moi-vai-gay-nguyen-nhan-thuong-gap">
                  <AssetImage alt="Đau mỏi vai gáy: Nguyên nhân thường gặp..." loading="lazy" decoding="async" className="object-cover transition-transform duration-500 group-hover:scale-105" fill src="/assets/figma/blog-post-03.jpg" />
                </Link>
                <div className="flex flex-1 flex-col p-2.5 xs:p-3 sm:p-5 desktop:p-6">
                  <h3 className="font-bold text-[#1d1b18] text-[14.5px] xs:text-[15.5px] sm:text-[16.5px] xl:text-[18px] desktop:text-[20px] leading-[20px] xs:leading-[22px] sm:leading-[25px] desktop:leading-[28px] line-clamp-2">
                    <Link prefetch={false} className="hover:text-[#14806f] transition-colors" href="/cam-nang/dau-moi-vai-gay-nguyen-nhan-thuong-gap">
                      {"Đau mỏi vai gáy: Nguyên nhân thường gặp..."}
                    </Link>
                  </h3>
                  <p className="hidden sm:block mt-2 font-normal text-[#4a4946] opacity-85 text-[13.5px] sm:text-[14px] xl:text-[14.5px] desktop:text-[15px] leading-[20px] sm:leading-[22px] desktop:leading-[23px] line-clamp-2">
                    {"Xuất khẩu hàng hóa bằng đường hàng không sẽ giúp cho việc vận chuyển hàng hóa diễn ra nhanh chóng và ..."}
                  </p>
                  <Link prefetch={false} className="mt-auto pt-2.5 sm:pt-4 self-start inline-flex items-center gap-1.5 font-semibold text-[#14806f] text-[13px] sm:text-[14px] desktop:text-[15px] hover:text-[#0f685a] transition-colors" href="/cam-nang/dau-moi-vai-gay-nguyen-nhan-thuong-gap">
                    <span>
                      {"Xem chi tiết"}
                    </span>
                    <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform group-hover:translate-x-1">
                      <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/blog-arrow-right.svg" />
                    </div>
                  </Link>
                </div>
              </article>
              <article className="group flex flex-col overflow-hidden rounded-[14px] sm:rounded-[16px] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0px_6px_20px_rgba(0,0,0,0.08)]">
                <Link prefetch={false} className="relative block h-[120px] xs:h-[140px] sm:h-[180px] xl:h-[200px] desktop:h-[240px] overflow-hidden" href="/cam-nang/dau-than-kinh-toa-dau-hieu-nhan-biet">
                  <AssetImage alt="Đau thần kinh tọa: Dấu hiệu nhận biết và..." loading="lazy" decoding="async" className="object-cover transition-transform duration-500 group-hover:scale-105" fill src="/assets/figma/blog-post-05.jpg" />
                </Link>
                <div className="flex flex-1 flex-col p-2.5 xs:p-3 sm:p-5 desktop:p-6">
                  <h3 className="font-bold text-[#1d1b18] text-[14.5px] xs:text-[15.5px] sm:text-[16.5px] xl:text-[18px] desktop:text-[20px] leading-[20px] xs:leading-[22px] sm:leading-[25px] desktop:leading-[28px] line-clamp-2">
                    <Link prefetch={false} className="hover:text-[#14806f] transition-colors" href="/cam-nang/dau-than-kinh-toa-dau-hieu-nhan-biet">
                      {"Đau thần kinh tọa: Dấu hiệu nhận biết và..."}
                    </Link>
                  </h3>
                  <p className="hidden sm:block mt-2 font-normal text-[#4a4946] opacity-85 text-[13.5px] sm:text-[14px] xl:text-[14.5px] desktop:text-[15px] leading-[20px] sm:leading-[22px] desktop:leading-[23px] line-clamp-2">
                    {"Xuất khẩu hàng hóa bằng đường hàng không sẽ giúp cho việc vận chuyển hàng hóa diễn ra nhanh chóng và ..."}
                  </p>
                  <Link prefetch={false} className="mt-auto pt-2.5 sm:pt-4 self-start inline-flex items-center gap-1.5 font-semibold text-[#14806f] text-[13px] sm:text-[14px] desktop:text-[15px] hover:text-[#0f685a] transition-colors" href="/cam-nang/dau-than-kinh-toa-dau-hieu-nhan-biet">
                    <span>
                      {"Xem chi tiết"}
                    </span>
                    <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform group-hover:translate-x-1">
                      <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/blog-arrow-right.svg" />
                    </div>
                  </Link>
                </div>
              </article>
              <article className="group flex flex-col overflow-hidden rounded-[14px] sm:rounded-[16px] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0px_6px_20px_rgba(0,0,0,0.08)]">
                <Link prefetch={false} className="relative block h-[120px] xs:h-[140px] sm:h-[180px] xl:h-[200px] desktop:h-[240px] overflow-hidden" href="/cam-nang/cot-song-khoe-anh-huong-the-nao-den-chat-luong-song">
                  <AssetImage alt="Cột sống khỏe ảnh hưởng thế nào đến chất..." loading="lazy" decoding="async" className="object-cover transition-transform duration-500 group-hover:scale-105" fill src="/assets/figma/blog-post-04.jpg" />
                </Link>
                <div className="flex flex-1 flex-col p-2.5 xs:p-3 sm:p-5 desktop:p-6">
                  <h3 className="font-bold text-[#1d1b18] text-[14.5px] xs:text-[15.5px] sm:text-[16.5px] xl:text-[18px] desktop:text-[20px] leading-[20px] xs:leading-[22px] sm:leading-[25px] desktop:leading-[28px] line-clamp-2">
                    <Link prefetch={false} className="hover:text-[#14806f] transition-colors" href="/cam-nang/cot-song-khoe-anh-huong-the-nao-den-chat-luong-song">
                      {"Cột sống khỏe ảnh hưởng thế nào đến chất..."}
                    </Link>
                  </h3>
                  <p className="hidden sm:block mt-2 font-normal text-[#4a4946] opacity-85 text-[13.5px] sm:text-[14px] xl:text-[14.5px] desktop:text-[15px] leading-[20px] sm:leading-[22px] desktop:leading-[23px] line-clamp-2">
                    {"Xuất khẩu hàng hóa bằng đường hàng không sẽ giúp cho việc vận chuyển hàng hóa diễn ra nhanh chóng và ..."}
                  </p>
                  <Link prefetch={false} className="mt-auto pt-2.5 sm:pt-4 self-start inline-flex items-center gap-1.5 font-semibold text-[#14806f] text-[13px] sm:text-[14px] desktop:text-[15px] hover:text-[#0f685a] transition-colors" href="/cam-nang/cot-song-khoe-anh-huong-the-nao-den-chat-luong-song">
                    <span>
                      {"Xem chi tiết"}
                    </span>
                    <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform group-hover:translate-x-1">
                      <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/blog-arrow-right.svg" />
                    </div>
                  </Link>
                </div>
              </article>
              <article className="group flex flex-col overflow-hidden rounded-[14px] sm:rounded-[16px] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0px_6px_20px_rgba(0,0,0,0.08)]">
                <Link prefetch={false} className="relative block h-[120px] xs:h-[140px] sm:h-[180px] xl:h-[200px] desktop:h-[240px] overflow-hidden" href="/cam-nang/dau-lung-keo-dai-nhung-nguyen-nhan-ban-can-biet">
                  <AssetImage alt="Đau lưng kéo dài: Những nguyên nhân bạn..." loading="lazy" decoding="async" className="object-cover transition-transform duration-500 group-hover:scale-105" fill src="/assets/figma/blog-post-06.jpg" />
                </Link>
                <div className="flex flex-1 flex-col p-2.5 xs:p-3 sm:p-5 desktop:p-6">
                  <h3 className="font-bold text-[#1d1b18] text-[14.5px] xs:text-[15.5px] sm:text-[16.5px] xl:text-[18px] desktop:text-[20px] leading-[20px] xs:leading-[22px] sm:leading-[25px] desktop:leading-[28px] line-clamp-2">
                    <Link prefetch={false} className="hover:text-[#14806f] transition-colors" href="/cam-nang/dau-lung-keo-dai-nhung-nguyen-nhan-ban-can-biet">
                      {"Đau lưng kéo dài: Những nguyên nhân bạn..."}
                    </Link>
                  </h3>
                  <p className="hidden sm:block mt-2 font-normal text-[#4a4946] opacity-85 text-[13.5px] sm:text-[14px] xl:text-[14.5px] desktop:text-[15px] leading-[20px] sm:leading-[22px] desktop:leading-[23px] line-clamp-2">
                    {"Xuất khẩu hàng hóa bằng đường hàng không sẽ giúp cho việc vận chuyển hàng hóa diễn ra nhanh chóng và ..."}
                  </p>
                  <Link prefetch={false} className="mt-auto pt-2.5 sm:pt-4 self-start inline-flex items-center gap-1.5 font-semibold text-[#14806f] text-[13px] sm:text-[14px] desktop:text-[15px] hover:text-[#0f685a] transition-colors" href="/cam-nang/dau-lung-keo-dai-nhung-nguyen-nhan-ban-can-biet">
                    <span>
                      {"Xem chi tiết"}
                    </span>
                    <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform group-hover:translate-x-1">
                      <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/blog-arrow-right.svg" />
                    </div>
                  </Link>
                </div>
              </article>
              <article className="group flex flex-col overflow-hidden rounded-[14px] sm:rounded-[16px] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0px_6px_20px_rgba(0,0,0,0.08)]">
                <Link prefetch={false} className="relative block h-[120px] xs:h-[140px] sm:h-[180px] xl:h-[200px] desktop:h-[240px] overflow-hidden" href="/cam-nang/lam-sao-de-lua-chon-phuong-phap-cham-soc">
                  <AssetImage alt="Làm sao để lựa chọn phương pháp chăm..." loading="lazy" decoding="async" className="object-cover transition-transform duration-500 group-hover:scale-105" fill src="/assets/figma/blog-post-07.jpg" />
                </Link>
                <div className="flex flex-1 flex-col p-2.5 xs:p-3 sm:p-5 desktop:p-6">
                  <h3 className="font-bold text-[#1d1b18] text-[14.5px] xs:text-[15.5px] sm:text-[16.5px] xl:text-[18px] desktop:text-[20px] leading-[20px] xs:leading-[22px] sm:leading-[25px] desktop:leading-[28px] line-clamp-2">
                    <Link prefetch={false} className="hover:text-[#14806f] transition-colors" href="/cam-nang/lam-sao-de-lua-chon-phuong-phap-cham-soc">
                      {"Làm sao để lựa chọn phương pháp chăm..."}
                    </Link>
                  </h3>
                  <p className="hidden sm:block mt-2 font-normal text-[#4a4946] opacity-85 text-[13.5px] sm:text-[14px] xl:text-[14.5px] desktop:text-[15px] leading-[20px] sm:leading-[22px] desktop:leading-[23px] line-clamp-2">
                    {"Xuất khẩu hàng hóa bằng đường hàng không sẽ giúp cho việc vận chuyển hàng hóa diễn ra nhanh chóng và ..."}
                  </p>
                  <Link prefetch={false} className="mt-auto pt-2.5 sm:pt-4 self-start inline-flex items-center gap-1.5 font-semibold text-[#14806f] text-[13px] sm:text-[14px] desktop:text-[15px] hover:text-[#0f685a] transition-colors" href="/cam-nang/lam-sao-de-lua-chon-phuong-phap-cham-soc">
                    <span>
                      {"Xem chi tiết"}
                    </span>
                    <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform group-hover:translate-x-1">
                      <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/blog-arrow-right.svg" />
                    </div>
                  </Link>
                </div>
              </article>
              <article className="group flex flex-col overflow-hidden rounded-[14px] sm:rounded-[16px] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0px_6px_20px_rgba(0,0,0,0.08)]">
                <Link prefetch={false} className="relative block h-[120px] xs:h-[140px] sm:h-[180px] xl:h-[200px] desktop:h-[240px] overflow-hidden" href="/cam-nang/dau-moi-co-the-nguyen-nhan-va-cach-cai-thien">
                  <AssetImage alt="Đau mỏi cơ thể: Nguyên nhân và cách cải thiện..." loading="lazy" decoding="async" className="object-cover transition-transform duration-500 group-hover:scale-105" fill src="/assets/figma/blog-post-08.jpg" />
                </Link>
                <div className="flex flex-1 flex-col p-2.5 xs:p-3 sm:p-5 desktop:p-6">
                  <h3 className="font-bold text-[#1d1b18] text-[14.5px] xs:text-[15.5px] sm:text-[16.5px] xl:text-[18px] desktop:text-[20px] leading-[20px] xs:leading-[22px] sm:leading-[25px] desktop:leading-[28px] line-clamp-2">
                    <Link prefetch={false} className="hover:text-[#14806f] transition-colors" href="/cam-nang/dau-moi-co-the-nguyen-nhan-va-cach-cai-thien">
                      {"Đau mỏi cơ thể: Nguyên nhân và cách cải thiện..."}
                    </Link>
                  </h3>
                  <p className="hidden sm:block mt-2 font-normal text-[#4a4946] opacity-85 text-[13.5px] sm:text-[14px] xl:text-[14.5px] desktop:text-[15px] leading-[20px] sm:leading-[22px] desktop:leading-[23px] line-clamp-2">
                    {"Xuất khẩu hàng hóa bằng đường hàng không sẽ giúp cho việc vận chuyển hàng hóa diễn ra nhanh chóng và ..."}
                  </p>
                  <Link prefetch={false} className="mt-auto pt-2.5 sm:pt-4 self-start inline-flex items-center gap-1.5 font-semibold text-[#14806f] text-[13px] sm:text-[14px] desktop:text-[15px] hover:text-[#0f685a] transition-colors" href="/cam-nang/dau-moi-co-the-nguyen-nhan-va-cach-cai-thien">
                    <span>
                      {"Xem chi tiết"}
                    </span>
                    <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform group-hover:translate-x-1">
                      <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/blog-arrow-right.svg" />
                    </div>
                  </Link>
                </div>
              </article>
            </div>
            <div className="mt-8 sm:mt-12 flex justify-center">
              <nav aria-label="Phân trang" className="flex items-center justify-center gap-2 xs:gap-4 sm:gap-6 md:gap-8 select-none">
                <span aria-disabled="true" aria-label="Trang trước" className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-[10px] sm:rounded-[12px] border border-[#4a4946] bg-white flex items-center justify-center text-[#4a4946] select-none cursor-default pointer-events-none opacity-40">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="14 18 8 12 14 6" />
                  </svg>
                </span>
                <span aria-current="page" className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-[10px] sm:rounded-[12px] bg-[#14806f] text-white font-medium text-[16px] sm:text-[18px] flex items-center justify-center shadow-sm select-none">
                  {"1"}
                </span>
                <Link prefetch={false} className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-[10px] sm:rounded-[12px] border border-transparent hover:border-[#14806f]/40 flex items-center justify-center text-[16px] sm:text-[18px] font-medium text-[#1d1b18] hover:text-[#14806f] transition-all" href="/cam-nang?page=2">
                  {"2"}
                </Link>
                <Link prefetch={false} className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-[10px] sm:rounded-[12px] border border-transparent hover:border-[#14806f]/40 flex items-center justify-center text-[16px] sm:text-[18px] font-medium text-[#1d1b18] hover:text-[#14806f] transition-all" href="/cam-nang?page=3">
                  {"3"}
                </Link>
                <Link prefetch={false} aria-label="Trang sau" className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-[10px] sm:rounded-[12px] border border-[#4a4946] bg-white flex items-center justify-center text-[#4a4946] select-none hover:border-[#14806f] hover:text-[#14806f] transition-all active:scale-95 cursor-pointer" href="/cam-nang?page=2">
                  <svg className="w-5 h-5 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="10 18 16 12 10 6" />
                  </svg>
                </Link>
              </nav>
            </div>
          </div>
          <aside className="w-full max-w-[340px] desktop:max-w-[360px] mx-auto xl:mx-0">
            <Link prefetch={false} className="relative block w-full aspect-square overflow-hidden rounded-[10px] bg-[#d9d9d9]" href="/lien-he">
              <AssetImage alt="Trải nghiệm giãn cơ tại Tâm Như" loading="lazy" decoding="async" className="object-cover" fill src="/assets/figma/blog-banner-ad.png" />
            </Link>
            <h2 className="mt-6 xl:mt-8 font-bold text-[#14806f] text-[17px] sm:text-[18px] desktop:text-[20px] leading-[24px] desktop:leading-[28px]">
              {"Tin xem nhiều"}
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link prefetch={false} className="group flex items-start gap-3" href="/cam-nang/da-thong-kinh-lac-la-gi-nhung-ai-nen-thuc-hien">
                  <div className="relative h-[72px] w-[105px] desktop:h-[78px] desktop:w-[114px] shrink-0 overflow-hidden rounded-[8px] bg-[#d9d9d9]">
                    <AssetImage alt="" loading="lazy" decoding="async" className="object-cover" fill src="/assets/figma/blog-popular-01.jpg" />
                  </div>
                  <span className="font-semibold text-[#4a4946] text-[13.5px] sm:text-[14px] desktop:text-[14.5px] leading-[20px] desktop:leading-[22px] line-clamp-3 group-hover:text-[#14806f] transition-colors">
                    {"Đả thông kinh lạc là gì? Những ai nên thực hiện?"}
                  </span>
                </Link>
              </li>
              <li>
                <Link prefetch={false} className="group flex items-start gap-3" href="/cam-nang/dau-than-kinh-toa-dau-hieu-nhan-biet">
                  <div className="relative h-[72px] w-[105px] desktop:h-[78px] desktop:w-[114px] shrink-0 overflow-hidden rounded-[8px] bg-[#d9d9d9]">
                    <AssetImage alt="" loading="lazy" decoding="async" className="object-cover" fill src="/assets/figma/blog-popular-02.jpg" />
                  </div>
                  <span className="font-semibold text-[#4a4946] text-[13.5px] sm:text-[14px] desktop:text-[14.5px] leading-[20px] desktop:leading-[22px] line-clamp-3 group-hover:text-[#14806f] transition-colors">
                    {"Đau thần kinh tọa: Dấu hiệu nhận biết và..."}
                  </span>
                </Link>
              </li>
              <li>
                <Link prefetch={false} className="group flex items-start gap-3" href="/cam-nang/da-thong-kinh-lac-la-gi-nhung-ai-nen-thuc-hien">
                  <div className="relative h-[72px] w-[105px] desktop:h-[78px] desktop:w-[114px] shrink-0 overflow-hidden rounded-[8px] bg-[#d9d9d9]">
                    <AssetImage alt="" loading="lazy" decoding="async" className="object-cover" fill src="/assets/figma/blog-popular-03.jpg" />
                  </div>
                  <span className="font-semibold text-[#4a4946] text-[13.5px] sm:text-[14px] desktop:text-[14.5px] leading-[20px] desktop:leading-[22px] line-clamp-3 group-hover:text-[#14806f] transition-colors">
                    {"Đả thông kinh lạc là gì? Những ai nên thực hiện?"}
                  </span>
                </Link>
              </li>
              <li>
                <Link prefetch={false} className="group flex items-start gap-3" href="/cam-nang/dau-than-kinh-toa-dau-hieu-nhan-biet">
                  <div className="relative h-[72px] w-[105px] desktop:h-[78px] desktop:w-[114px] shrink-0 overflow-hidden rounded-[8px] bg-[#d9d9d9]">
                    <AssetImage alt="" loading="lazy" decoding="async" className="object-cover" fill src="/assets/figma/blog-popular-04.jpg" />
                  </div>
                  <span className="font-semibold text-[#4a4946] text-[13.5px] sm:text-[14px] desktop:text-[14.5px] leading-[20px] desktop:leading-[22px] line-clamp-3 group-hover:text-[#14806f] transition-colors">
                    {"Đau thần kinh tọa: Dấu hiệu nhận biết và..."}
                  </span>
                </Link>
              </li>
              <li>
                <Link prefetch={false} className="group flex items-start gap-3" href="/cam-nang/da-thong-kinh-lac-la-gi-nhung-ai-nen-thuc-hien">
                  <div className="relative h-[72px] w-[105px] desktop:h-[78px] desktop:w-[114px] shrink-0 overflow-hidden rounded-[8px] bg-[#d9d9d9]">
                    <AssetImage alt="" loading="lazy" decoding="async" className="object-cover" fill src="/assets/figma/blog-popular-05.jpg" />
                  </div>
                  <span className="font-semibold text-[#4a4946] text-[13.5px] sm:text-[14px] desktop:text-[14.5px] leading-[20px] desktop:leading-[22px] line-clamp-3 group-hover:text-[#14806f] transition-colors">
                    {"Đả thông kinh lạc là gì? Những ai nên thực hiện?"}
                  </span>
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
