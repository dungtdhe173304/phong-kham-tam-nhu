"use client";
import { AssetImage } from "@/components/asset-image";

import { useState, type FormEvent } from "react";

export function ContactForm() {
 const [submitted, setSubmitted] = useState(false);
 function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); event.stopPropagation(); setSubmitted(true); }
 return (
              <form className="mt-6 lg:mt-8 max-w-[800px] grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-4" onSubmit={submit}>
                <div>
                  <label htmlFor="contact-name" className="block font-semibold text-[#1d1b18] text-[13.5px] sm:text-[14px] leading-[20px] tracking-[0.01px]">
                    {"Họ và Tên"}
                  </label>
                  <input id="contact-name" type="text" required placeholder="Nguyễn Văn A" className="w-full h-[44px] sm:h-[46px] bg-white border border-[#1d1b18]/30 rounded-[8px] px-4 font-normal text-[#1d1b18] text-[13.5px] sm:text-[14px] tracking-[0.01px] placeholder:text-[#a5a4a3] focus:outline-none focus:border-[#14806f] focus:ring-1 focus:ring-[#14806f] mt-1.5" name="name" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block font-semibold text-[#1d1b18] text-[13.5px] sm:text-[14px] leading-[20px] tracking-[0.01px]">
                    {"Email"}
                  </label>
                  <input id="contact-email" type="email" placeholder="...@gmail.com" className="w-full h-[44px] sm:h-[46px] bg-white border border-[#1d1b18]/30 rounded-[8px] px-4 font-normal text-[#1d1b18] text-[13.5px] sm:text-[14px] tracking-[0.01px] placeholder:text-[#a5a4a3] focus:outline-none focus:border-[#14806f] focus:ring-1 focus:ring-[#14806f] mt-1.5" name="email" />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block font-semibold text-[#1d1b18] text-[13.5px] sm:text-[14px] leading-[20px] tracking-[0.01px]">
                    {"Số điện thoại"}
                  </label>
                  <input id="contact-phone" type="tel" required placeholder="+84" className="w-full h-[44px] sm:h-[46px] bg-white border border-[#1d1b18]/30 rounded-[8px] px-4 font-normal text-[#1d1b18] text-[13.5px] sm:text-[14px] tracking-[0.01px] placeholder:text-[#a5a4a3] focus:outline-none focus:border-[#14806f] focus:ring-1 focus:ring-[#14806f] mt-1.5" name="phone" />
                </div>
                <div>
                  <label htmlFor="contact-datetime" className="block font-semibold text-[#1d1b18] text-[13.5px] sm:text-[14px] leading-[20px] tracking-[0.01px]">
                    {"Ngày giờ"}
                  </label>
                  <div className="relative mt-1.5">
                    <input id="contact-datetime" type="datetime-local" data-has-value="false" className="w-full h-[44px] sm:h-[46px] bg-white border border-[#1d1b18]/30 rounded-[8px] px-4 font-normal text-[#1d1b18] text-[13.5px] sm:text-[14px] tracking-[0.01px] placeholder:text-[#a5a4a3] focus:outline-none focus:border-[#14806f] focus:ring-1 focus:ring-[#14806f] !text-[#a5a4a3] [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer" name="datetime" />
                    <div aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5">
                      <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/contact-calendar.svg" />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="contact-branch" className="block font-semibold text-[#1d1b18] text-[13.5px] sm:text-[14px] leading-[20px] tracking-[0.01px]">
                    {"Cơ sở gần bạn"}
                  </label>
                  <div className="relative mt-1.5">
                    <select id="contact-branch" name="branch" defaultValue="cau-dien" className="w-full h-[44px] sm:h-[46px] bg-white border border-[#1d1b18]/30 rounded-[8px] px-4 font-normal text-[#1d1b18] text-[13.5px] sm:text-[14px] tracking-[0.01px] placeholder:text-[#a5a4a3] focus:outline-none focus:border-[#14806f] focus:ring-1 focus:ring-[#14806f] appearance-none pr-12 truncate cursor-pointer">
                      <option value="hoang-hoa">
                        {"Chi nhánh Hoằng Hóa - Hoằng Hóa, Thanh Hóa"}
                      </option>
                      <option value="cau-dien">
                        {"Chi nhánh Cầu Diễn - Cầu Diễn, Hà Nội"}
                      </option>
                      <option value="kim-lien">
                        {"Chi nhánh Kim Liên - Đại học Y Hà Nội"}
                      </option>
                    </select>
                    <div aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5">
                      <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vuesax-linear-arrow-square-down.svg" />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2 pt-1 flex flex-wrap items-center gap-4">
                  <button type="submit" className="bg-[#14806f] disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#0f685a] transition-colors rounded-[8px] px-5 py-2.5 flex items-center justify-center gap-2 text-white font-semibold text-[14px] sm:text-[14.5px] leading-[20px] cursor-pointer">
                    <div className="relative w-4 h-4 shrink-0">
                      <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/vuesax-linear-send2.svg" />
                    </div>
                    <span>
                      {"Liên hệ với chúng tôi"}
                    </span>
                  </button>
                </div>
                {submitted && <p role="status" className="clinic-notice sm:col-span-2">Chức năng gửi liên hệ sẽ được kết nối khi backend hoàn tất. Bạn có thể gọi 0393312336 để được hỗ trợ.</p>}
</form>);
}
