import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMongodb, DiReact  } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';

import '../styles/techcontainer.sass';

const techs = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "Javascript", icon: <DiJsBadge /> },
  { id: "ts", name: "Typescript", icon: <SiTypescript /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "rn", name: "React Native", icon: <DiReact /> },
  { id: "mongo", name: "MongoDB", icon: <DiMongodb /> },
]

const TechContainer = () => {
  return (
    <section className='tech-container'>
      <h2>Tecnologias</h2>
      <div className="tech-grid">
        {
          techs.map(tech => (
            <div className="tech-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="tech-info">
                <h3>{tech.name}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum ullam velit quod.</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default TechContainer;
