import Layout from "./layout/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Experience from "./components/Experience";
import WorkMethod from "./components/WorkMethod";
import Certificates from "./components/Certificates";

export default function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Projects />
      <WorkMethod />
      <About />
      <Experience />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </Layout>
  );
}
