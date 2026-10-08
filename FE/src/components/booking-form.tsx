"use client";

import { useState, type FormEvent } from "react";
import { AssetImage } from "./asset-image";

const fields = [
  { name: "name", label: "Họ và Tên", type: "text", placeholder: "Nguyễn Văn A", required: true, autoComplete: "name" },
  { name: "phone", label: "Số điện thoại", type: "tel", placeholder: "+84", required: true, autoComplete: "tel" },
  { name: "email", label: "Email", type: "email", placeholder: "...@gmail.com", required: false, autoComplete: "email" },
];
const inputClass = "mt-1 w-full h-[40px] sm:h-[42px] desktop:h-[44px] bg-white border border-[#d1d5db] rounded-[8px] px-3 font-normal text-[#1d1b18] text-[13px] sm:text-[13.5px] desktop:text-[14px] placeholder:text-[#9ca3af] desktop:placeholder:text-[#a5a4a3] focus:outline-none focus:border-[#14806f] focus:ring-1 focus:ring-[#14806f]";
const labelClass = "block font-bold text-[#4a4946] text-[13px] sm:text-[13.5px] desktop:text-[14px] leading-[20px] desktop:leading-[22px]";
const fill = { position: "absolute", inset: 0, width: "100%", height: "100%", color: "transparent" } as const;

export function BookingForm({ service }: { service: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    setSubmitted(true);
  }
  return <form onSubmit={submit} data-service={service} className="rounded-[14px] sm:rounded-[16px] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.06)] px-4 sm:px-5 py-5 space-y-3">
    <h2 className="text-center font-bold text-[#1d1b18] text-[17px] sm:text-[18px] desktop:text-[19px] leading-[24px] desktop:leading-[26px]">Đặt hẹn với bác sĩ</h2>
    {fields.map(field => <div key={field.name}>
      <label htmlFor={`booking-${field.name}`} className={labelClass}>{field.label}</label>
      <input id={`booking-${field.name}`} name={field.name} type={field.type} placeholder={field.placeholder} required={field.required} autoComplete={field.autoComplete} className={inputClass} />
    </div>)}
    <div>
      <label htmlFor="booking-datetime" className={labelClass}>Ngày giờ</label>
      <div className="relative">
        <input id="booking-datetime" name="datetime" type="datetime-local" value={date} onChange={event => setDate(event.target.value)} className={inputClass + " !text-[#9ca3af] desktop:!text-[#a5a4a3] [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"} />
        <div aria-hidden="true" className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4">
          <AssetImage alt="" src="/assets/figma/contact-calendar.svg" loading="lazy" decoding="async" className="object-contain" style={fill} />
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center gap-2.5 pt-1">
      <button type="submit" className="w-full disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 rounded-[6px] bg-[#14806f] px-5 py-2.5 desktop:py-3 font-semibold text-white text-[13.5px] sm:text-[14px] desktop:text-[14.5px] hover:bg-[#0f685a] transition-colors cursor-pointer">
        <span className="relative w-4 h-4 shrink-0"><AssetImage alt="" src="/assets/figma/vuesax-linear-send2.svg" loading="lazy" decoding="async" className="object-contain" style={fill} /></span>
        <span>Thăm khám miễn phí</span>
      </button>
    </div>
    {submitted && <p className="clinic-notice" role="status">Chức năng gửi lịch hẹn sẽ được kết nối khi backend hoàn tất. Bạn có thể gọi <a href="tel:0393312336">0393312336</a> để đặt lịch.</p>}
  </form>;
}
