import Homepage from './Components/Homepage';
import '../src/App.css';
import AboutMe from './Components/AboutMe';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="app">
      <Homepage />
      <Navbar />
      <AboutMe />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;