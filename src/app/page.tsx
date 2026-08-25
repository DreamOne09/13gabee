import { DemoGate } from "@/components/DemoGate";
import { ExperienceSection } from "@/components/ExperienceSection";
import { FirstScreen } from "@/components/FirstScreen";
import { PhotoGallery } from "@/components/PhotoGallery";
import { SiteFooter } from "@/components/SiteFooter";
import { VisitSection } from "@/components/VisitSection";

export default function Home() {
  return (
    <>
      <DemoGate />
      <div className="page-shell">
        <FirstScreen />
        <ExperienceSection />
        <PhotoGallery />
        <VisitSection />
        <SiteFooter />
      </div>
    </>
  );
}
