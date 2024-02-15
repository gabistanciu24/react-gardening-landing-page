import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Benefits from './components/benefits/Benefits'
import Contact from './components/contact/Contact';
import Motive from './components/motive/Motive';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Benefits/>
      <Motive/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
