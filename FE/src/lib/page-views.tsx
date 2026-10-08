import { ServiceDetail } from "@/components/pages/service-detail";
import { serviceContent } from "@/data/service-content";
import { HomePage } from "@/components/pages/home-page";
import { AboutPage } from "@/components/pages/about-page";
import { HandbookPage } from "@/components/pages/handbook-page";
import { ContactPage } from "@/components/pages/contact-page";
import { CoursesPage } from "@/components/pages/courses-page";
import { MyCoursesPage } from "@/components/pages/my-courses-page";

export const pageViews = {
  "/": () => <HomePage />,
  "/dich-vu/bam-huyet-phuc-hoi": () => <ServiceDetail item={serviceContent["/dich-vu/bam-huyet-phuc-hoi"]} />,
  "/dich-vu/da-thong-kinh-lac": () => <ServiceDetail item={serviceContent["/dich-vu/da-thong-kinh-lac"]} />,
  "/dich-vu/ngoc-bich-dung-nhan": () => <ServiceDetail item={serviceContent["/dich-vu/ngoc-bich-dung-nhan"]} />,
  "/dich-vu/tac-dong-cot-song": () => <ServiceDetail item={serviceContent["/dich-vu/tac-dong-cot-song"]} />,
  "/dich-vu/tri-lieu-theo-vung": () => <ServiceDetail item={serviceContent["/dich-vu/tri-lieu-theo-vung"]} />,
  "/dich-vu/tri-lieu-toan-than": () => <ServiceDetail item={serviceContent["/dich-vu/tri-lieu-toan-than"]} />,
  "/gioi-thieu": () => <AboutPage />,
  "/cam-nang": () => <HandbookPage />,
  "/lien-he": () => <ContactPage />,
  "/dao-tao": () => <CoursesPage />,
  "/dao-tao3fb1": () => <MyCoursesPage />,
};
