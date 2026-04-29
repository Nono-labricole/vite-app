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
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">
      {/* Background Decorative Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[150px]" />
      </div>

      <main className="relative z-10 max-w-md mx-auto min-h-screen border-x border-white/5 bg-slate-950/40 backdrop-blur-3xl shadow-2xl">
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
