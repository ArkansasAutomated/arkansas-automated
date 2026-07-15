import React from 'react';
import Hero from './components/Hero';
import LiveMarkets from './components/LiveMarkets';
import HowItWorks from './components/HowItWorks';
import ForBusinesses from './components/ForBusinesses';
import Trust from './components/Trust';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <main>
        <Hero />
        <LiveMarkets />
        <HowItWorks />
        <ForBusinesses />
        <Trust />
      </main>
      <Footer />
    </>
  );
};

export default App;
