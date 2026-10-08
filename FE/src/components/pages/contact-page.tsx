import { BranchLocator } from "../branch-locator";
import { AssetImage } from "@/components/asset-image";
import { ContactForm } from "../contact-form";

export function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-[#f3f3f3] pt-12 sm:pt-16 lg:pt-[56px] pb-12 sm:pb-16 lg:pb-[120px]">
      <div aria-hidden="true" className="absolute -left-[439px] top-[240px] w-[851px] h-[851px] pointer-events-none">
        <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/ellipse12.svg" />
      </div>
      <div aria-hidden="true" className="absolute -left-[328px] top-[351px] w-[629px] h-[629px] pointer-events-none">
        <AssetImage alt="" loading="lazy" decoding="async" className="object-contain" fill src="/assets/figma/ellipse13.svg" />
      </div>
      <div className="relative space-y-12 sm:space-y-16 lg:space-y-[112px]">
        <section>
          <div className="container-fig mx-auto px-4 sm:px-6 lg:px-8 desktop:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <p className="font-bold text-[#14806f] text-[13px] sm:text-[14px] desktop:text-[clamp(24px,1.667vw,32px)] desktop:leading-[clamp(30px,2.083vw,40px)] tracking-wider uppercase">
                {"Contact"}
              </p>
              <h1 className="mt-1.5 font-bold text-[#1d1b18] text-[24px] sm:text-[30px] xl:text-[34px] leading-[32px] sm:leading-[38px] xl:leading-[42px] desktop:text-[clamp(40.5px,2.8125vw,54px)] desktop:leading-[clamp(46.5px,3.229vw,62px)] tracking-[0.054px]">
                {"Liên hệ với chúng tôi"}
                <br />
                {"để được hỗ trợ nhanh nhất"}
              </h1>
              <ContactForm />
            </div>
            <div data-image-reveal className="relative w-full aspect-[820/554] lg:max-w-[820px] lg:justify-self-end">
              <div className="absolute inset-x-0 bottom-0 h-[84.7%] overflow-hidden rounded-[20px] bg-[#14806f]">
                <div className="absolute inset-0 bg-[rgba(20,128,111,0.8)]" />
                <div aria-hidden="true" className="absolute left-[5.4%] top-[11.2%] w-[109.2%] aspect-square">
                  <div className="absolute inset-[-3.24%]">
                    <AssetImage alt="" loading="lazy" decoding="async" className="object-fill" fill src="/assets/figma/ellipse10.svg" />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute left-[28.9%] top-[52.4%] w-[72.3%] aspect-square">
                  <div className="absolute inset-[-4.89%]">
                    <AssetImage alt="" loading="lazy" decoding="async" className="object-fill" fill src="/assets/figma/ellipse11.svg" />
                  </div>
                </div>
              </div>
              <div className="absolute left-[3.83%] top-0 h-full w-[92.35%]">
                <AssetImage alt="Đội ngũ bác sĩ Tâm Như" decoding="async" className="object-cover" fill src="/assets/figma/layer143534531.png" />
              </div>
            </div>
          </div>
        </section>
        <BranchLocator />
      </div>
    </div>
  );
}
