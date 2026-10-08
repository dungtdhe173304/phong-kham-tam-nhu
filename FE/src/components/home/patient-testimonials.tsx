import { AssetImage } from "@/components/asset-image";
import { TestimonialCard } from "./testimonial-card";
import { testimonialItems } from "@/data/home-content";
import { testimonialItems2 } from "@/data/home-content";
import { testimonialItems3 } from "@/data/home-content";
import { testimonialItems4 } from "@/data/home-content";
export function PatientTestimonials() {
  return (
    <section className="py-6 sm:py-10 lg:py-12 bg-[#f3f3f3] relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] lg:w-[650px] h-[500px] lg:h-[650px] pointer-events-none opacity-40">
        <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/ellipse25.svg" />
      </div>
      <div className="container-fig mx-auto px-4 sm:px-6 lg:px-8 desktop:px-0 relative z-10 xl:min-h-[440px]">
        <div className="relative w-[32px] sm:w-[48px] lg:w-[56px] h-[26px] sm:h-[40px] lg:h-[46px] mb-2 sm:mb-3">
          <AssetImage alt="" loading="lazy" decoding="async" className="object-contain object-left" fill src="/assets/figma/quote-mark.svg" />
        </div>
        <div className="mb-4 sm:mb-8 font-['Montserrat']">
          <p className="font-bold text-[#14806f] text-[13.5px] sm:text-[14.5px] lg:text-[15px] desktop:text-[clamp(24px,1.667vw,32px)] desktop:leading-[clamp(30px,2.083vw,40px)] tracking-wider uppercase">
            {"Feedback"}
          </p>
          <h2 className="font-bold text-[#1d1b18] text-[24px] sm:text-[30px] lg:text-[34px] leading-[32px] sm:leading-[38px] lg:leading-[42px] desktop:text-[clamp(40.5px,2.8125vw,54px)] desktop:leading-[clamp(46.5px,3.229vw,62px)] tracking-[0.054px] uppercase mt-0.5">
            <span className="block">
              {"Khách hàng nói gì"}
            </span>
            <span className="block">
              {"về chúng tôi?"}
            </span>
          </h2>
        </div>
        <div className="xl:hidden overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)] py-1">
          <div className="animate-marquee-left flex gap-3 sm:gap-4">
            {testimonialItems.map((item, index) => <TestimonialCard key={index} item={item} />)}
            
            
            
            
            
          </div>
        </div>
        <div className="hidden xl:block absolute left-[480px] desktop:left-[clamp(540px,37.5vw,720px)] top-0 overflow-hidden font-['Montserrat'] [mask-image:linear-gradient(to_right,transparent_0%,black_100px)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_100px)]" style={{"right":"calc(-50vw + 50%)"}}>
          <div className="relative space-y-3.5 py-2">
            <div className="animate-marquee-left flex gap-3.5">
              {testimonialItems2.map((item, index) => <TestimonialCard key={index} item={item} desktop />)}
              
              
              
              
              
              
              
              
            </div>
            <div className="animate-marquee-right flex gap-3.5">
              {testimonialItems3.map((item, index) => <TestimonialCard key={index} item={item} desktop />)}
              
              
              
              
              
              
              
              
            </div>
            <div className="animate-marquee-left-fast flex gap-3.5">
              {testimonialItems4.map((item, index) => <TestimonialCard key={index} item={item} desktop />)}
              
              
              
              
              
              
              
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
