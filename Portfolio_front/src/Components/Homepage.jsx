import { useNavigate } from 'react-router-dom';
import illustration from '../assets/Portfolio Pic/undraw_programming_re_kg9v.svg';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link as ScrollLink } from "react-scroll";
import '../CSS/Homepage.css';

function Homepage() {
  const navigate = useNavigate();

  const handleViewMyWork = () => {
    navigate('/aboutMe');
  };

  return (
    <div className='homepage'>
      <div className='homepage__content'>
        <div className='homepage__contentPart1'>
          <p className='homepage__content1FirstSentence'>Hello! I'm Reda.</p>
          <p className='homepage__content1SecondSentence'>
            I'm a Junior Full-stack developer based in Montreal
          </p>
          <button onClick={handleViewMyWork} className='homepage__btn'>
          <ScrollLink to='aboutMe' smooth={true} className='linkNav'>Discover more about me</ScrollLink> <span className='homepage__span'><ArrowDownwardIcon className='arrow'/></span>
          </button>
        </div>
        <div className='homepage__contentPart2'>
          <div className='homepage__containerImg'>
            <img src={illustration} alt='' className='homepage__img' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
