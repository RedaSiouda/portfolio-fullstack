import { useState } from 'react';
import '../CSS/Footer.css';
import gitIcon from '../assets/Portfolio Pic/github-mark-white.png';
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  // initialisation du state
  const [emailClick, setEmailClick] = useState(false);
  

  // fonction permettant d'ouvrir le client de messagerie email
  const handleEmail = () => {
    // initialisation de mon adresse mail
    const addressEmail = 'sioudaReda.dev@gmail.com';
    // initialisation du message prêt écrit
    const mailtoLink = `mailto:${addressEmail}?subject=Message%20subject&body=Votre%20Message%20ici`;

    // Utilisez window.location.assign pour ouvrir le client de messagerie sans changer de page
    window.location.assign(mailtoLink);

    // Toggle le state de emailClick après la redirection
    setEmailClick((prevEmailClick) => !prevEmailClick);
    console.log(emailClick);
  };

  const sendToGit = () =>{
    const gitUrl = 'https://github.com/RedaSiouda'

    window.open(gitUrl, 'blank');
  }

  return (
    <footer className='footer'>
      <div className='footer__link'>
        <img onClick={sendToGit} src={gitIcon} alt='' className='footer__linkImg' />
        <div
          onClick={handleEmail}
          className='footer__linkImgEmail'
          style={{ backgroundColor: 'transparent', fontSize: '45px', cursor: 'pointer' }}
        >
          <EmailIcon />
        </div>
      </div>

      <div className='footer__containCredit'>
        <div className='footer__credit'>Reda Siouda ©2024</div>
      </div>
    </footer>
  );
}

export default Footer;
