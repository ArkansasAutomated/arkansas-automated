import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import LiveMarkets from './components/LiveMarkets';
import HowItWorks from './components/HowItWorks';
import ForBusinesses from './components/ForBusinesses';
import Trust from './components/Trust';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let raf = 0;
    function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

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
