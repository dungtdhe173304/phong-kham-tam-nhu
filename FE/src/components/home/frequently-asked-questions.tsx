import { FaqAccordion } from "../faq-accordion";
import { faqs } from "@/data/clinic-content";
export function FrequentlyAskedQuestions() {
  return (
    <section className="py-6 sm:py-10 lg:py-12 bg-[#f3f3f3] relative overflow-hidden font-['Montserrat']">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold text-[#1d1b18] text-[24px] sm:text-[30px] lg:text-[34px] leading-[32px] sm:leading-[40px] lg:leading-[44px] desktop:text-[clamp(40.5px,2.8125vw,54px)] desktop:leading-[clamp(46.5px,3.229vw,62px)] text-center mb-5 sm:mb-8 lg:mb-10">
          {"Những câu hỏi thường gặp?"}
        </h2>
        <FaqAccordion items={faqs} />
      </div>
    </section>
  );
}
