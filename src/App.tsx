import { SkipLink } from './components/SkipLink'
import { ScrollProgress } from './components/ScrollProgress'
import { BackgroundLayers } from './components/BackgroundLayers'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { FocusAreas } from './components/FocusAreas'
import { Quotes } from './components/Quotes'
import { Contact } from './components/Contact'

export default function App() {
  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <BackgroundLayers />
      <main id="main-content">
        <Hero />
        <Projects />
        <FocusAreas />
        <Quotes />
        <Contact />
      </main>
    </>
  )
}
