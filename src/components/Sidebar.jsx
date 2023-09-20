/* eslint-disable no-unused-vars */
import Avatar from '../img/eu.jpg';
import '../styles/sidebar.sass';
import InfoContainer from './InfoContainer';
import Social from './Social';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Luiz S. Oliveira" />
      <p>imagem</p>
      <p className="title">Desenvolvedor</p>
      <Social />
      <InfoContainer />
      <a href="" className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar;
