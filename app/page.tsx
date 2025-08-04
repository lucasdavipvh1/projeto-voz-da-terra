import { HeroSection } from "@/components/hero-section"
import { AllCategorySections } from "@/components/category-sections"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Footer } from "@/components/footer"
// LanguageSelector não é mais importado aqui, pois é global no layout
// Header também não é importado aqui, pois é renderizado no ClientLayout

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 dark:from-[#000000] dark:via-[#000000] dark:to-[#000000]">
      <div className="backdrop-blur-xl bg-white/40 dark:bg-black/20 min-h-screen">
        {/* Header é renderizado no ClientLayout agora */}
        <main>
          <HeroSection />
          <AllCategorySections />
        </main>
        <Footer />
        <ScrollToTop />
        {/* LanguageSelector é renderizado no ClientLayout agora */}
      </div>
    </div>
  )
}
