import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import CongressTheme from './components/congress-theme/CongressTheme';
import Programming from './components/programming/Programming';
import Products from './components/products/Products';
import Footer from './components/footer/Footer';
import Local from './components/local/Local';

function App() {
  return (
    <main className='app'>
      <Header />
      <Hero />
      <CongressTheme />
      <About />
      <Programming />
      <Products />
      <Local />
      <Footer />
    </main>
  );
}

export default App;
