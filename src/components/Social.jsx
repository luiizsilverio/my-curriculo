import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import '../styles/social.sass';

const social = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/luiz-s-de-oliveira-6b6067210' },
  { name: "github", icon: <FaGithub />, link: 'https://github.com/luiizsilverio' },
  { name: "instagram", icon: <FaInstagram />, link: '#' },
]
const Social = () => {
  return (
    <section id="social-networks">
      {social.map(network => (
        <a href={network.link}
          className='social-btn'
          id={network.name}
          key={network.name}
          target="_blank"
          rel="noreferrer"
        >
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default Social;
