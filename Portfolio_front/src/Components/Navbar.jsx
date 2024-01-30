
import '../CSS/Navbar.css';
import { Link as ScrollLink } from "react-scroll";
import logo from '../assets/Portfolio Pic/code-tech-dev.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__leftContent">
        <div className="navbar__containLogo">
          <img src={logo} alt="" className="navbar__logo" />
        </div>
        <h2 className="navbar__title">Réda Siouda</h2>
      </div>
      <ul className="navbar__ul">
        <li className="navbar__li"><ScrollLink to='homepage' smooth={true} className='linkNav'>Home</ScrollLink></li>
        <li className="navbar__li"><ScrollLink to='aboutMe' smooth={true} className='linkNav'>AboutMe</ScrollLink></li>
        <li className="navbar__li"><ScrollLink to='project' smooth={true} className='linkNav'>Projects</ScrollLink></li>
        <li className="navbar__li"><ScrollLink to='contact' smooth={true} className='linkNav'>Contact</ScrollLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;