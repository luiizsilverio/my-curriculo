import '../styles/maincontent.sass';
import AboutContainer from './AboutContainer';
import ProjectContainer from './ProjectContainer';
import TechContainer from './TechContainer';

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechContainer />
      <ProjectContainer />
    </main>
  )
}

export default MainContent;
