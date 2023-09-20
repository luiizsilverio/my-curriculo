/* eslint-disable no-unused-vars */
import Avatar from '../img/eu.jpg';
import '../styles/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Luiz S. Oliveira" />
      <p>imagem</p>
      <p className="title">Desenvolvedor</p>
      <p>redes sociais</p>
      <p>informações de contato</p>
      <a href="" className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar;
