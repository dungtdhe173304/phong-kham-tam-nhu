import Link from "next/link";
import { AssetImage } from "./asset-image";
import { BookingForm } from "./booking-form";

const fill = { position: "absolute", inset: 0, width: "100%", height: "100%", color: "transparent" } as const;
const related = [
  { image: "blog-popular-01.jpg", title: "Đả thông kinh lạc là gì? Những ai nên thực hiện?", slug: "da-thong-kinh-lac-la-gi-nhung-ai-nen-thuc-hien" },
  { image: "blog-popular-02.jpg", title: "Đau thần kinh tọa: Dấu hiệu nhận biết và...", slug: "dau-than-kinh-toa-dau-hieu-nhan-biet" },
  { image: "blog-popular-03.jpg", title: "Đả thông kinh lạc là gì? Những ai nên thực hiện?", slug: "da-thong-kinh-lac-la-gi-nhung-ai-nen-thuc-hien" },
  { image: "blog-popular-04.jpg", title: "Đau thần kinh tọa: Dấu hiệu nhận biết và...", slug: "dau-than-kinh-toa-dau-hieu-nhan-biet" },
  { image: "blog-popular-05.jpg", title: "Đả thông kinh lạc là gì? Những ai nên thực hiện?", slug: "da-thong-kinh-lac-la-gi-nhung-ai-nen-thuc-hien" },
];

export function ServiceSidebar({ service }: { service: string }) {
  return <aside className="w-full max-w-[340px] desktop:max-w-[360px] mx-auto xl:mx-0">
    <div className="mb-6 xl:mb-8"><BookingForm service={service} /></div>
    <Link prefetch={false} className="relative block w-full aspect-square overflow-hidden rounded-[10px] bg-[#d9d9d9]" href="/lien-he">
      <AssetImage alt="Trải nghiệm giãn cơ tại Tâm Như" src="/assets/figma/blog-banner-ad.png" loading="lazy" decoding="async" className="object-cover" style={fill} />
    </Link>
    <h2 className="mt-6 xl:mt-8 font-bold text-[#14806f] text-[17px] sm:text-[18px] desktop:text-[20px] leading-[24px] desktop:leading-[28px]">Bệnh lý phù hợp</h2>
    <ul className="mt-4 flex flex-col gap-3">{related.map(article => <li key={article.image}>
      <Link prefetch={false} className="group flex items-start gap-3" href={`/cam-nang/${article.slug}`}>
        <div className="relative h-[72px] w-[105px] desktop:h-[78px] desktop:w-[114px] shrink-0 overflow-hidden rounded-[8px] bg-[#d9d9d9]">
          <AssetImage alt="" src={`/assets/figma/${article.image}`} loading="lazy" decoding="async" className="object-cover" style={fill} />
        </div>
        <span className="font-semibold text-[#4a4946] text-[13.5px] sm:text-[14px] desktop:text-[14.5px] leading-[20px] desktop:leading-[22px] line-clamp-3 group-hover:text-[#14806f] transition-colors">{article.title}</span>
      </Link>
    </li>)}</ul>
  </aside>;
}
