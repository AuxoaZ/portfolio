import Footer from "./components/Footer";
import { About } from "./components/About";
import Contact from "./components/Contact";
import Freelance from "./components/Freelance";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="flex flex-col bg-base-200 text-base-content">
      <Navbar />
      <Hero />

      <About />
      <Portfolio />
      <Skill />
      <Freelance />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
