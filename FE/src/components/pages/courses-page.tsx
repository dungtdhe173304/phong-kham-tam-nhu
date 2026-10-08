import Link from "next/link";
import { AssetImage } from "@/components/asset-image";

export function CoursesPage() {
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
                  <Link prefetch={false} aria-current="page" className="rounded-[6px] border border-[#14806f] px-3.5 py-1.5 font-semibold text-[13px] sm:text-[14px] leading-[20px] transition-colors cursor-pointer bg-[#14806f] text-white" href="/dao-tao">
                    {"Khoá học khác"}
                  </Link>
                  <Link prefetch={false} className="rounded-[6px] border border-[#14806f] px-3.5 py-1.5 font-semibold text-[13px] sm:text-[14px] leading-[20px] transition-colors cursor-pointer bg-white text-[#14806f] hover:bg-[#14806f]/10" href="/dao-tao3fb1?tab=mine">
                    {"Khoá học của bạn"}
                  </Link>
                </nav>
              </div>
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 xl:gap-6">
                <article className="group flex flex-col overflow-hidden rounded-[16px] 2xl:rounded-[20px] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0px_6px_20px_rgba(0,0,0,0.09)]">
                  <Link prefetch={false} className="relative block w-full aspect-[533/320] overflow-hidden" href="/dao-tao/khoa-1">
                    <AssetImage alt="Khóa học xoa bóp bấm huyệt cơ bản" loading="lazy" decoding="async" className="object-cover transition-transform duration-500 group-hover:scale-105" fill src="/assets/figma/training-course-01.jpg" />
                  </Link>
                  <div className="flex flex-1 flex-col p-4 sm:p-5 2xl:p-5">
                    <h3 className="font-bold text-[#1d1b18] text-[16px] sm:text-[17px] xl:text-[18px] 2xl:text-[20px] leading-[22px] sm:leading-[24px] 2xl:leading-[28px] line-clamp-2">
                      <Link prefetch={false} className="hover:text-[#14806f] transition-colors" href="/dao-tao/khoa-1">
                        {"Khóa học xoa bóp bấm huyệt cơ bản"}
                      </Link>
                    </h3>
                    <p className="hidden sm:block mt-1.5 2xl:mt-2 font-normal text-[#4a4946] opacity-85 text-[13px] sm:text-[13.5px] xl:text-[14px] 2xl:text-[14.5px] leading-[20px] 2xl:leading-[22px] line-clamp-2">
                      {"Khóa học Xoa bóp Bấm huyệt được xây dựng dành cho những người muốn tìm hiểu và thực hành các kỹ thuật chăm sóc cơ thể..."}
                    </p>
                    <div className="mt-auto pt-4 2xl:pt-5">
                      <div className="border-t border-[#4a4946]/15 pt-3.5 2xl:pt-4 flex items-center justify-between gap-2.5 sm:gap-3 2xl:gap-3.5">
                        <div className="min-w-0">
                          <p className="flex items-center gap-1.5 sm:gap-2 font-medium text-[#4a4946] text-[11.5px] sm:text-[12.5px] xl:text-[13.5px] 2xl:text-[14px] leading-tight tracking-[0.002em]">
                            <span className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0">
                              <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/Vòng tròn Đô la.png" />
                            </span>
                            <span className="whitespace-nowrap">
                              {"Chỉ từ: "}
                              <span className="line-through">
                                {"63,550,000 vnđ"}
                              </span>
                            </span>
                          </p>
                          <p className="mt-0.5 2xl:mt-1 font-bold text-[#14806f] text-[16px] sm:text-[18px] xl:text-[20px] 2xl:text-[22px] leading-tight tracking-[0.002em] whitespace-nowrap">
                            {"58,990,000 vnđ"}
                          </p>
                        </div>
                        <Link prefetch={false} className="shrink-0 inline-flex items-center justify-center border-2 border-[#14806f] rounded-[10px] bg-transparent text-[#14806f] font-bold text-[13px] sm:text-[14px] xl:text-[15px] 2xl:text-[16px] tracking-[0.002em] whitespace-nowrap px-4 sm:px-5 h-[42px] sm:h-[46px] xl:h-[48px] 2xl:h-[50px] hover:bg-[#14806f] hover:text-white transition-all duration-300" href="/thanh-toan?course=khoa-1">
                          {"Đặt ngay"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="group flex flex-col overflow-hidden rounded-[16px] 2xl:rounded-[20px] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0px_6px_20px_rgba(0,0,0,0.09)]">
                  <Link prefetch={false} className="relative block w-full aspect-[533/320] overflow-hidden" href="/dao-tao/test">
                    <AssetImage alt="test" loading="lazy" decoding="async" className="object-cover transition-transform duration-500 group-hover:scale-105" fill src="/uploads/images/26043de5-1cfc-4c7d-9e26-cbf14e56288b.jpg" />
                  </Link>
                  <div className="flex flex-1 flex-col p-4 sm:p-5 2xl:p-5">
                    <h3 className="font-bold text-[#1d1b18] text-[16px] sm:text-[17px] xl:text-[18px] 2xl:text-[20px] leading-[22px] sm:leading-[24px] 2xl:leading-[28px] line-clamp-2">
                      <Link prefetch={false} className="hover:text-[#14806f] transition-colors" href="/dao-tao/test">
                        {"test"}
                      </Link>
                    </h3>
                    <p className="hidden sm:block mt-1.5 2xl:mt-2 font-normal text-[#4a4946] opacity-85 text-[13px] sm:text-[13.5px] xl:text-[14px] 2xl:text-[14.5px] leading-[20px] 2xl:leading-[22px] line-clamp-2">
                      {"df"}
                    </p>
                    <div className="mt-auto pt-4 2xl:pt-5">
                      <div className="border-t border-[#4a4946]/15 pt-3.5 2xl:pt-4 flex items-center justify-between gap-2.5 sm:gap-3 2xl:gap-3.5">
                        <div className="min-w-0">
                          <p className="flex items-center gap-1.5 sm:gap-2 font-medium text-[#4a4946] text-[11.5px] sm:text-[12.5px] xl:text-[13.5px] 2xl:text-[14px] leading-tight tracking-[0.002em]">
                            <span className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0">
                              <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/Vòng tròn Đô la.png" />
                            </span>
                            <span className="whitespace-nowrap">
                              {"Chỉ từ: "}
                              <span className="line-through">
                                {"2,000 vnđ"}
                              </span>
                            </span>
                          </p>
                          <p className="mt-0.5 2xl:mt-1 font-bold text-[#14806f] text-[16px] sm:text-[18px] xl:text-[20px] 2xl:text-[22px] leading-tight tracking-[0.002em] whitespace-nowrap">
                            {"2,000 vnđ"}
                          </p>
                        </div>
                        <Link prefetch={false} className="shrink-0 inline-flex items-center justify-center border-2 border-[#14806f] rounded-[10px] bg-transparent text-[#14806f] font-bold text-[13px] sm:text-[14px] xl:text-[15px] 2xl:text-[16px] tracking-[0.002em] whitespace-nowrap px-4 sm:px-5 h-[42px] sm:h-[46px] xl:h-[48px] 2xl:h-[50px] hover:bg-[#14806f] hover:text-white transition-all duration-300" href="/thanh-toan?course=test">
                          {"Đặt ngay"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="group flex flex-col overflow-hidden rounded-[16px] 2xl:rounded-[20px] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0px_6px_20px_rgba(0,0,0,0.09)]">
                  <Link prefetch={false} className="relative block w-full aspect-[533/320] overflow-hidden" href="/dao-tao/khoa-2">
                    <AssetImage alt="Khóa học xoa bóp bấm huyệt cơ bản" loading="lazy" decoding="async" className="object-cover transition-transform duration-500 group-hover:scale-105" fill src="/assets/figma/training-course-03.jpg" />
                  </Link>
                  <div className="flex flex-1 flex-col p-4 sm:p-5 2xl:p-5">
                    <h3 className="font-bold text-[#1d1b18] text-[16px] sm:text-[17px] xl:text-[18px] 2xl:text-[20px] leading-[22px] sm:leading-[24px] 2xl:leading-[28px] line-clamp-2">
                      <Link prefetch={false} className="hover:text-[#14806f] transition-colors" href="/dao-tao/khoa-2">
                        {"Khóa học xoa bóp bấm huyệt cơ bản"}
                      </Link>
                    </h3>
                    <p className="hidden sm:block mt-1.5 2xl:mt-2 font-normal text-[#4a4946] opacity-85 text-[13px] sm:text-[13.5px] xl:text-[14px] 2xl:text-[14.5px] leading-[20px] 2xl:leading-[22px] line-clamp-2">
                      {"Khóa học Xoa bóp Bấm huyệt được xây dựng dành cho những người muốn tìm hiểu và thực hành các kỹ thuật chăm sóc cơ thể..."}
                    </p>
                    <div className="mt-auto pt-4 2xl:pt-5">
                      <div className="border-t border-[#4a4946]/15 pt-3.5 2xl:pt-4 flex items-center justify-between gap-2.5 sm:gap-3 2xl:gap-3.5">
                        <div className="min-w-0">
                          <p className="flex items-center gap-1.5 sm:gap-2 font-medium text-[#4a4946] text-[11.5px] sm:text-[12.5px] xl:text-[13.5px] 2xl:text-[14px] leading-tight tracking-[0.002em]">
                            <span className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0">
                              <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/Vòng tròn Đô la.png" />
                            </span>
                            <span className="whitespace-nowrap">
                              {"Chỉ từ: "}
                              <span className="line-through">
                                {"63,550,000 vnđ"}
                              </span>
                            </span>
                          </p>
                          <p className="mt-0.5 2xl:mt-1 font-bold text-[#14806f] text-[16px] sm:text-[18px] xl:text-[20px] 2xl:text-[22px] leading-tight tracking-[0.002em] whitespace-nowrap">
                            {"58,990,000 vnđ"}
                          </p>
                        </div>
                        <Link prefetch={false} className="shrink-0 inline-flex items-center justify-center border-2 border-[#14806f] rounded-[10px] bg-transparent text-[#14806f] font-bold text-[13px] sm:text-[14px] xl:text-[15px] 2xl:text-[16px] tracking-[0.002em] whitespace-nowrap px-4 sm:px-5 h-[42px] sm:h-[46px] xl:h-[48px] 2xl:h-[50px] hover:bg-[#14806f] hover:text-white transition-all duration-300" href="/thanh-toan?course=khoa-2">
                          {"Đặt ngay"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="group flex flex-col overflow-hidden rounded-[16px] 2xl:rounded-[20px] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0px_6px_20px_rgba(0,0,0,0.09)]">
                  <Link prefetch={false} className="relative block w-full aspect-[533/320] overflow-hidden" href="/dao-tao/khoa-3">
                    <AssetImage alt="Khóa học xoa bóp bấm huyệt cơ bản" loading="lazy" decoding="async" className="object-cover transition-transform duration-500 group-hover:scale-105" fill src="/assets/figma/training-course-05.jpg" />
                  </Link>
                  <div className="flex flex-1 flex-col p-4 sm:p-5 2xl:p-5">
                    <h3 className="font-bold text-[#1d1b18] text-[16px] sm:text-[17px] xl:text-[18px] 2xl:text-[20px] leading-[22px] sm:leading-[24px] 2xl:leading-[28px] line-clamp-2">
                      <Link prefetch={false} className="hover:text-[#14806f] transition-colors" href="/dao-tao/khoa-3">
                        {"Khóa học xoa bóp bấm huyệt cơ bản"}
                      </Link>
                    </h3>
                    <p className="hidden sm:block mt-1.5 2xl:mt-2 font-normal text-[#4a4946] opacity-85 text-[13px] sm:text-[13.5px] xl:text-[14px] 2xl:text-[14.5px] leading-[20px] 2xl:leading-[22px] line-clamp-2">
                      {"Khóa học Xoa bóp Bấm huyệt được xây dựng dành cho những người muốn tìm hiểu và thực hành các kỹ thuật chăm sóc cơ thể..."}
                    </p>
                    <div className="mt-auto pt-4 2xl:pt-5">
                      <div className="border-t border-[#4a4946]/15 pt-3.5 2xl:pt-4 flex items-center justify-between gap-2.5 sm:gap-3 2xl:gap-3.5">
                        <div className="min-w-0">
                          <p className="flex items-center gap-1.5 sm:gap-2 font-medium text-[#4a4946] text-[11.5px] sm:text-[12.5px] xl:text-[13.5px] 2xl:text-[14px] leading-tight tracking-[0.002em]">
                            <span className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0">
                              <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/Vòng tròn Đô la.png" />
                            </span>
                            <span className="whitespace-nowrap">
                              {"Chỉ từ: "}
                              <span className="line-through">
                                {"63,550,000 vnđ"}
                              </span>
                            </span>
                          </p>
                          <p className="mt-0.5 2xl:mt-1 font-bold text-[#14806f] text-[16px] sm:text-[18px] xl:text-[20px] 2xl:text-[22px] leading-tight tracking-[0.002em] whitespace-nowrap">
                            {"58,990,000 vnđ"}
                          </p>
                        </div>
                        <Link prefetch={false} className="shrink-0 inline-flex items-center justify-center border-2 border-[#14806f] rounded-[10px] bg-transparent text-[#14806f] font-bold text-[13px] sm:text-[14px] xl:text-[15px] 2xl:text-[16px] tracking-[0.002em] whitespace-nowrap px-4 sm:px-5 h-[42px] sm:h-[46px] xl:h-[48px] 2xl:h-[50px] hover:bg-[#14806f] hover:text-white transition-all duration-300" href="/thanh-toan?course=khoa-3">
                          {"Đặt ngay"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="group flex flex-col overflow-hidden rounded-[16px] 2xl:rounded-[20px] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0px_6px_20px_rgba(0,0,0,0.09)]">
                  <Link prefetch={false} className="relative block w-full aspect-[533/320] overflow-hidden" href="/dao-tao/khoa-4">
                    <AssetImage alt="Khóa học xoa bóp bấm huyệt cơ bản" loading="lazy" decoding="async" className="object-cover transition-transform duration-500 group-hover:scale-105" fill src="/assets/figma/training-course-02.jpg" />
                  </Link>
                  <div className="flex flex-1 flex-col p-4 sm:p-5 2xl:p-5">
                    <h3 className="font-bold text-[#1d1b18] text-[16px] sm:text-[17px] xl:text-[18px] 2xl:text-[20px] leading-[22px] sm:leading-[24px] 2xl:leading-[28px] line-clamp-2">
                      <Link prefetch={false} className="hover:text-[#14806f] transition-colors" href="/dao-tao/khoa-4">
                        {"Khóa học xoa bóp bấm huyệt cơ bản"}
                      </Link>
                    </h3>
                    <p className="hidden sm:block mt-1.5 2xl:mt-2 font-normal text-[#4a4946] opacity-85 text-[13px] sm:text-[13.5px] xl:text-[14px] 2xl:text-[14.5px] leading-[20px] 2xl:leading-[22px] line-clamp-2">
                      {"Khóa học Xoa bóp Bấm huyệt được xây dựng dành cho những người muốn tìm hiểu và thực hành các kỹ thuật chăm sóc cơ thể..."}
                    </p>
                    <div className="mt-auto pt-4 2xl:pt-5">
                      <div className="border-t border-[#4a4946]/15 pt-3.5 2xl:pt-4 flex items-center justify-between gap-2.5 sm:gap-3 2xl:gap-3.5">
                        <div className="min-w-0">
                          <p className="flex items-center gap-1.5 sm:gap-2 font-medium text-[#4a4946] text-[11.5px] sm:text-[12.5px] xl:text-[13.5px] 2xl:text-[14px] leading-tight tracking-[0.002em]">
                            <span className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0">
                              <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/Vòng tròn Đô la.png" />
                            </span>
                            <span className="whitespace-nowrap">
                              {"Chỉ từ: "}
                              <span className="line-through">
                                {"63,550,000 vnđ"}
                              </span>
                            </span>
                          </p>
                          <p className="mt-0.5 2xl:mt-1 font-bold text-[#14806f] text-[16px] sm:text-[18px] xl:text-[20px] 2xl:text-[22px] leading-tight tracking-[0.002em] whitespace-nowrap">
                            {"58,990,000 vnđ"}
                          </p>
                        </div>
                        <Link prefetch={false} className="shrink-0 inline-flex items-center justify-center border-2 border-[#14806f] rounded-[10px] bg-transparent text-[#14806f] font-bold text-[13px] sm:text-[14px] xl:text-[15px] 2xl:text-[16px] tracking-[0.002em] whitespace-nowrap px-4 sm:px-5 h-[42px] sm:h-[46px] xl:h-[48px] 2xl:h-[50px] hover:bg-[#14806f] hover:text-white transition-all duration-300" href="/thanh-toan?course=khoa-4">
                          {"Đặt ngay"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="group flex flex-col overflow-hidden rounded-[16px] 2xl:rounded-[20px] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0px_6px_20px_rgba(0,0,0,0.09)]">
                  <Link prefetch={false} className="relative block w-full aspect-[533/320] overflow-hidden" href="/dao-tao/khoa-5">
                    <AssetImage alt="Khóa học xoa bóp bấm huyệt cơ bản" loading="lazy" decoding="async" className="object-cover transition-transform duration-500 group-hover:scale-105" fill src="/assets/figma/training-course-04.jpg" />
                  </Link>
                  <div className="flex flex-1 flex-col p-4 sm:p-5 2xl:p-5">
                    <h3 className="font-bold text-[#1d1b18] text-[16px] sm:text-[17px] xl:text-[18px] 2xl:text-[20px] leading-[22px] sm:leading-[24px] 2xl:leading-[28px] line-clamp-2">
                      <Link prefetch={false} className="hover:text-[#14806f] transition-colors" href="/dao-tao/khoa-5">
                        {"Khóa học xoa bóp bấm huyệt cơ bản"}
                      </Link>
                    </h3>
                    <p className="hidden sm:block mt-1.5 2xl:mt-2 font-normal text-[#4a4946] opacity-85 text-[13px] sm:text-[13.5px] xl:text-[14px] 2xl:text-[14.5px] leading-[20px] 2xl:leading-[22px] line-clamp-2">
                      {"Khóa học Xoa bóp Bấm huyệt được xây dựng dành cho những người muốn tìm hiểu và thực hành các kỹ thuật chăm sóc cơ thể..."}
                    </p>
                    <div className="mt-auto pt-4 2xl:pt-5">
                      <div className="border-t border-[#4a4946]/15 pt-3.5 2xl:pt-4 flex items-center justify-between gap-2.5 sm:gap-3 2xl:gap-3.5">
                        <div className="min-w-0">
                          <p className="flex items-center gap-1.5 sm:gap-2 font-medium text-[#4a4946] text-[11.5px] sm:text-[12.5px] xl:text-[13.5px] 2xl:text-[14px] leading-tight tracking-[0.002em]">
                            <span className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0">
                              <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/Vòng tròn Đô la.png" />
                            </span>
                            <span className="whitespace-nowrap">
                              {"Chỉ từ: "}
                              <span className="line-through">
                                {"63,550,000 vnđ"}
                              </span>
                            </span>
                          </p>
                          <p className="mt-0.5 2xl:mt-1 font-bold text-[#14806f] text-[16px] sm:text-[18px] xl:text-[20px] 2xl:text-[22px] leading-tight tracking-[0.002em] whitespace-nowrap">
                            {"58,990,000 vnđ"}
                          </p>
                        </div>
                        <Link prefetch={false} className="shrink-0 inline-flex items-center justify-center border-2 border-[#14806f] rounded-[10px] bg-transparent text-[#14806f] font-bold text-[13px] sm:text-[14px] xl:text-[15px] 2xl:text-[16px] tracking-[0.002em] whitespace-nowrap px-4 sm:px-5 h-[42px] sm:h-[46px] xl:h-[48px] 2xl:h-[50px] hover:bg-[#14806f] hover:text-white transition-all duration-300" href="/thanh-toan?course=khoa-5">
                          {"Đặt ngay"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="mt-8">
                <nav aria-label="Phân trang" className="flex items-center justify-center gap-2 xs:gap-4 sm:gap-6 md:gap-8 select-none">
                  <span aria-disabled="true" aria-label="Trang trước" className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-[10px] sm:rounded-[12px] border border-[#4a4946] bg-white flex items-center justify-center text-[#4a4946] select-none cursor-default pointer-events-none opacity-40">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="14 18 8 12 14 6" />
                    </svg>
                  </span>
                  <span aria-current="page" className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-[10px] sm:rounded-[12px] bg-[#14806f] text-white font-medium text-[16px] sm:text-[18px] flex items-center justify-center shadow-sm select-none">
                    {"1"}
                  </span>
                  <Link prefetch={false} className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-[10px] sm:rounded-[12px] border border-transparent hover:border-[#14806f]/40 flex items-center justify-center text-[16px] sm:text-[18px] font-medium text-[#1d1b18] hover:text-[#14806f] transition-all" href="/dao-tao?page=2">
                    {"2"}
                  </Link>
                  <Link prefetch={false} className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-[10px] sm:rounded-[12px] border border-transparent hover:border-[#14806f]/40 flex items-center justify-center text-[16px] sm:text-[18px] font-medium text-[#1d1b18] hover:text-[#14806f] transition-all" href="/dao-tao?page=3">
                    {"3"}
                  </Link>
                  <span className="min-w-[24px] sm:min-w-[36px] h-[40px] sm:h-[48px] flex items-center justify-center text-[16px] sm:text-[18px] font-medium text-[#1d1b18]">
                    {"..."}
                  </span>
                  <Link prefetch={false} className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-[10px] sm:rounded-[12px] border border-transparent hover:border-[#14806f]/40 flex items-center justify-center text-[16px] sm:text-[18px] font-medium text-[#1d1b18] hover:text-[#14806f] transition-all" href="/dao-tao?page=20">
                    {"20"}
                  </Link>
                  <Link prefetch={false} aria-label="Trang sau" className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-[10px] sm:rounded-[12px] border border-[#4a4946] bg-white flex items-center justify-center text-[#4a4946] select-none hover:border-[#14806f] hover:text-[#14806f] transition-all active:scale-95 cursor-pointer" href="/dao-tao?page=2">
                    <svg className="w-5 h-5 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="10 18 16 12 10 6" />
                    </svg>
                  </Link>
                </nav>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
