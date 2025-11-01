import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import BusinessSection from './components/BusinessSection';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import FloatingLogo from './components/FloatingLogo';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}

      <div className="min-h-screen bg-white">
        <Navigation isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />

        <Hero onMenuOpen={() => setIsNavOpen(true)} />

        <NewsSection />

        <BusinessSection />

        <InstagramSection />

        <Footer />

        <FloatingLogo />
      </div>
    </>
  );
}

export default App;
