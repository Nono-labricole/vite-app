import React, { useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { HighlightCard } from './components/HighlightCard';
import { InfoChips } from './components/InfoChips';
import { EventSection } from './components/EventSection';
import { SpotSection } from './components/SpotSection';
import { NavBar } from './components/NavBar';
import { AuthPage } from './components/AuthPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <AuthPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#101317] text-white font-sans selection:bg-indigo-500/30 relative overflow-hidden">
      {/* Background Decorative Blobs from Figma */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[37px] left-[76px] w-[289px] h-[261px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[1200px] left-[137px] w-[289px] h-[261px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-[1762px] left-[32px] w-[351px] h-[446px] bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 max-w-[390px] mx-auto min-h-screen bg-[#101317]/20 backdrop-blur-[2px]">
        <Header />
        <SearchBar />
        <HighlightCard />
        <InfoChips />
        <EventSection />
        <SpotSection />
        <NavBar />
      </main>
    </div>
  );
}

export default App;
