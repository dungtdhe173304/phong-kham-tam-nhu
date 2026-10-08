import Link from "next/link";

export default function NotFound() {
  return <main className="min-h-screen flex flex-col items-center justify-center gap-5 px-6 text-center bg-[#f3f3f3]">
    <p className="font-bold text-[#14806f] text-5xl">404</p>
    <h1 className="font-bold text-2xl">Trang chưa có trong bản dữ liệu nguồn</h1>
    <p className="text-[#4a4946]">Nội dung chi tiết này chưa được cung cấp trong thư mục HTML gốc.</p>
    <Link href="/" className="clinic-primary">Về trang chủ</Link>
  </main>;
}
