import { useState, useCallback } from 'react'
import { SkipLink } from './components/SkipLink'
import { ScrollProgress } from './components/ScrollProgress'
import { BackgroundLayers } from './components/BackgroundLayers'
import { MouseGlow } from './components/MouseGlow'
import { AuroraGlow } from './components/AuroraGlow'
import { Meteors } from './components/Meteors'
import { Loader } from './components/Loader'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { FocusAreas } from './components/FocusAreas'
import { Quotes } from './components/Quotes'
import { Contact } from './components/Contact'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const handleComplete = useCallback(() => setLoaded(true), [])

  return (
    <>
      <Loader onComplete={handleComplete} />

      <SkipLink />
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
