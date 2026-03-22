import { useState, useCallback } from 'react'
import { SkipLink, ScrollProgress, BackgroundLayers, MouseGlow } from './shared'
import {
  AuroraGlow, Meteors, Loader, Navbar,
  Hero, Projects, FocusAreas, Quotes, Contact,
} from './components'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const handleComplete = useCallback(() => setLoaded(true), [])

  return (
    <>
      <Loader onComplete={handleComplete} />

      <SkipLink />
      <Navbar />
      <ScrollProgress />
      <BackgroundLayers />
      <AuroraGlow />
      <Meteors />
      <MouseGlow />
      <main id="main-content">
        <Hero ready={loaded} />
        <Projects />
        <FocusAreas />
        <Quotes />
        <Contact />
      </main>
    </>
  )
}
