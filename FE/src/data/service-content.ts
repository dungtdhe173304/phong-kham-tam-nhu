export interface PriceSheet { aspectRatio: string; cropHeight: string; cropTop: string; image: string; imageAlt: string }
export interface ServiceContent { slug: string; name: string; title: string; procedureTitle: string; description: string; sheets: PriceSheet[] }

export const serviceContent: Record<string, ServiceContent> = {
  "/dich-vu/bam-huyet-phuc-hoi": {
    "slug": "bam-huyet-phuc-hoi",
    "name": "Bấm huyệt phục hồi",
    "title": "Gói bấm huyệt phục hồi",
    "procedureTitle": "Quy trình bấm huyệt phục hồi",
    "description": "Bấm huyệt phục hồi tập trung vào việc kích thích các huyệt đạo trọng yếu, giải tỏa căng cứng dây thần kinh, hỗ trợ điều hòa huyết áp, nâng cao chất lượng giấc ngủ và phục hồi sinh lực cơ thể.",
    "sheets": [
      {
        "aspectRatio": "1150 / 954",
        "cropHeight": "170.55%",
        "cropTop": "0%",
        "image": "/assets/figma/service-price-sheet-a.png",
        "imageAlt": "Bảng giá trị liệu theo vùng 40 phút"
      },
      {
        "aspectRatio": "1150 / 1188",
        "cropHeight": "136.95%",
        "cropTop": "0%",
        "image": "/assets/figma/service-price-sheet-b.png",
        "imageAlt": "Bảng giá trị liệu toàn thân chuyên sâu 60 phút"
      },
      {
        "aspectRatio": "1150 / 568",
        "cropHeight": "286.44%",
        "cropTop": "-166.37%",
        "image": "/assets/figma/service-price-sheet-a.png",
        "imageAlt": "Đối tượng phù hợp và lời khuyên của bác sĩ"
      }
    ]
  },
  "/dich-vu/da-thong-kinh-lac": {
    "slug": "da-thong-kinh-lac",
    "name": "Đả thông kinh lạc",
    "title": "Gói đả thông kinh lạc",
    "procedureTitle": "Quy trình đả thông kinh lạc",
    "description": "Kinh lạc là hệ thống đường dẫn khí huyết nuôi dưỡng toàn cơ thể. Khi kinh lạc bị tắc nghẽn, cơ thể sẽ xuất hiện các triệu chứng mệt mỏi, uể oải, đau nhức. Liệu pháp đả thông kinh lạc giúp kích hoạt huyệt đạo, giải tỏa ách tắc và cân bằng âm dương.",
    "sheets": [
      {
        "aspectRatio": "1150 / 954",
        "cropHeight": "170.55%",
        "cropTop": "0%",
        "image": "/assets/figma/service-price-sheet-a.png",
        "imageAlt": "Bảng giá trị liệu theo vùng 40 phút"
      },
      {
        "aspectRatio": "1150 / 1188",
        "cropHeight": "136.95%",
        "cropTop": "0%",
        "image": "/assets/figma/service-price-sheet-b.png",
        "imageAlt": "Bảng giá trị liệu toàn thân chuyên sâu 60 phút"
      },
      {
        "aspectRatio": "1150 / 568",
        "cropHeight": "286.44%",
        "cropTop": "-166.37%",
        "image": "/assets/figma/service-price-sheet-a.png",
        "imageAlt": "Đối tượng phù hợp và lời khuyên của bác sĩ"
      }
    ]
  },
  "/dich-vu/ngoc-bich-dung-nhan": {
    "slug": "ngoc-bich-dung-nhan",
    "name": "Ngọc bích dung nhan",
    "title": "Gói ngọc bích dung nhan",
    "procedureTitle": "Quy trình ngọc bích dung nhan",
    "description": "Ngọc bích dung nhan là liệu pháp dưỡng nhan đông y kết hợp giữa tinh chất ngọc bích tự nhiên và kỹ thuật ấn huyệt khuôn mặt, giúp nâng cơ, kích thích tăng sinh collagen và trẻ hóa làn da tự nhiên.",
    "sheets": [
      {
        "aspectRatio": "1150 / 1188",
        "cropHeight": "136.95%",
        "cropTop": "0%",
        "image": "/assets/figma/service-price-sheet-b.png",
        "imageAlt": "Bảng giá ngọc bích dung nhan & trị liệu toàn thân"
      },
      {
        "aspectRatio": "1150 / 568",
        "cropHeight": "286.44%",
        "cropTop": "-166.37%",
        "image": "/assets/figma/service-price-sheet-a.png",
        "imageAlt": "Đối tượng phù hợp và lời khuyên của bác sĩ"
      }
    ]
  },
  "/dich-vu/tac-dong-cot-song": {
    "slug": "tac-dong-cot-song",
    "name": "Tác động cột sống",
    "title": "Gói tác động thần kinh cột sống",
    "procedureTitle": "Quy trình tác động thần kinh cột sống",
    "description": "Tác động thần kinh cột sống là phương pháp trị liệu không dùng thuốc, sử dụng các thao tác nắn chỉnh bằng tay nhẹ nhàng, chính xác vào hệ cột sống nhằm giải tỏa chèn ép dây thần kinh, điều chỉnh sự sai lệch của các đốt sống.",
    "sheets": [
      {
        "aspectRatio": "1150 / 954",
        "cropHeight": "170.55%",
        "cropTop": "0%",
        "image": "/assets/figma/service-price-sheet-a.png",
        "imageAlt": "Bảng giá trị liệu theo vùng 40 phút"
      },
      {
        "aspectRatio": "1150 / 1188",
        "cropHeight": "136.95%",
        "cropTop": "0%",
        "image": "/assets/figma/service-price-sheet-b.png",
        "imageAlt": "Bảng giá trị liệu toàn thân chuyên sâu 60 phút"
      },
      {
        "aspectRatio": "1150 / 568",
        "cropHeight": "286.44%",
        "cropTop": "-166.37%",
        "image": "/assets/figma/service-price-sheet-a.png",
        "imageAlt": "Đối tượng phù hợp và lời khuyên của bác sĩ"
      }
    ]
  },
  "/dich-vu/tri-lieu-theo-vung": {
    "slug": "tri-lieu-theo-vung",
    "name": "Trị liệu theo vùng",
    "title": "Gói trị liệu theo vùng",
    "procedureTitle": "Quy trình trị liệu",
    "description": "Căng cơ là tình trạng các nhóm cơ bị co cứng hoặc duy trì trạng thái căng trong thời gian dài, khiến cơ khó thư giãn hoàn toàn. Tình trạng này có thể xảy ra ở nhiều vị trí trên cơ thể, thường gặp nhất là vùng cổ, vai, gáy, lưng, thắt lưng, bắp chân và đùi.",
    "sheets": [
      {
        "aspectRatio": "1150 / 954",
        "cropHeight": "170.55%",
        "cropTop": "0%",
        "image": "/assets/figma/service-price-sheet-a.png",
        "imageAlt": "Bảng giá trị liệu theo vùng 40 phút"
      },
      {
        "aspectRatio": "1150 / 1188",
        "cropHeight": "136.95%",
        "cropTop": "0%",
        "image": "/assets/figma/service-price-sheet-b.png",
        "imageAlt": "Bảng giá trị liệu toàn thân chuyên sâu 60 phút"
      },
      {
        "aspectRatio": "1150 / 568",
        "cropHeight": "286.44%",
        "cropTop": "-166.37%",
        "image": "/assets/figma/service-price-sheet-a.png",
        "imageAlt": "Đối tượng phù hợp và lời khuyên của bác sĩ"
      }
    ]
  },
  "/dich-vu/tri-lieu-toan-than": {
    "slug": "tri-lieu-toan-than",
    "name": "Trị liệu toàn thân",
    "title": "Gói trị liệu toàn thân",
    "procedureTitle": "Quy trình trị liệu toàn thân",
    "description": "Trị liệu toàn thân giúp giải phóng căng thẳng tích tụ trên toàn bộ hệ cơ và xương khớp, tăng cường lưu thông tuần hoàn máu, hỗ trợ tái tạo năng lượng và phục hồi thể trạng toàn diện.",
    "sheets": [
      {
        "aspectRatio": "1150 / 1188",
        "cropHeight": "136.95%",
        "cropTop": "0%",
        "image": "/assets/figma/service-price-sheet-b.png",
        "imageAlt": "Bảng giá trị liệu toàn thân chuyên sâu 60 phút"
      },
      {
        "aspectRatio": "1150 / 954",
        "cropHeight": "170.55%",
        "cropTop": "0%",
        "image": "/assets/figma/service-price-sheet-a.png",
        "imageAlt": "Bảng giá trị liệu theo vùng 40 phút"
      },
      {
        "aspectRatio": "1150 / 568",
        "cropHeight": "286.44%",
        "cropTop": "-166.37%",
        "image": "/assets/figma/service-price-sheet-a.png",
        "imageAlt": "Đối tượng phù hợp và lời khuyên của bác sĩ"
      }
    ]
  }
};
