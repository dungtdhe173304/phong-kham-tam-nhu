# Phòng khám Tâm Như

Project gồm `BE/` và `FE/`. Giai đoạn đầu triển khai frontend bằng **Next.js App Router + TypeScript + Tailwind CSS v4 + GSAP + Framer Motion**.

## Chạy frontend

```powershell
cd D:\yhoccotruyen\yhoccotruyen\project\phongkhamtamnhu\FE
npm.cmd install
npm.cmd run dev
```

Truy cập http://localhost:3000. Dùng `npm.cmd` trên Windows nếu PowerShell chặn `npm.ps1`.

```powershell
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
npm.cmd run start
```

## Nội dung và cấu trúc

- `FE/src/app/`: routing Next.js, metadata, trang lỗi, CSS.
- `FE/src/components/layout/`: Header, thanh liên hệ, Footer và bố cục dùng chung, viết trực tiếp bằng TSX.
- `FE/src/components/home/`: 10 phần trang chủ và các thẻ dịch vụ, video, đánh giá, bài viết dùng chung.
- `FE/src/components/pages/`: trang chủ, giới thiệu, cẩm nang, liên hệ, đào tạo và khung chi tiết dịch vụ dùng chung cho 6 dịch vụ.
- `FE/src/components/faq-accordion.tsx`: FAQ với Framer Motion.
- `FE/src/components/site-interactions.tsx`: menu, hộp thoại, tìm kiếm, carousel và GSAP ScrollTrigger.
- `FE/src/components/booking-form.tsx`, `contact-form.tsx`, `branch-locator.tsx`: form và tìm/chọn chi nhánh bằng state React.
- `FE/src/data/home-content.ts`, `service-content.ts`, `clinic-content.ts`, `branches.ts`: dữ liệu TypeScript để sửa nội dung, hình ảnh và thông tin chi nhánh.
- `FE/src/data/page-metadata.json`: tiêu đề/mô tả của 12 giao diện, không chứa HTML.
- `FE/src/app/globals.css`: Tailwind được biên dịch từ code của project, kèm CSS riêng cho container, carousel và marquee.
- `FE/src/styles/local-fonts.css`: khai báo font Montserrat local tại `public/fonts/`.
- `FE/public/assets/`, `FE/public/uploads/`: ảnh và biểu tượng có sẵn.
- `BE/`: vị trí dành cho backend, chưa triển khai API.

FE là code React/TypeScript tự chủ. Đã bỏ `html-react-parser`, HTML thô trong `pages.json`, CSS biên dịch cũ, JavaScript bundle và trường form `$ACTION` của ứng dụng nguồn. App chạy mà không cần thư mục HTML nguồn; tất cả hình ảnh/font hiển thị từ project. Bản đồ Google Maps và liên kết mạng xã hội vẫn là dịch vụ ngoài như giao diện ban đầu.

Các trang: `/`, `/gioi-thieu`, `/dao-tao`, `/cam-nang`, `/lien-he`, cùng sáu trang `/dich-vu/*`. Các URL `.html` cũ vẫn mở được. Bản `dao-tao3fb1.html?tab=mine` được giữ riêng tại `/dao-tao3fb1?tab=mine` để bảo toàn giao diện tab “Khoá học của bạn”.

Giữ nguyên thương hiệu **Thuận Thiên**, số điện thoại, hình ảnh và nội dung theo yêu cầu sao chép giao diện. Có thể thay bằng thông tin Tâm Như ở giai đoạn tiếp theo.

Menu di động, carousel, FAQ, hộp thoại tài khoản, tìm kiếm cục bộ và chọn chi nhánh đã được dựng lại. Chức năng tài khoản và gửi lịch hẹn cần backend; form hiện kiểm tra dữ liệu và thông báo chức năng chưa kết nối API. Bản nguồn chỉ có ảnh xem trước video; bài viết/khóa học chi tiết không được cung cấp sẽ hiển thị trang chưa có dữ liệu.

## Chỉnh giao diện

Chỉnh bố cục trong các component TSX; chỉnh nội dung trong `src/data/`; thay ảnh tại `public/assets/` hoặc cập nhật đường dẫn ảnh trong dữ liệu. Các link nội bộ dùng `next/link`. Không cần nhập lại HTML từ website nguồn.

Kiểm tra trình duyệt: khởi động server, sau đó chạy `npm.cmd run check:browser`. Ảnh desktop/mobile được lưu vào `FE/artifacts/`.

## Kết quả kiểm tra

Build production, TypeScript và lint thành công. Kiểm tra trình duyệt xác nhận 12 trang hoạt động trên desktop/mobile, không có lỗi JavaScript hoặc tài nguyên ảnh, cùng carousel, FAQ, hộp thoại tài khoản, menu, form và tìm/chọn chi nhánh. Kiểm tra request xác nhận không tải tài nguyên của ứng dụng nguồn.

Đối chiếu ảnh toàn trang chủ với HTML nguồn tại 1440px và 390px: chiều cao trang trùng nhau; tỷ lệ pixel khác biệt vượt ngưỡng 12/255 là 0,002% trên desktop và 0,004% trên mobile. Kết quả này áp dụng cho trang chủ ở trạng thái ban đầu, không đại diện cho toàn bộ tương tác hoặc các trang khác. `scripts/compare-source.mjs` chỉ dùng thư mục HTML và bản CSS đối chiếu trong `artifacts/reference-assets/` để kiểm tra ảnh; các tài nguyên đối chiếu này không được app import hoặc đưa vào build.

`npm audit --omit=dev` không phát hiện lỗ hổng dependency production. Audit đầy đủ hiện có 5 cảnh báo mức cao thuộc chuỗi dependency lint (`eslint-config-next` → `fast-glob` → `micromatch` → `braces`); chưa áp dụng cách hạ phiên bản Next.js mà npm đề xuất.
