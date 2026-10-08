"use client";

import { useState } from "react";
import { AssetImage } from "./asset-image";
import { branches } from "@/data/branches";

function normalize(text: string) {
  return text.toLocaleLowerCase("vi").normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/đ/g, "d");
}

function BranchIcon({ image, className }: { image: string; className: string }) {
  return <div className={className}><AssetImage alt="" src={`/assets/figma/${image}`} loading="lazy" decoding="async" className="object-contain" fill /></div>;
}

export function BranchLocator() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(branches[0]);
  const visible = branches.filter(branch => normalize(branch.name + " " + branch.address).includes(normalize(query)));
  return <section className="relative">
    <div className="container-fig mx-auto px-4 sm:px-6 lg:px-8 desktop:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-[698px_1fr] desktop:grid-cols-[698px_922px] gap-8 lg:gap-[60px] items-start">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 desktop:mb-10">
            <h2 className="font-bold text-[#1d1b18] opacity-80 text-[24px] sm:text-[28px] desktop:text-[32px] leading-[40px] tracking-[0.002em] whitespace-nowrap">Chi nhánh</h2>
            <label className="relative block w-full sm:w-[378px]">
              <span className="sr-only">Tìm chi nhánh gần nhất</span>
              <BranchIcon image="search-vector.svg" className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6" />
              <input type="search" placeholder="Tìm chi nhánh gần nhất" value={query} onChange={event => setQuery(event.target.value)} className="w-full h-[52px] bg-white border border-[#777674] rounded-[100px] pl-[60px] pr-5 font-normal text-[#1d1b18] text-[16px] sm:text-[18px] desktop:text-[20px] placeholder:text-[#A5A4A3] focus:outline-none focus:border-[#14806f] transition-colors" />
            </label>
          </div>
          <div className="flex flex-col gap-5">{visible.map(branch => <article key={branch.id} role="button" tabIndex={0} aria-pressed={branch.id === selected.id} aria-label={`Xem bản đồ ${branch.name}`}
            onClick={event => { if (!(event.target as HTMLElement).closest("a")) setSelected(branch); }}
            onKeyDown={event => { if (event.target !== event.currentTarget) return; if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelected(branch); } }}
            className={"w-full desktop:w-[698px] min-h-[220px] sm:min-h-[250px] desktop:h-[280px] bg-white rounded-[20px] p-5 sm:p-6 desktop:p-[32px] flex flex-col sm:flex-row gap-5 sm:gap-6 desktop:gap-[24px] cursor-pointer transition-all " + (branch.id === selected.id ? "shadow-[4px_4px_20px_rgba(140,191,64,0.25)] ring-1.5 ring-[#14806f]" : "shadow-[4px_4px_20px_rgba(41,45,50,0.1)] hover:shadow-[4px_4px_20px_rgba(20,128,111,0.18)]")}>
            <div className="relative w-full sm:w-[180px] desktop:w-[214px] h-[160px] sm:h-[180px] desktop:h-[216px] shrink-0 rounded-[20px] overflow-hidden bg-white">
              <AssetImage alt={branch.name} src={branch.image} loading="lazy" decoding="async" className="object-cover" fill />
            </div>
            <div className="min-w-0 flex-1 flex flex-col justify-between py-1 desktop:py-0">
              <div className="space-y-2 sm:space-y-2.5 desktop:space-y-3">
                <h3 className="font-bold text-[#4A4946] text-[18px] sm:text-[20px] desktop:text-[24px] leading-tight desktop:leading-[32px] tracking-[0.002em] line-clamp-1">{branch.name}</h3>
                <div className="flex items-start gap-2.5 sm:gap-3 font-semibold text-[#4A4946] text-[14px] sm:text-[16px] desktop:text-[20px] leading-[22px] sm:leading-[24px] desktop:leading-[28px] tracking-[0.001em]">
                  <BranchIcon image="vuesax-bold-location.svg" className="relative w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{branch.address}</span>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3 font-semibold text-[#4A4946] text-[14px] sm:text-[16px] desktop:text-[20px] leading-[22px] sm:leading-[24px] desktop:leading-[28px] tracking-[0.001em]">
                  <BranchIcon image="vuesax-bold-sms.svg" className="relative w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                  <a href={`mailto:${branch.email}`} className="hover:text-[#14806f] truncate">{branch.email}</a>
                </div>
              </div>
              <a href={`tel:${branch.telephone}`} className="self-start mt-3 sm:mt-2 h-[38px] sm:h-[44px] bg-[#14806f] hover:bg-[#0f685a] transition-colors rounded-[44px] px-4 sm:px-6 flex items-center gap-2.5 text-white font-semibold text-[14px] sm:text-[16px] desktop:text-[20px] leading-[28px] tracking-[0.001em]">
                <BranchIcon image="vuesax-bold-call.svg" className="relative w-4 h-4 sm:w-6 sm:h-6 shrink-0" />
                <span>{branch.phone}</span>
              </a>
            </div>
          </article>)}</div>
          {!visible.length && <p role="status" className="clinic-notice">Không tìm thấy chi nhánh phù hợp.</p>}
        </div>
        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[972px] rounded-[20px] overflow-hidden bg-[#e5e7eb] shadow-sm">
          <iframe src={`https://maps.google.com/maps?q=${encodeURIComponent(selected.address)}&output=embed`} title={`Bản đồ ${selected.name}`} className="absolute inset-0 h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </div>
  </section>;
}
