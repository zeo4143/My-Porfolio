import "./App.css";
import About1 from "./Components/AboutMe/About1";
import About2 from "./Components/AboutMe/About2";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import MyProjects from "./Components/MyProjects";
import MySkills from "./Components/MySkills";
import Work from "./Components/Work";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About1 />
      <MySkills />
      <About2 />
      <MyProjects />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
