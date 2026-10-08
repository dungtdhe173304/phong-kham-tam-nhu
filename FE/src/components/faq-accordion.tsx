"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export interface Faq { id: string; question: string; answer: string }

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();
  return (
    <div className="space-y-2.5 sm:space-y-3.5">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <div key={item.id} className={active
            ? "bg-[#14806f] text-white rounded-[16px] p-4 sm:p-6 lg:p-7 shadow-md transition-all duration-300"
            : "bg-white rounded-[16px] shadow-[0px_4px_15px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300"}>
            <button type="button" aria-expanded={active} aria-controls={`faq-${item.id}`}
              onClick={() => setOpen(active ? null : index)}
              className={active ? "w-full flex items-center justify-between gap-3 sm:gap-4 cursor-pointer select-none text-left" : "w-full min-h-[52px] sm:min-h-[64px] py-3 sm:py-0 px-4 sm:px-6 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer select-none text-left"}>
              <h3 className={active ? "font-bold text-[16px] sm:text-[17.5px] lg:text-[18.5px] leading-[24px] sm:leading-[26px] text-white" : "font-semibold text-[#4a4946] text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] leading-[22px] sm:leading-[26px] line-clamp-2 sm:line-clamp-1"}>{item.question}</h3>
              {active ? <span aria-hidden className="w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] flex items-center justify-center shrink-0 opacity-90"><span className="w-4 sm:w-5 h-[2px] bg-white rounded" /></span>
                : <span aria-hidden className="relative w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] shrink-0 flex items-center justify-center" style={{ backgroundImage: "url('/assets/figma/ellipse7.svg')", backgroundSize: "contain" }}><span className="text-white font-bold text-lg sm:text-xl leading-none">+</span></span>}
            </button>
            <AnimatePresence initial={false}>
              {active && <motion.div key="answer" id={`faq-${item.id}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }} className="overflow-hidden">
                <div className="w-full h-px bg-white/20 my-3 sm:my-4" />
                <div className="font-medium text-white/95 text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-[24px] sm:leading-[26px] whitespace-pre-line">{item.answer}</div>
              </motion.div>}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
