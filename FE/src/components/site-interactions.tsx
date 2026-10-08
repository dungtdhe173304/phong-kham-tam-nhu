"use client";

import { useEffect, useRef, useState, type ReactNode, type FormEvent } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Dialog = "menu" | "login" | "register" | "booking" | "search" | "video" | null;
type SearchResult = { title: string; href: string };
const navigation = [
  ["Trang chủ", "/"], ["Giới thiệu", "/gioi-thieu"],
  ["Trị liệu theo vùng", "/dich-vu/tri-lieu-theo-vung"],
  ["Trị liệu toàn thân", "/dich-vu/tri-lieu-toan-than"],
  ["Đả thông kinh lạc", "/dich-vu/da-thong-kinh-lac"],
  ["Tác động cột sống", "/dich-vu/tac-dong-cot-song"],
  ["Ngọc bích dung nhan", "/dich-vu/ngoc-bich-dung-nhan"],
  ["Bấm huyệt phục hồi", "/dich-vu/bam-huyet-phuc-hoi"],
  ["Đào tạo", "/dao-tao"], ["Cẩm nang", "/cam-nang"], ["Liên hệ", "/lien-he"],
];

/** Project-owned navigation dialogs, carousel controls and scroll animation. */
export function SiteInteractions({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const [dialog, setDialog] = useState<Dialog>(null);
  const [notice, setNotice] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const reducedMotion = useReducedMotion();

  function openDialog(value: Dialog) {
    returnFocus.current = document.activeElement as HTMLElement;
    setNotice("");
    setDialog(value);
  }

  useEffect(() => {
    const scope = root.current;
    if (!scope) return;
    gsap.registerPlugin(ScrollTrigger);
    const cleanups: (() => void)[] = [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      if (!reduced) {
        scope.querySelectorAll<HTMLElement>("main section h2").forEach(heading => {
          gsap.from(heading, { y: 12, duration: 0.5, ease: "power2.out", scrollTrigger: { trigger: heading, start: "top 95%", once: true } });
        });
        scope.querySelectorAll<HTMLElement>("[data-image-reveal]").forEach(imageGroup => {
          const portraits = imageGroup.querySelectorAll<HTMLImageElement>('img[src$="/training-instructor.png"], img[src$="/layer143534531.png"]');
          if (!portraits.length) return;
          gsap.from(portraits, {
            autoAlpha: 0,
            y: 32,
            scale: 0.97,
            transformOrigin: "center bottom",
            duration: 1.1,
            ease: "power3.out",
            clearProps: "opacity,visibility,transform,transformOrigin",
            scrollTrigger: { trigger: imageGroup, start: "top 88%", once: true },
          });
        });
      }
    }, scope);

    scope.querySelectorAll<HTMLElement>("section").forEach(section => {
      const dots = [...section.querySelectorAll<HTMLButtonElement>('button[aria-label^="Slide "]')];
      if (!dots.length) return;
      const hero = section.querySelector<HTMLElement>('[class*="aspect-[1920/650]"]');
      const slides = hero ? [...hero.children].filter((child): child is HTMLElement => child instanceof HTMLElement && child.classList.contains("inset-0")) : [];
      const track = section.querySelector<HTMLElement>("[data-carousel-track]");
      let index = 0;
      const controls = dots[0].parentElement?.parentElement;
      const buttons = controls ? [...controls.children].filter((child): child is HTMLButtonElement => child instanceof HTMLButtonElement) : [];
      function select(next: number) {
        index = (next + dots.length) % dots.length;
        dots.forEach((dot, i) => {
          dot.setAttribute("aria-current", String(i === index));
          dot.style.backgroundColor = i === index ? "#14806f" : "#d2d1d1";
        });
        if (slides.length) {
          slides.forEach((slide, i) => {
            slide.style.zIndex = i === index ? "10" : "0";
            slide.style.pointerEvents = i === index ? "auto" : "none";
            gsap.to(slide, { opacity: i === index ? 1 : 0, duration: reduced ? 0 : 0.5, overwrite: true });
          });
        } else if (track) {
          const cards = [...track.children].filter((child): child is HTMLElement => child instanceof HTMLElement);
          const card = cards[index];
          if (card && cards[0]) track.scrollTo({ left: card.offsetLeft - cards[0].offsetLeft, behavior: reduced ? "instant" : "smooth" });
        }
      }
      const listen = (element: HTMLElement, event: string, handler: EventListener) => {
        element.addEventListener(event, handler);
        cleanups.push(() => element.removeEventListener(event, handler));
      };
      dots.forEach((dot, i) => listen(dot, "click", () => select(i)));
      if (buttons[0]) listen(buttons[0], "click", () => select(index - 1));
      if (buttons[1]) listen(buttons[1], "click", () => select(index + 1));
      if (hero) {
        let paused = false;
        listen(hero, "mouseenter", () => { paused = true; });
        listen(hero, "mouseleave", () => { paused = false; });
        listen(hero, "focusin", () => { paused = true; });
        listen(hero, "focusout", () => { paused = false; });
        if (!reduced) {
          const timer = window.setInterval(() => { if (!paused && !document.hidden) select(index + 1); }, 4500);
          cleanups.push(() => window.clearInterval(timer));
        }
      }
    });
    return () => { context.revert(); cleanups.forEach(cleanup => cleanup()); };
  }, []);

  useEffect(() => {
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => dialogRef.current?.querySelector<HTMLElement>("button, a, input")?.focus({ preventScroll: true }));
    function keyboard(event: KeyboardEvent) {
      if (event.key === "Escape") setDialog(null);
      if (event.key !== "Tab") return;
      const elements = [...(dialogRef.current?.querySelectorAll<HTMLElement>('button, a[href], input, select, textarea, [tabindex="0"]') ?? [])];
      const first = elements[0], last = elements.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }
    document.addEventListener("keydown", keyboard);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", keyboard);
      returnFocus.current?.focus({ preventScroll: true });
    };
  }, [dialog]);

  function click(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    const button = target.closest<HTMLButtonElement>("button");
    if (button?.getAttribute("aria-label") === "Menu") { openDialog("menu"); return; }
    const text = button?.textContent?.trim();
    if (text === "Đăng nhập") { openDialog("login"); return; }
    if (text === "Đăng ký") { openDialog("register"); return; }
    if (button?.closest("footer") && window.innerWidth < 1024) {
      const content = button.nextElementSibling as HTMLElement | null;
      if (content) {
        const expanded = button.getAttribute("aria-expanded") !== "true";
        button.setAttribute("aria-expanded", String(expanded));
        content.style.display = expanded ? "block" : "none";
      }
    }
    if (target.closest('[title="Bấm để phát video"]')) { openDialog("video"); return; }
    const link = target.closest<HTMLAnchorElement>("a");
    if (link && /\/(dat-lich|dat-hen|booking)(?:[?#]|$)/.test(link.getAttribute("href") ?? "")) {
      event.preventDefault(); openDialog("booking");
    }
  }

  function submit(event: FormEvent<HTMLDivElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const search = form.querySelector<HTMLInputElement>('input[placeholder*="Tìm kiếm"]');
    if (search) {
      const query = search.value.trim().toLocaleLowerCase("vi");
      const links = [...(root.current?.querySelectorAll<HTMLAnchorElement>('main a[href^="/"]') ?? [])];
      const unique = new Map<string, SearchResult>();
      links.forEach(link => {
        const title = link.textContent?.trim() || link.querySelector("img")?.alt || "";
        if (title && query && title.toLocaleLowerCase("vi").includes(query)) unique.set(link.pathname, { title, href: link.getAttribute("href")! });
      });
      setResults([...unique.values()]); openDialog("search");
    } else { openDialog("booking"); }
  }

  const titles: Record<Exclude<Dialog, null>, string> = {
    menu: "Menu", login: "Đăng nhập", register: "Đăng ký", booking: "Đặt hẹn tư vấn", search: "Kết quả tìm kiếm", video: "Video thực tế",
  };

  function submitDialog(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    setNotice(dialog === "booking"
      ? "Chức năng gửi lịch hẹn sẽ được kết nối khi backend hoàn tất. Bạn có thể gọi 0393312336 để đặt lịch."
      : "Chức năng tài khoản sẽ được kết nối khi backend hoàn tất.");
  }

  return <div ref={root} className="site-interactions" onClick={click} onSubmit={submit}>
    {children}
    <AnimatePresence>
      {dialog && <motion.div className="clinic-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.15 }}
        onClick={event => { if (event.target === event.currentTarget) setDialog(null); }}>
        <motion.div ref={dialogRef} className="clinic-dialog" role="dialog" aria-modal="true" aria-labelledby="clinic-dialog-title"
          initial={{ y: reducedMotion ? 0 : 20 }} animate={{ y: 0 }} exit={{ y: reducedMotion ? 0 : 10 }}>
          <button type="button" aria-label="Đóng" className="clinic-close" onClick={() => setDialog(null)}>×</button>
          <h2 id="clinic-dialog-title">{titles[dialog]}</h2>
          {dialog === "menu" ? <>
            <nav className="clinic-mobile-nav" aria-label="Điều hướng di động">{navigation.map(([label, href]) => <Link key={href} href={href} onClick={() => setDialog(null)}>{label}</Link>)}</nav>
            <div className="flex gap-3 mt-5"><button className="clinic-primary" onClick={() => openDialog("login")}>Đăng nhập</button><button className="clinic-primary" onClick={() => openDialog("register")}>Đăng ký</button></div>
          </> : dialog === "search" ? <div>
            {results.length ? results.map(result => <Link className="block py-3 border-b border-gray-200" key={result.href} href={result.href} onClick={() => setDialog(null)}>{result.title}</Link>) : <p>Chưa tìm thấy nội dung phù hợp. Vui lòng thử từ khóa khác hoặc liên hệ phòng khám.</p>}
          </div> : dialog === "video" ? <p className="clinic-notice">Bản website nguồn có ảnh xem trước nhưng chưa có đường dẫn video.</p> : <form onSubmit={submitDialog}>
            {(dialog === "register" || dialog === "booking") && <label>Họ và tên<input name="name" autoComplete="name" required /></label>}
            {dialog === "booking" ? <>
              <label>Số điện thoại<input name="phone" type="tel" autoComplete="tel" required pattern="[0-9+ ().-]{9,15}" /></label>
              <label>Ngày mong muốn<input name="date" type="date" required /></label>
            </> : <>
              <label>Email<input name="email" type="email" autoComplete="email" required /></label>
              <label>Mật khẩu<input name="password" type="password" minLength={8} autoComplete={dialog === "register" ? "new-password" : "current-password"} required /></label>
            </>}
            {notice && <p className="clinic-notice" role="status">{notice}</p>}
            <button type="submit" className="clinic-primary">{dialog === "booking" ? "Gửi yêu cầu" : titles[dialog]}</button>
            {dialog === "booking" && <a href="tel:0393312336" className="block mt-4 text-[#14806f] font-semibold">Gọi 0393312336</a>}
          </form>}
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  </div>;
}
