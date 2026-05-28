import { SiteHeader } from "@/components/heritage/site-header"
import { Hero } from "@/components/heritage/hero"
import { FeaturedNews } from "@/components/heritage/featured-news"
import { HeritageGrid } from "@/components/heritage/heritage-grid"
import { Timeline } from "@/components/heritage/timeline"
import { PullQuote } from "@/components/heritage/pull-quote"
import { ArchiveDossier } from "@/components/heritage/archive-dossier"
import { PhotoGallery } from "@/components/heritage/photo-gallery"
import { Figures } from "@/components/heritage/figures"
import { Newsletter } from "@/components/heritage/newsletter"
import { SiteFooter } from "@/components/heritage/site-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Map overlay watermark */}
      <div className="map-overlay pointer-events-none fixed inset-0 z-0" aria-hidden="true" />

      {/* Floating dust */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="dust absolute left-[10%] top-[15%] h-1 w-1 rounded-full bg-sepia/40" />
        <div className="dust absolute left-[70%] top-[30%] h-[3px] w-[3px] rounded-full bg-sepia/30" style={{ animationDelay: "1.5s" }} />
        <div className="dust absolute left-[40%] top-[60%] h-[2px] w-[2px] rounded-full bg-sepia/40" style={{ animationDelay: "3s" }} />
        <div className="dust absolute left-[85%] top-[80%] h-1 w-1 rounded-full bg-sepia/30" style={{ animationDelay: "4.5s" }} />
        <div className="dust absolute left-[20%] top-[85%] h-[2px] w-[2px] rounded-full bg-sepia/40" style={{ animationDelay: "6s" }} />
      </div>

      <div className="relative z-10">
        <SiteHeader />
        <Hero />
        <FeaturedNews />
        <PullQuote />
        <HeritageGrid />
        <Timeline />
        <ArchiveDossier />
        <Figures />
        <PhotoGallery />
        <Newsletter />
        <SiteFooter />
      </div>
    </main>
  )
}
