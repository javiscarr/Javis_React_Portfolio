import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="main">
      <Header className="navbarContainer" />
      <Body className="bodyContainer" />
      <About className="aboutContainer" />
      <Projects className="projectsContainer" />
      <Contact className="contactContainer" />
      <Footer className="footerContainer" />
    </main>
  );
}

export default App;
