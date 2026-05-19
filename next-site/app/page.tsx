import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Services from '@/components/Services'
import Promise from '@/components/Promise'
import Gallery from '@/components/Gallery'
import FooterCTA from '@/components/FooterCTA'

export default function Home() {
  return (
    <>
      {/* Nav floats above everything */}
      <Nav />

      <main>
        {/* ── Hero: sticky behind everything, z-0 ── */}
        <Hero />

        {/*
          ── Content: scrolls over the hero from below (curtain effect) ──
          rounded-t-4xl + shadow-curtain = "card lifting" feel
        */}
        <div className="relative z-10 bg-background rounded-t-4xl shadow-curtain">
          <Intro />
          <Services />
          <Promise />
          <Gallery />
          <FooterCTA />
        </div>
      </main>
    </>
  )
}
