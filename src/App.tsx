import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import LiveMarkets from './components/LiveMarkets';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import Trust from './components/Trust';
import Footer from './components/Footer';
import QuizModal from './components/QuizModal';

const App: React.FC = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Pause scrolling when modal is open
    if (isQuizOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      lenis.destroy();
    };
  }, [isQuizOpen]);

  const openQuiz = () => setIsQuizOpen(true);
  const closeQuiz = () => setIsQuizOpen(false);

  return (
    <>
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX }}
      />
      <main>
        <Hero onOpenQuiz={openQuiz} />
        <LiveMarkets />
        <ProblemSolution />
        <Features />
        <Trust onOpenQuiz={openQuiz} />
      </main>
      <Footer />
      <QuizModal isOpen={isQuizOpen} onClose={closeQuiz} />
    </>
  );
}

export default App;
