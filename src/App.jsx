import SideBar from './components/SideBar';
import Home from './components/Home';
import Projects from './components/Projects';
import StarsCanvas from './components/StarsCanvas';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 font-MyFont bg-black tracking-wider'>
        <SideBar />
        <Home />
        <Experience />
        <Tech />
        <StarsCanvas />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
