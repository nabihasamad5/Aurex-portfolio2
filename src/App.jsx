import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Path from "./components/Path";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useActiveSection from "./hooks/useActiveSection";
import { sections } from "./data";

const ids = sections.map((s) => s.id);

export default function App() {
  const active = useActiveSection(ids);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar active={active} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Path />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
