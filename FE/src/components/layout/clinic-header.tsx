"use client";

import { useState } from "react";
import Link from "next/link";
import { AssetImage } from "@/components/asset-image";

export function ClinicHeader({ route }: { route: string }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  return (
    <header className="w-full bg-white h-[64px] sm:h-[72px] lg:h-[76px] shadow-[0px_4px_15px_rgba(0,0,0,0.06)] sticky top-0 z-50 select-none">
      <div className="container-fig mx-auto w-full h-full px-4 sm:px-6 lg:px-8 desktop:px-0 flex items-center justify-between gap-2 lg:gap-4 whitespace-nowrap">
        <Link prefetch={false} className="shrink-0 flex items-center" href="/">
          <div className="relative w-[150px] sm:w-[175px] lg:w-[195px] h-[34px] sm:h-[38px] lg:h-[42px]">
            <AssetImage alt="Phòng khám Y học Cổ truyền Tâm Như" decoding="async" className="object-contain object-left" fill src="/assets/figma/logo-tam-nhu.svg" />
          </div>
        </Link>
        <div className="hidden lg:flex items-center gap-3 xl:gap-5 shrink-0 h-full">
          <nav className="flex items-center gap-2.5 xl:gap-4 h-full">
            <Link prefetch={false} className={"flex items-center gap-1.5   text-[15px] xl:text-[16px] tracking-[0.02px] transition-colors py-2" + (route === "/" ? " text-[#14806f] font-semibold" : " text-[#4a4946] font-medium")} href="/" aria-current={route === "/" ? "page" : undefined}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 xl:w-4.5 xl:h-4.5 shrink-0 text-current transition-colors" aria-hidden="true">
                <path d="M9.02 2.84L3.63 7.04C2.73 7.74 2 9.23 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29 21.19 7.74 20.2 7.05L14.02 2.72C12.62 1.74 10.37 1.79 9.02 2.84Z" />
                <path d="M12 17.99V14.99" />
              </svg>
              <span>
                {"Trang chủ"}
              </span>
            </Link>
            <Link prefetch={false} className={"flex items-center gap-1.5  hover:  text-[15px] xl:text-[16px] tracking-[0.02px] transition-colors py-2" + (route === "/gioi-thieu" ? " text-[#14806f] font-semibold" : " text-[#4a4946] font-medium")} href="/gioi-thieu" aria-current={route === "/gioi-thieu" ? "page" : undefined}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 xl:w-4.5 xl:h-4.5 shrink-0 text-current transition-colors" aria-hidden="true">
                <path d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.45 10.79 7.56 8.84 7.56 6.44C7.56 3.99 9.54 2 12 2C14.45 2 16.44 3.99 16.44 6.44C16.43 8.84 14.54 10.79 12.16 10.87Z" />
                <path d="M7.16 14.56C4.74 16.18 4.74 18.82 7.16 20.43C9.91 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.92 12.73 7.16 14.56Z" />
              </svg>
              <span>
                {"Giới thiệu"}
              </span>
            </Link>
            <div className="relative group h-full flex items-center" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} onKeyDown={event => { if (event.key === "Escape") setServicesOpen(false); }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false); }}>
              <button type="button" aria-expanded={servicesOpen} aria-controls="clinic-services-menu" className="flex items-center gap-1.5 text-[#4a4946] font-medium group-hover:text-[#14806f] text-[15px] xl:text-[16px] tracking-[0.02px] transition-colors py-2 cursor-pointer" onClick={() => setServicesOpen(true)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 xl:w-4.5 xl:h-4.5 shrink-0 text-current transition-colors" aria-hidden="true">
                  <path d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z" />
                  <path d="M9 13L15 7" />
                  <path d="M14.9945 13H15.0035" />
                  <path d="M8.99451 7.5H9.00349" />
                </svg>
                <span>
                  {"Menu"}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-3.5 h-3.5 xl:w-4 xl:h-4 text-current transition-transform duration-200 group-hover:rotate-180 shrink-0" aria-hidden="true">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div id="clinic-services-menu" className={"absolute top-full left-1/2 -translate-x-1/2 transition-all duration-200 z-50 " + (servicesOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none")} onClick={event => { if ((event.target as HTMLElement).closest("a")) setServicesOpen(false); }}>
                <div className="w-[960px] desktop:w-[1056px] max-w-[94vw] bg-white rounded-b-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] border-x border-b border-gray-100 p-7 desktop:p-8 font-['Montserrat'] flex items-start">
                  <div className="w-[360px] desktop:w-[390px] shrink-0 pr-6">
                    <h4 className="font-bold text-[#4A4946] text-[18px] xl:text-[20px] desktop:text-[24px] leading-[28px] desktop:leading-[32px] tracking-[0.002em] mb-4">
                      {"Dịch vụ của chúng tôi"}
                    </h4>
                    <div className="space-y-3 desktop:space-y-3.5">
                      <Link prefetch={false} className="flex items-center gap-2.5 text-[#4a4946] hover:text-[#14806f] font-semibold text-[15px] xl:text-[16px] desktop:text-[18px] leading-[26px] desktop:leading-[28px] tracking-[0.001em] transition-colors group/item" href="/dich-vu/tri-lieu-theo-vung">
                        <svg className="w-4 h-4 xl:w-4.5 xl:h-4.5 shrink-0 text-[#14806F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M9 18L15 12L9 6" />
                        </svg>
                        <span className="group-hover/item:translate-x-1 transition-transform">
                          {"Trị liệu theo vùng"}
                        </span>
                      </Link>
                      <Link prefetch={false} className="flex items-center gap-2.5 text-[#4a4946] hover:text-[#14806f] font-semibold text-[15px] xl:text-[16px] desktop:text-[18px] leading-[26px] desktop:leading-[28px] tracking-[0.001em] transition-colors group/item" href="/dich-vu/tri-lieu-toan-than">
                        <svg className="w-4 h-4 xl:w-4.5 xl:h-4.5 shrink-0 text-[#14806F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M9 18L15 12L9 6" />
                        </svg>
                        <span className="group-hover/item:translate-x-1 transition-transform">
                          {"Trị liệu toàn thân"}
                        </span>
                      </Link>
                      <Link prefetch={false} className="flex items-center gap-2.5 text-[#4a4946] hover:text-[#14806f] font-semibold text-[15px] xl:text-[16px] desktop:text-[18px] leading-[26px] desktop:leading-[28px] tracking-[0.001em] transition-colors group/item" href="/dich-vu/da-thong-kinh-lac">
                        <svg className="w-4 h-4 xl:w-4.5 xl:h-4.5 shrink-0 text-[#14806F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M9 18L15 12L9 6" />
                        </svg>
                        <span className="group-hover/item:translate-x-1 transition-transform">
                          {"Đả thông kinh lạc"}
                        </span>
                      </Link>
                      <Link prefetch={false} className="flex items-center gap-2.5 text-[#4a4946] hover:text-[#14806f] font-semibold text-[15px] xl:text-[16px] desktop:text-[18px] leading-[26px] desktop:leading-[28px] tracking-[0.001em] transition-colors group/item" href="/dich-vu/tac-dong-cot-song">
                        <svg className="w-4 h-4 xl:w-4.5 xl:h-4.5 shrink-0 text-[#14806F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M9 18L15 12L9 6" />
                        </svg>
                        <span className="group-hover/item:translate-x-1 transition-transform">
                          {"Tác động thần kinh cột sống"}
                        </span>
                      </Link>
                      <Link prefetch={false} className="flex items-center gap-2.5 text-[#4a4946] hover:text-[#14806f] font-semibold text-[15px] xl:text-[16px] desktop:text-[18px] leading-[26px] desktop:leading-[28px] tracking-[0.001em] transition-colors group/item" href="/dich-vu/ngoc-bich-dung-nhan">
                        <svg className="w-4 h-4 xl:w-4.5 xl:h-4.5 shrink-0 text-[#14806F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M9 18L15 12L9 6" />
                        </svg>
                        <span className="group-hover/item:translate-x-1 transition-transform">
                          {"Ngọc bích dung nhan"}
                        </span>
                      </Link>
                      <Link prefetch={false} className="flex items-center gap-2.5 text-[#4a4946] hover:text-[#14806f] font-semibold text-[15px] xl:text-[16px] desktop:text-[18px] leading-[26px] desktop:leading-[28px] tracking-[0.001em] transition-colors group/item" href="/dich-vu/bam-huyet-phuc-hoi">
                        <svg className="w-4 h-4 xl:w-4.5 xl:h-4.5 shrink-0 text-[#14806F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M9 18L15 12L9 6" />
                        </svg>
                        <span className="group-hover/item:translate-x-1 transition-transform">
                          {"Bấm huyệt phục hồi"}
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="w-[1px] border-r border-dashed border-[#A5A4A3]/60 self-stretch my-1 shrink-0" />
                  <div className="flex-1 pl-8 desktop:pl-10">
                    <h4 className="font-bold text-[#4A4946] text-[18px] xl:text-[20px] desktop:text-[24px] leading-[28px] desktop:leading-[32px] tracking-[0.002em] mb-4">
                      {"Điều trị theo bệnh lý"}
                    </h4>
                    <div className="grid grid-cols-2 gap-x-6 desktop:gap-x-10">
                      <div className="space-y-2 desktop:space-y-2.5">
                        <a className="flex items-center gap-2 text-[#4a4946] hover:text-[#14806f] text-[14px] xl:text-[15px] desktop:text-[16px] leading-[26px] desktop:leading-[30px] tracking-[0.001em] transition-colors whitespace-nowrap" href="#dat-lich">
                          <span className="text-[#A5A4A3] text-lg leading-none select-none">
                            {"•"}
                          </span>
                          <span>
                            {"Thoát vị đĩa đệm"}
                          </span>
                        </a>
                        <a className="flex items-center gap-2 text-[#4a4946] hover:text-[#14806f] text-[14px] xl:text-[15px] desktop:text-[16px] leading-[26px] desktop:leading-[30px] tracking-[0.001em] transition-colors whitespace-nowrap" href="#dat-lich">
                          <span className="text-[#A5A4A3] text-lg leading-none select-none">
                            {"•"}
                          </span>
                          <span>
                            {"Thoái hoá cột sống"}
                          </span>
                        </a>
                        <a className="flex items-center gap-2 text-[#4a4946] hover:text-[#14806f] text-[14px] xl:text-[15px] desktop:text-[16px] leading-[26px] desktop:leading-[30px] tracking-[0.001em] transition-colors whitespace-nowrap" href="#dat-lich">
                          <span className="text-[#A5A4A3] text-lg leading-none select-none">
                            {"•"}
                          </span>
                          <span>
                            {"Thoái hoá cột sống cổ"}
                          </span>
                        </a>
                        <a className="flex items-center gap-2 text-[#4a4946] hover:text-[#14806f] text-[14px] xl:text-[15px] desktop:text-[16px] leading-[26px] desktop:leading-[30px] tracking-[0.001em] transition-colors whitespace-nowrap" href="#dat-lich">
                          <span className="text-[#A5A4A3] text-lg leading-none select-none">
                            {"•"}
                          </span>
                          <span>
                            {"Đau thần kinh toạ"}
                          </span>
                        </a>
                        <a className="flex items-center gap-2 text-[#4a4946] hover:text-[#14806f] text-[14px] xl:text-[15px] desktop:text-[16px] leading-[26px] desktop:leading-[30px] tracking-[0.001em] transition-colors whitespace-nowrap" href="#dat-lich">
                          <span className="text-[#A5A4A3] text-lg leading-none select-none">
                            {"•"}
                          </span>
                          <span>
                            {"Chấn thương thể thao"}
                          </span>
                        </a>
                        <a className="flex items-center gap-2 text-[#4a4946] hover:text-[#14806f] text-[14px] xl:text-[15px] desktop:text-[16px] leading-[26px] desktop:leading-[30px] tracking-[0.001em] transition-colors whitespace-nowrap" href="#dat-lich">
                          <span className="text-[#A5A4A3] text-lg leading-none select-none">
                            {"•"}
                          </span>
                          <span>
                            {"Các chứng đau xương khớp"}
                          </span>
                        </a>
                        <a className="flex items-center gap-2 text-[#4a4946] hover:text-[#14806f] text-[14px] xl:text-[15px] desktop:text-[16px] leading-[26px] desktop:leading-[30px] tracking-[0.001em] transition-colors whitespace-nowrap" href="#dat-lich">
                          <span className="text-[#A5A4A3] text-lg leading-none select-none">
                            {"•"}
                          </span>
                          <span>
                            {"Đau cổ"}
                          </span>
                        </a>
                        <a className="flex items-center gap-2 text-[#4a4946] hover:text-[#14806f] text-[14px] xl:text-[15px] desktop:text-[16px] leading-[26px] desktop:leading-[30px] tracking-[0.001em] transition-colors whitespace-nowrap" href="#dat-lich">
                          <span className="text-[#A5A4A3] text-lg leading-none select-none">
                            {"•"}
                          </span>
                          <span>
                            {"Đau vai"}
                          </span>
                        </a>
                      </div>
                      <div className="space-y-2 desktop:space-y-2.5">
                        <a className="flex items-center gap-2 text-[#4a4946] hover:text-[#14806f] text-[14px] xl:text-[15px] desktop:text-[16px] leading-[26px] desktop:leading-[30px] tracking-[0.001em] transition-colors whitespace-nowrap" href="#dat-lich">
                          <span className="text-[#A5A4A3] text-lg leading-none select-none">
                            {"•"}
                          </span>
                          <span>
                            {"Đau thắt lưng"}
                          </span>
                        </a>
                        <a className="flex items-center gap-2 text-[#4a4946] hover:text-[#14806f] text-[14px] xl:text-[15px] desktop:text-[16px] leading-[26px] desktop:leading-[30px] tracking-[0.001em] transition-colors whitespace-nowrap" href="#dat-lich">
                          <span className="text-[#A5A4A3] text-lg leading-none select-none">
                            {"•"}
                          </span>
                          <span>
                            {"Tê tay, tê chân"}
                          </span>
                        </a>
                        <a className="flex items-center gap-2 text-[#4a4946] hover:text-[#14806f] text-[14px] xl:text-[15px] desktop:text-[16px] leading-[26px] desktop:leading-[30px] tracking-[0.001em] transition-colors whitespace-nowrap" href="#dat-lich">
                          <span className="text-[#A5A4A3] text-lg leading-none select-none">
                            {"•"}
                          </span>
                          <span>
                            {"Lệch vẹo cột sống"}
                          </span>
                        </a>
                        <a className="flex items-center gap-2 text-[#4a4946] hover:text-[#14806f] text-[14px] xl:text-[15px] desktop:text-[16px] leading-[26px] desktop:leading-[30px] tracking-[0.001em] transition-colors whitespace-nowrap" href="#dat-lich">
                          <span className="text-[#A5A4A3] text-lg leading-none select-none">
                            {"•"}
                          </span>
                          <span>
                            {"Viêm quanh khớp vai"}
                          </span>
                        </a>
                        <a className="flex items-center gap-2 text-[#4a4946] hover:text-[#14806f] text-[14px] xl:text-[15px] desktop:text-[16px] leading-[26px] desktop:leading-[30px] tracking-[0.001em] transition-colors whitespace-nowrap" href="#dat-lich">
                          <span className="text-[#A5A4A3] text-lg leading-none select-none">
                            {"•"}
                          </span>
                          <span>
                            {"Elbow"}
                          </span>
                        </a>
                        <a className="flex items-center gap-2 text-[#4a4946] hover:text-[#14806f] text-[14px] xl:text-[15px] desktop:text-[16px] leading-[26px] desktop:leading-[30px] tracking-[0.001em] transition-colors whitespace-nowrap" href="#dat-lich">
                          <span className="text-[#A5A4A3] text-lg leading-none select-none">
                            {"•"}
                          </span>
                          <span>
                            {"Gai xương"}
                          </span>
                        </a>
                        <a className="flex items-center gap-2 text-[#4a4946] hover:text-[#14806f] text-[14px] xl:text-[15px] desktop:text-[16px] leading-[26px] desktop:leading-[30px] tracking-[0.001em] transition-colors whitespace-nowrap" href="#dat-lich">
                          <span className="text-[#A5A4A3] text-lg leading-none select-none">
                            {"•"}
                          </span>
                          <span>
                            {"Tràn dịch khớp gối"}
                          </span>
                        </a>
                        <a className="flex items-center gap-2 text-[#4a4946] hover:text-[#14806f] text-[14px] xl:text-[15px] desktop:text-[16px] leading-[26px] desktop:leading-[30px] tracking-[0.001em] transition-colors whitespace-nowrap" href="#dat-lich">
                          <span className="text-[#A5A4A3] text-lg leading-none select-none">
                            {"•"}
                          </span>
                          <span>
                            {"Viêm điểm bám gân"}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group h-full flex items-center">
              <Link prefetch={false} className="flex items-center gap-1.5 text-[#4a4946] font-medium group-hover:text-[#14806f] text-[15px] xl:text-[16px] tracking-[0.02px] transition-colors py-2" href="/cam-nang">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 xl:w-4.5 xl:h-4.5 shrink-0 text-current transition-colors" aria-hidden="true">
                  <path d="M22 16.74V4.67C22 3.47 21.02 2.58 19.83 2.68H19.77C17.67 2.86 14.48 3.93 12.7 5.05L12.53 5.16C12.24 5.34 11.76 5.34 11.47 5.16L11.22 5.01C9.44 3.9 6.26 2.84 4.16 2.67C2.97 2.57 2 3.47 2 4.66V16.74C2 17.7 2.78 18.6 3.74 18.72L4.03 18.76C6.2 19.05 9.55 20.15 11.47 21.2L11.51 21.22C11.78 21.37 12.21 21.37 12.47 21.22C14.39 20.16 17.75 19.05 19.93 18.76L20.26 18.72C21.22 18.6 22 17.7 22 16.74Z" />
                  <path d="M12 5.49V20.49" />
                  <path d="M7.75 8.49H5.5" />
                  <path d="M8.5 11.49H5.5" />
                </svg>
                <span>
                  {"Cẩm nang"}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-3.5 h-3.5 xl:w-4 xl:h-4 text-current transition-transform duration-200 group-hover:rotate-180 shrink-0" aria-hidden="true">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>
              <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                <div className="min-w-[320px] desktop:min-w-[360px] bg-white rounded-b-[18px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] border-x border-b border-gray-100 p-6 font-['Montserrat']">
                  <h4 className="font-bold text-[#4A4946] text-[18px] xl:text-[20px] desktop:text-[24px] leading-[28px] desktop:leading-[32px] tracking-[0.002em] mb-4">
                    {"Cẩm nang"}
                  </h4>
                  <div className="space-y-3 desktop:space-y-3.5">
                    <Link prefetch={false} className="flex items-center gap-2.5 text-[#4a4946] hover:text-[#14806f] font-semibold text-[15px] xl:text-[16px] desktop:text-[18px] leading-[26px] desktop:leading-[28px] tracking-[0.001em] transition-colors group/item" href="/cam-nang">
                      <svg className="w-4 h-4 xl:w-4.5 xl:h-4.5 shrink-0 text-[#14806F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M9 18L15 12L9 6" />
                      </svg>
                      <span className="group-hover/item:translate-x-1 transition-transform">
                        {"Chăm sóc sức khỏe chủ động"}
                      </span>
                    </Link>
                    <Link prefetch={false} className="flex items-center gap-2.5 text-[#4a4946] hover:text-[#14806f] font-semibold text-[15px] xl:text-[16px] desktop:text-[18px] leading-[26px] desktop:leading-[28px] tracking-[0.001em] transition-colors group/item" href="/cam-nang">
                      <svg className="w-4 h-4 xl:w-4.5 xl:h-4.5 shrink-0 text-[#14806F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M9 18L15 12L9 6" />
                      </svg>
                      <span className="group-hover/item:translate-x-1 transition-transform">
                        {"Chính sách chăm sóc khách hàng"}
                      </span>
                    </Link>
                    <Link prefetch={false} className="flex items-center gap-2.5 text-[#4a4946] hover:text-[#14806f] font-semibold text-[15px] xl:text-[16px] desktop:text-[18px] leading-[26px] desktop:leading-[28px] tracking-[0.001em] transition-colors group/item" href="/cam-nang">
                      <svg className="w-4 h-4 xl:w-4.5 xl:h-4.5 shrink-0 text-[#14806F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M9 18L15 12L9 6" />
                      </svg>
                      <span className="group-hover/item:translate-x-1 transition-transform">
                        {"Khuyến mãi & sự kiện"}
                      </span>
                    </Link>
                    <Link prefetch={false} className="flex items-center gap-2.5 text-[#4a4946] hover:text-[#14806f] font-semibold text-[15px] xl:text-[16px] desktop:text-[18px] leading-[26px] desktop:leading-[28px] tracking-[0.001em] transition-colors group/item" href="/cam-nang">
                      <svg className="w-4 h-4 xl:w-4.5 xl:h-4.5 shrink-0 text-[#14806F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M9 18L15 12L9 6" />
                      </svg>
                      <span className="group-hover/item:translate-x-1 transition-transform">
                        {"Tuyển dụng"}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link prefetch={false} className={"flex items-center gap-1.5  hover:  text-[15px] xl:text-[16px] tracking-[0.02px] transition-colors" + (route === "/dao-tao" ? " text-[#14806f] font-semibold" : " text-[#4a4946] font-medium")} href="/dao-tao" aria-current={route === "/dao-tao" ? "page" : undefined}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 xl:w-4.5 xl:h-4.5 shrink-0 text-current transition-colors" aria-hidden="true">
                <path d="M10.05 2.53L4.03 6.46C2.1 7.72 2.1 10.54 4.03 11.8L10.05 15.73C11.13 16.44 12.91 16.44 13.99 15.73L19.98 11.8C21.9 10.54 21.9 7.73 19.98 6.47L13.99 2.54C12.91 1.82 11.13 1.82 10.05 2.53Z" />
                <path d="M5.63 13.08L5.62 17.77C5.62 19.04 6.6 20.4 7.8 20.8L10.99 21.86C11.54 22.04 12.45 22.04 13.01 21.86L16.2 20.8C17.4 20.4 18.38 19.04 18.38 17.77V13.13" />
                <path d="M21.4 15V9" />
              </svg>
              <span>
                {"Khóa học"}
              </span>
            </Link>
            <Link prefetch={false} className={"flex items-center gap-1.5  hover:  text-[15px] xl:text-[16px] tracking-[0.02px] transition-colors" + (route === "/lien-he" ? " text-[#14806f] font-semibold" : " text-[#4a4946] font-medium")} href="/lien-he" aria-current={route === "/lien-he" ? "page" : undefined}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 xl:w-4.5 xl:h-4.5 shrink-0 text-current transition-colors" aria-hidden="true">
                <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" />
              </svg>
              <span>
                {"Liên hệ"}
              </span>
            </Link>
          </nav>
          <div className="h-[24px] w-[1px] bg-[#4a4946]/20 shrink-0" />
          <div className="flex items-center gap-2 xl:gap-3 shrink-0">
            <button type="button" className="border border-[#4a4946] border-solid rounded-full px-4 py-1.5 text-[13px] xl:text-[14px] font-semibold text-[#4a4946] hover:bg-gray-50 transition-colors cursor-pointer">
              {"Đăng ký"}
            </button>
            <button type="button" className="bg-[#14806f] border border-white border-solid rounded-full px-4 py-1.5 text-[13px] xl:text-[14px] font-semibold text-white hover:bg-[#0f685a] transition-colors shadow-sm cursor-pointer">
              {"Đăng nhập"}
            </button>
          </div>
        </div>
        <div className="flex lg:hidden items-center gap-2">
          <button type="button" className="bg-[#14806f] hover:bg-[#0f685a] text-white px-3 py-1.5 rounded-full font-semibold text-[13px] shadow-sm transition-colors cursor-pointer flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-3.5 h-3.5" aria-hidden="true">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>
              {"Đăng nhập"}
            </span>
          </button>
          <button type="button" className="w-10 h-10 flex items-center justify-center text-[#1d1b18] hover:text-[#14806f] rounded-lg transition-colors cursor-pointer" aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-6 h-6" aria-hidden="true">
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
