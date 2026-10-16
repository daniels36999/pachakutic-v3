import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Profile from './components/Profile.jsx';
import Education from './components/Education.jsx';
import Timeline from './components/Timeline.jsx';
import Experience from './components/Experience.jsx';
import Proposals from './components/Proposals.jsx';
import Roadmap from './components/Roadmap.jsx';
import WorkDiagram from './components/WorkDiagram.jsx';
import Candidates from './components/Candidates.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Connector from './components/Connector.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#perfil">Saltar al contenido</a>
      <Header />
      <main>
        <Hero />
        <Connector color="var(--red)" next="var(--orange)" />
        <Profile />
        <Education />
        <Connector color="var(--orange)" next="var(--green)" />
        <Timeline />
        <Experience />
        <Connector color="var(--green)" next="var(--ice)" />
        <Proposals />
        <Roadmap />
        <WorkDiagram />
        <Connector color="var(--blue)" next="var(--red)" />
        <Candidates />
        <Connector color="var(--ice)" next="var(--orange)" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
