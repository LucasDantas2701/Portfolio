import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Currently from './components/Currently';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: '#090b11', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Currently />
      <CTA />
      <Footer />
    </div>
  );
}
