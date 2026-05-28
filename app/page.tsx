import { TopBar } from "@/components/heritage/top-bar"
import { Masthead } from "@/components/heritage/masthead"
import { MainNav } from "@/components/heritage/main-nav"
import { HeroSection } from "@/components/heritage/hero-section"
import { TickerHeadlines } from "@/components/heritage/ticker-headlines"
import { SectionTimeNews } from "@/components/heritage/section-time-news"
import { SectionSeaIslands } from "@/components/heritage/section-sea-islands"
import { SectionCultureMeet } from "@/components/heritage/section-culture-meet"
import { SectionEthnic } from "@/components/heritage/section-ethnic"
import { SectionPreservation } from "@/components/heritage/section-preservation"
import { SectionForumWithSidebar } from "@/components/heritage/section-forum-sidebar"
import { PhotoGallery } from "@/components/heritage/photo-gallery"
import { Newsletter } from "@/components/heritage/newsletter"
import { SiteFooter } from "@/components/heritage/site-footer"
import { FullWidthBanner } from "@/components/heritage/banner-slot"

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
          <TickerHeadlines />
          <SectionTimeNews />
          <FullWidthBanner id="after-time-news" height={90} />
          <SectionSeaIslands />
          <SectionCultureMeet />
          <FullWidthBanner id="after-culture-meet" height={90} />
          <SectionEthnic />
          <SectionPreservation />
          <SectionForumWithSidebar />
          <FullWidthBanner id="after-forum" height={120} />
          <PhotoGallery />
          <Newsletter />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
