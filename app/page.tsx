import { TopBar } from "@/components/heritage/top-bar"
import { Masthead } from "@/components/heritage/masthead"
import { MainNav } from "@/components/heritage/main-nav"
import { HeroSection } from "@/components/heritage/hero-section"
import { SectionSlider } from "@/components/heritage/section-slider"
import { SectionTimeNews } from "@/components/heritage/section-time-news"
import { SectionSeaIslands } from "@/components/heritage/section-sea-islands"
import { ReadSidebar } from "@/components/heritage/read-sidebar"
import { SectionCategoryGrid } from "@/components/heritage/section-category-grid"
import { SectionMagazine } from "@/components/heritage/section-magazine"
import { SectionVideo } from "@/components/heritage/section-video"
import { SiteFooter } from "@/components/heritage/site-footer"

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background text-foreground paper-grain">
      <div className="map-overlay pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <div className="relative z-10">
        <TopBar />
        <Masthead />
        <MainNav />
        <main>
          <HeroSection />
          <SectionSlider />
          <section className="border-b border-foreground/10">
            <div className="mx-auto max-w-[1200px] px-4 py-6">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-9 space-y-8">
                  <SectionTimeNews />
                  <SectionSeaIslands />
                </div>
                <div className="col-span-12 lg:col-span-3">
                  <ReadSidebar />
                </div>
              </div>
            </div>
          </section>
          <SectionCategoryGrid />
          <SectionMagazine />
          <SectionVideo />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
