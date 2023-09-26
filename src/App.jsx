import { Suspense } from "react";
import { lazyWithPreload } from "react-lazy-with-preload";
const SideBarComponent = lazyWithPreload(() => import("./components/SideBar"));
const HomeComponent = lazyWithPreload(() => import("./components/Home"));
const ProjectsComponent = lazyWithPreload(() => import("./components/Projects"));
const StarsCanvasComponent = lazyWithPreload(() => import("./components/StarsCanvas"));
const ContactComponent = lazyWithPreload(() => import("./components/Contact"));
const ExperienceComponent = lazyWithPreload(() => import("./components/Experience"));
const FooterComponent = lazyWithPreload(() => import("./components/Footer"));
const TechComponent = lazyWithPreload(() => import("./components/Tech"));
import { BrowserRouter } from "react-router-dom";

SideBarComponent.preload();
HomeComponent.preload();
ProjectsComponent.preload();
StarsCanvasComponent.preload();
ContactComponent.preload();
ExperienceComponent.preload();
FooterComponent.preload();
TechComponent.preload();

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <section
            id="loader"
            className="w-full h-screen bg-black text-purple-600 flex items-center justify-center"
          >
            <div>
              <p className="text-3xl md:text-4xl font-bold animate-pulse">Welcome To My Portfolio</p>
            </div>
          </section>
        }
      >
        <div className="relative z-0 font-MyFont bg-black tracking-wider">
          <SideBarComponent />
          <HomeComponent />
          <ExperienceComponent />
          <TechComponent />
          <div className="hidden md:block">
            <StarsCanvasComponent />
          </div>
          <ProjectsComponent />
          <ContactComponent />
          <FooterComponent />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
