import Link from "next/link";
import { AssetImage } from "@/components/asset-image";

export function MyCoursesPage() {
  return (
    <div className="bg-[#f3f3f3] pt-10 sm:pt-14 lg:pt-20 pb-12 sm:pb-16 lg:pb-[120px]">
      <div className="space-y-10 lg:space-y-0">
        <section className="relative overflow-visible py-4 sm:py-6 lg:py-8">
          <div className="container-fig mx-auto px-4 sm:px-6 lg:px-8 desktop:px-0 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 xl:gap-[83px]">
            <div data-image-reveal className="relative shrink-0 w-[300px] h-[353px] sm:w-[380px] sm:h-[447px] lg:w-[450px] lg:h-[529px] mx-auto lg:mx-0">
              <div className="absolute left-0 top-0 w-[450px] h-[529px] origin-top-left scale-[0.6667] sm:scale-[0.8444] lg:scale-100">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none scale-x-[-1]">
                  <div className="absolute left-0 top-[113.5px] w-[450px] h-[415.5px]">
                    <AssetImage alt="" loading="lazy" decoding="async" className="object-fill" fill src="/assets/figma/training-ellipse22.svg" />
                  </div>
                  <div className="absolute left-[27px] top-[183px] w-[21px] h-[24px]">
                    <AssetImage alt="" loading="lazy" decoding="async" className="object-fill" fill src="/assets/figma/training-ellipse23.svg" />
                  </div>
                </div>
                <div className="absolute left-[35px] top-[114px] w-[380px] h-[380px] rounded-full bg-[#14806f]" />
                <div className="absolute left-[35px] top-[114px] w-[380px] h-[380px] overflow-hidden rounded-full">
                  <div className="absolute left-[33px] top-[-114px] w-[316px] h-[655px]">
                    <AssetImage alt="" loading="lazy" decoding="async" className="object-cover" fill src="/assets/figma/training-instructor.png" />
                  </div>
                </div>
                <div className="absolute left-[68px] top-0 w-[316px] h-[376px] overflow-hidden pointer-events-none">
                  <div className="absolute left-0 top-0 w-full h-[655px]">
                    <AssetImage alt="Giảng viên Dr. Tâm Như" decoding="async" className="object-cover" fill src="/assets/figma/training-instructor.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex-1 w-full max-w-[1080px] min-w-0 lg:mt-[37px]">
              <div aria-hidden="true" className="absolute -top-[65px] sm:-top-[95px] lg:-top-[115px] desktop:-top-[131px] -right-[15px] sm:-right-[35px] desktop:-right-[64px] w-[140px] h-[107px] sm:w-[190px] sm:h-[145px] desktop:w-[246px] desktop:h-[188px] pointer-events-none select-none z-0">
                <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/training-quote-mark.svg" />
              </div>
              <figure className="relative z-10 rounded-[16px] sm:rounded-[20px] border-2 border-[#4a4946] px-6 sm:px-8 desktop:px-[40px] pt-8 sm:pt-9 desktop:pt-10 pb-6 sm:pb-7 desktop:pb-10 min-h-[220px] sm:min-h-[260px] lg:min-h-[300px] desktop:min-h-[320px] flex flex-col justify-center">
                <figcaption className="absolute -top-[18px] sm:-top-[22px] desktop:-top-[24px] left-5 sm:left-8 desktop:left-[31px] bg-[#f3f3f3] px-2.5 sm:px-3.5 flex items-center z-20">
                  <span className="font-bold text-[#1d1b18] text-[22px] sm:text-[28px] lg:text-[32px] desktop:text-[40px] leading-tight desktop:leading-[48px] tracking-[0.005em] whitespace-nowrap">
                    {"Dr. Tâm Như"}
                  </span>
                </figcaption>
                <div className="w-full [container-type:inline-size]">
                  <blockquote className="relative z-10 font-semibold text-[#4a4946] opacity-80 text-[clamp(15.5px,3.2cqw,32px)] leading-[clamp(24px,4cqw,40px)] text-justify tracking-[0.002em] select-none">
                    {"Với hơn 15 năm nghiên cứu và trực tiếp thực hành trên nhiều bệnh nhân cơ xương khớp, tôi xây dựng chương trình đào tạo theo hướng hiểu đúng cơ thể – đánh giá đúng vấn đề – lựa chọn đúng kỹ thuật. Học viên không chỉ học động tác, mà học cách tư duy để có thể ứng dụng thực tế và làm nghề một cách bài bản."}
                  </blockquote>
                </div>
              </figure>
            </div>
          </div>
        </section>
        <div className="lg:-mt-[6px]">
          <section>
            <div className="container-fig mx-auto px-4 sm:px-6 lg:px-8 desktop:px-0">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
                <div>
                  <p className="font-bold text-[#14806f] text-[13px] sm:text-[14px] desktop:text-[clamp(18px,1.25vw,24px)] desktop:leading-[clamp(24px,1.667vw,32px)] uppercase tracking-wider">
                    {"Khóa đào tạo"}
                  </p>
                  <h2 className="mt-1 font-bold text-[#1d1b18] text-[22px] sm:text-[28px] xl:text-[32px] leading-[30px] sm:leading-[36px] xl:leading-[40px] desktop:text-[clamp(42px,2.9167vw,56px)] desktop:leading-[clamp(48px,3.333vw,64px)] tracking-[0.2px]">
                    {"Hiểu đúng con người, "}
                    <span className="inline sm:block">
                      {"nắm chắc kỹ thuật"}
                    </span>
                  </h2>
                </div>
                <nav aria-label="Danh sách khoá học" className="flex items-center gap-2 sm:gap-3">
                  <Link prefetch={false} className="rounded-[6px] border border-[#14806f] px-3.5 py-1.5 font-semibold text-[13px] sm:text-[14px] leading-[20px] transition-colors cursor-pointer bg-white text-[#14806f] hover:bg-[#14806f]/10" href="/dao-tao">
                    {"Khoá học khác"}
                  </Link>
                  <Link prefetch={false} aria-current="page" className="rounded-[6px] border border-[#14806f] px-3.5 py-1.5 font-semibold text-[13px] sm:text-[14px] leading-[20px] transition-colors cursor-pointer bg-[#14806f] text-white" href="/dao-tao3fb1?tab=mine">
                    {"Khoá học của bạn"}
                  </Link>
                </nav>
              </div>
              <div className="mt-8 rounded-[16px] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] px-6 py-12 text-center">
                <p className="font-semibold text-[#4a4946] text-[15px] sm:text-[16px] leading-[24px]">
                  {"Vui lòng đăng nhập để xem các khoá học của bạn."}
                </p>
                <button type="button" className="mt-4 inline-block rounded-[8px] bg-[#14806f] px-5 py-2 font-semibold text-white text-[14px] hover:bg-[#0f685a] transition-colors cursor-pointer">
                  {"Đăng nhập"}
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
