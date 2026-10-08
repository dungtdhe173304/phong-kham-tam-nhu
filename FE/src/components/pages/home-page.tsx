import { HeroBanner } from "../home/hero-banner";
import { ClinicIntroduction } from "../home/clinic-introduction";
import { ConsultationProcess } from "../home/consultation-process";
import { HealthConcerns } from "../home/health-concerns";
import { ServiceCarousel } from "../home/service-carousel";
import { ExperienceCarousel } from "../home/experience-carousel";
import { PatientTestimonials } from "../home/patient-testimonials";
import { HealthArticles } from "../home/health-articles";
import { FrequentlyAskedQuestions } from "../home/frequently-asked-questions";
import { HealthSearchBanner } from "../home/health-search-banner";

export function HomePage() {
  return <>
    <h1 className="sr-only">Phòng khám Y học cổ truyền Tâm Như</h1>
    <HeroBanner />
    <ClinicIntroduction />
    <ConsultationProcess />
    <HealthConcerns />
    <ServiceCarousel />
    <ExperienceCarousel />
    <PatientTestimonials />
    <HealthArticles />
    <FrequentlyAskedQuestions />
    <HealthSearchBanner />
  </>;
}
