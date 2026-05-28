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
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Masthead />
      <MainNav />
      <TickerHeadlines />
      <main>
        <HeroSection />
        <SectionTimeNews />
        <FullWidthBanner id="banner-1" height={90} />
        <SectionSeaIslands />
        <SectionCultureMeet />
        <FullWidthBanner id="banner-2" height={90} />
        <SectionEthnic />
        <SectionPreservation />
        <SectionForumWithSidebar />
        <PhotoGallery />
      </main>
      <Newsletter />
      <SiteFooter />
    </div>
  )
}
