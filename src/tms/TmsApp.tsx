import { SkipLink, ScrollProgress, BackgroundLayers, MouseGlow } from '../shared'
import {
  TmsAuroraGlow, TmsMeteors, Navbar, Hero, StatsBar,
  FeaturesGrid, ViewsSection, TaskManagementSection,
  WorkflowPipeline, FreelancerSection, NotificationsSection,
  ScreenshotGallery, AccessControl, TechStack,
  ApiFeatures, CtaSection, Footer,
} from './components'

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
