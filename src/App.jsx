import { lazy, Suspense } from 'react';
const SideBarComponent = lazy(() => import('./components/SideBar'));
const HomeComponent = lazy(() => import('./components/Home'));
const ProjectsComponent = lazy(() => import('./components/Projects'));
const StarsCanvasComponent = lazy(() => import('./components/StarsCanvas'));
const ContactComponent = lazy(() => import('./components/Contact'));
const ExperienceComponent = lazy(() => import('./components/Experience'));
const FooterComponent = lazy(() => import('./components/Footer'));
const TechComponent = lazy(() => import('./components/Tech'));
import { BrowserRouter } from 'react-router-dom';
const renderLoader = () => {
  return (
    <section id="loader" className="w-full h-screen bg-black text-purple-600 flex items-center justify-center">
      <div>
        <p className='text-3xl md:text-4xl font-bold'>Loading...</p>
      </div>
    </section>
  )
}

function App() {

  return (
    <BrowserRouter>
    <Suspense fallback={renderLoader()}>
      <div className='relative z-0 font-MyFont bg-black tracking-wider'>
        <SideBarComponent />
        <HomeComponent />
        <ExperienceComponent />
        <TechComponent />
        <StarsCanvasComponent />
        <ProjectsComponent />
        <ContactComponent />
        <FooterComponent />
      </div>
    </Suspense>
    </BrowserRouter>
  )
}

export default App
