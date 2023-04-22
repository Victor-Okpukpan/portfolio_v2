import SideBar from './components/SideBar';
import Home from './components/Home';
import Projects from './components/Projects';
import StarsCanvas from './components/StarsCanvas';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {

  return (
    <div className='relative z-0 font-MyFont bg-black'>
      <SideBar />
      <Home />
      <Tech />
      <Experience />
      <StarsCanvas />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
