import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';
import '../styles/infocontainer.sass';

const InfoContainer = () => {
  return (
    <section id="information-container">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(19)99999-9999</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>luiiz.silverio@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Campinas / SP</p>
        </div>
      </div>
    </section>

  )
}

export default InfoContainer;
