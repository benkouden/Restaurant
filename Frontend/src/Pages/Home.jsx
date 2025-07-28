import React from 'react';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Qualities from '../components/Qualities';
import Menu from '../components/Menu';
import WhoArewe from '../components/WhoArewe';
import Team from '../components/Team';
import Reservation from '../components/Reservation';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <> 
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <WhoArewe/>
      <Team/>
      <Reservation/>
      <Footer/>
    </>
  )
}

export default Home; // Assurez-vous que c'est un export par défaut
