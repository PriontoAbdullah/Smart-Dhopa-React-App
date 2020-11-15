import React from 'react';
import Header from './components/Header/Header';
import About from './components/Home/About';
import ChooseUs from './components/Home/ChooseUs';
import ContactUs from './components/Home/ContactUs';
import Footer from './components/Home/Footer';
import Hero from './components/Home/Hero'; 
import Review from './components/Home/Review';
import Services from './components/Home/Services';
import Works from './components/Home/Works';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Works />
      <ChooseUs />
      <Review />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
