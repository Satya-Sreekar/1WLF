import { SkipLink } from '../components/SkipLink'
import { ScrollProgress } from '../components/ScrollProgress'
import { BackgroundLayers } from '../components/BackgroundLayers'
import { MouseGlow } from '../components/MouseGlow'
import { TmsAuroraGlow } from './components/TmsAuroraGlow'
import { TmsMeteors } from './components/TmsMeteors'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsBar } from './components/StatsBar'
import { FeaturesGrid } from './components/FeaturesGrid'
import { ViewsSection } from './components/ViewsSection'
import { TaskManagementSection } from './components/TaskManagementSection'
import { WorkflowPipeline } from './components/WorkflowPipeline'
import { FreelancerSection } from './components/FreelancerSection'
import { NotificationsSection } from './components/NotificationsSection'
import { ScreenshotGallery } from './components/ScreenshotGallery'
import { AccessControl } from './components/AccessControl'
import { TechStack } from './components/TechStack'
import { ApiFeatures } from './components/ApiFeatures'
import { CtaSection } from './components/CtaSection'
import { Footer } from './components/Footer'

export function TmsApp() {
  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <BackgroundLayers />
      <TmsAuroraGlow />
      <TmsMeteors />
      <MouseGlow />
      <Navbar />
      <main id="main-content">
        <Hero />
        <StatsBar />
        <FeaturesGrid />
        <ViewsSection />
        <TaskManagementSection />
        <WorkflowPipeline />
        <FreelancerSection />
        <NotificationsSection />
        <ScreenshotGallery />
        <AccessControl />
        <TechStack />
        <ApiFeatures />
        <CtaSection />
        <Footer />
      </main>
    </>
  )
}
