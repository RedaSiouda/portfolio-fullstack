
import illustration2 from '../assets/Portfolio Pic/undraw_hacker_mind_-6-y85.svg'
import reactIcon from '../assets/Portfolio Pic/icons8-react-js.svg';
import TypeScriptIcon from '../assets/Portfolio Pic/typescript.png';
import DatabaseIcon from '../assets/Portfolio Pic/database-storage.png'
import PhpIcon from '../assets/Portfolio Pic/php.png'
import PythonIcon from '../assets/Portfolio Pic/python.png';
import NodeIcon from '../assets/Portfolio Pic/icons8-nodejs.svg';
import MongoIcon from '../assets/Portfolio Pic/icons8-mongo-db-64.png';
import C from '../assets/Portfolio Pic/icons8-c.svg';
import CPlus from '../assets/Portfolio Pic/cPlus.svg';
import jestIcon from '../assets/Portfolio Pic/file-type-jest.svg';
import dockerIcon from '../assets/Portfolio Pic/docker.svg';

import '../CSS/AboutMe.css'
function AboutMe() {

  return (

    

    <div className='aboutMe'>
     
        <h3 className="aboutMe__title">About Me</h3>
     

        <div className="aboutMe__content">

          <div className="aboutMe__me">

            <div className="aboutMe__part1">
                <img src={illustration2} alt="illustration hackerMind" className="aboutMe__img" />
            </div>
            <div className="aboutMe__part2">
                <p className="aboutMe__desc">
                Hi there! I'm Reda, a dedicated full-stack developer on a perpetual learning journey. After graduation, I delved into freelancing, collaborating with small businesses to turn ideas into digital realities. Proficient in soft skills, I bridge gaps across diverse backgrounds and ages. What sets me apart is my rapid absorption of complex concepts, thriving on swiftly assimilating intricate information. Let's connect and turn your ideas into reality!
                </p>
              
            </div>
          </div>
          <div className="aboutMe__contentPart3">
            
            <div className="aboutMe__part3">
              <div className="aboutMe__part3Title">My skills</div>
                <div className="aboutMe__contentIcon">

                <div className="aboutMe__icon reactIcon">
                  <img src='' alt="" className="aboutMe__iconImg" />
                  <p className="aboutMe__iconTitle">Javascript</p>
                </div>
                <div className="aboutMe__icon jsIcon">
                  <img src={reactIcon} alt='' className="aboutMe__iconImg" />
                  <p className="aboutMe__iconTitle">React</p>
                </div>
                <div className="aboutMe__icon htmlIcon">
                  <img src={TypeScriptIcon} alt="" className="aboutMe__iconImg" />
                  <p className="aboutMe__iconTitle">Typescript</p>
                </div>
                <div className="aboutMe__icon htmlIcon">
                  <img src={jestIcon} alt="" className="aboutMe__iconImg" />
                  <p className="aboutMe__iconTitle">Jest</p>
                </div>
                <div className="aboutMe__icon cssIcon">
                  <img src={NodeIcon} alt="" className="aboutMe__iconImg" />
                  <p className="aboutMe__iconTitle">Node.js</p>
                </div>
                <div className="aboutMe__icon cssIcon">
                  <img src={MongoIcon} alt="" className="aboutMe__iconImg" />
                  <p className="aboutMe__iconTitle">Mongo DB</p>
                </div>
                </div>
            </div>
            <div className="aboutMe__part4">

              <div className="aboutMe__part4Title">In progress</div>

                <div className="aboutMe__contentIcon2">

              <div className="aboutMe__icon reactIcon">
                  <img src={DatabaseIcon} alt="" className="aboutMe__iconImg" />
                  <p className="aboutMe__iconTitle">PostgreSql</p>
                </div>
                <div className="aboutMe__icon jsIcon">
                  <img src={C} alt="" className="aboutMe__iconImg" />
                  <p className="aboutMe__iconTitle">C#</p>
                </div>
                <div className="aboutMe__icon htmlIcon">
                  <img src={PhpIcon} alt="" className="aboutMe__iconImg" />
                  <p className="aboutMe__iconTitle">PHP</p>
                </div>
                <div className="aboutMe__icon cssIcon">
                  <img src={PythonIcon} alt="" className="aboutMe__iconImg" />
                  <p className="aboutMe__iconTitle">Python</p>
                </div>
                <div className="aboutMe__icon cssIcon">
                  <img src={CPlus} alt="" className="aboutMe__iconImg" />
                  <p className="aboutMe__iconTitle">C++</p>
                </div>
                <div className="aboutMe__icon cssIcon">
                  <img src={dockerIcon} alt="" className="aboutMe__iconImg" />
                  <p className="aboutMe__iconTitle">docker</p>
                </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  

  )
}

export default AboutMe
