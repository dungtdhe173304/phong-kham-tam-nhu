import { ExperienceCard } from "./experience-card";
import { experienceItems } from "@/data/home-content";
export function ExperienceCarousel() {
  return (
    <section className="py-6 sm:py-10 lg:py-12 bg-[#f3f3f3] relative overflow-hidden">
      <div className="container-fig mx-auto px-4 sm:px-6 lg:px-8 desktop:px-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6 mb-4 sm:mb-8 lg:mb-10 font-['Montserrat']">
          <div>
            <p className="font-bold text-[#14806f] text-[13.5px] sm:text-[14.5px] lg:text-[15px] desktop:text-[clamp(24px,1.667vw,32px)] desktop:leading-[clamp(30px,2.083vw,40px)] tracking-wider uppercase">
              {"Video thực tế"}
            </p>
            <h2 className="font-bold text-[#1d1b18] text-[24px] sm:text-[30px] lg:text-[34px] leading-[32px] sm:leading-[38px] lg:leading-[42px] desktop:text-[clamp(40.5px,2.8125vw,54px)] desktop:leading-[clamp(46.5px,3.229vw,62px)] tracking-[0.054px] uppercase mt-0.5">
              <span className="block">
                {"Trải nghiệm"}
              </span>
              <span className="block">
                {"thực tế tại tâm như"}
              </span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2.5 sm:gap-3 md:gap-3.5 self-start md:self-end shrink-0 select-none">
            <button type="button" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white border border-[#d2d1d1] text-[#4a4946] flex items-center justify-center hover:bg-[#14806f] hover:border-[#14806f] hover:text-white transition-all duration-200 cursor-pointer shadow-sm hover:shadow active:scale-95 shrink-0" aria-label="Video trước">
              <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <div className="flex items-center gap-1.5 sm:gap-2" role="group" aria-label="Chuyển slide">
              <button type="button" aria-label="Slide 1" aria-current="true" className="h-2 md:h-2.5 rounded-full transition-all duration-300 cursor-pointer w-6 md:w-7 bg-[#14806f]" />
              <button type="button" aria-label="Slide 2" aria-current="false" className="h-2 md:h-2.5 rounded-full transition-all duration-300 cursor-pointer w-2 md:w-2.5 bg-[#d2d1d1] hover:bg-[#b0afad]" />
              <button type="button" aria-label="Slide 3" aria-current="false" className="h-2 md:h-2.5 rounded-full transition-all duration-300 cursor-pointer w-2 md:w-2.5 bg-[#d2d1d1] hover:bg-[#b0afad]" />
              <button type="button" aria-label="Slide 4" aria-current="false" className="h-2 md:h-2.5 rounded-full transition-all duration-300 cursor-pointer w-2 md:w-2.5 bg-[#d2d1d1] hover:bg-[#b0afad]" />
              <button type="button" aria-label="Slide 5" aria-current="false" className="h-2 md:h-2.5 rounded-full transition-all duration-300 cursor-pointer w-2 md:w-2.5 bg-[#d2d1d1] hover:bg-[#b0afad]" />
              <button type="button" aria-label="Slide 6" aria-current="false" className="h-2 md:h-2.5 rounded-full transition-all duration-300 cursor-pointer w-2 md:w-2.5 bg-[#d2d1d1] hover:bg-[#b0afad]" />
            </div>
            <button type="button" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white border border-[#d2d1d1] text-[#4a4946] flex items-center justify-center hover:bg-[#14806f] hover:border-[#14806f] hover:text-white transition-all duration-200 cursor-pointer shadow-sm hover:shadow active:scale-95 shrink-0" aria-label="Video kế tiếp">
              <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="carousel-bleed-track gap-3.5 sm:gap-5" data-carousel-track="true">
        {experienceItems.map((item, index) => <ExperienceCard key={index} item={item} />)}
        
        
      </div>
    </section>
  );
}
