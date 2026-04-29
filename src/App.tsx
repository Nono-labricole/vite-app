import React, { useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { HighlightCard } from './components/HighlightCard';
import { InfoChips } from './components/InfoChips';
import { EventSection } from './components/EventSection';
import { SpotSection } from './components/SpotSection';
import { NavBar } from './components/NavBar';
import { AuthPage } from './components/AuthPage';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { TooltipProvider } from "@/components/ui/tooltip"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <AuthPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <TooltipProvider>
      <SidebarProvider>
        <div className="min-h-screen w-full bg-[#101317] text-white font-sans selection:bg-indigo-500/30 relative flex">
          {/* Desktop Sidebar (hidden on mobile by shadcn component logic usually, or we wrap it) */}
          <div className="hidden lg:block">
            <AppSidebar />
          </div>

          <div className="flex-1 flex flex-col min-h-screen relative overflow-hidden">
            {/* Background Decorative Blobs from Figma (Global) */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[37px] left-[76px] w-[289px] h-[261px] bg-indigo-600/10 rounded-full blur-[120px]" />
              <div className="absolute top-[1200px] left-[137px] w-[289px] h-[261px] bg-purple-600/10 rounded-full blur-[150px]" />
              <div className="absolute top-[1762px] left-[32px] w-[351px] h-[446px] bg-indigo-500/5 rounded-full blur-[100px]" />
            </div>

            {/* Mobile View: Centered container */}
            <main className="lg:hidden relative z-10 max-w-[390px] mx-auto min-h-screen bg-[#101317]/20 backdrop-blur-[2px] pb-[100px]">
              <Header />
              <SearchBar />
              <HighlightCard />
              <InfoChips />
              <EventSection />
              <SpotSection />
              <NavBar />
            </main>

            {/* Desktop View: Dashboard layout */}
            <main className="hidden lg:flex flex-col relative z-10 w-full max-w-7xl mx-auto p-10 gap-10 overflow-y-auto h-screen no-scrollbar">
              <div className="flex justify-between items-start">
                <Header />
                <div className="w-[400px]">
                  <SearchBar />
                </div>
              </div>

              <div className="grid grid-cols-12 gap-8">
                {/* Left Column */}
                <div className="col-span-8 flex flex-col gap-8">
                  <HighlightCard />
                  <EventSection />
                  <SpotSection />
                </div>

                {/* Right Column / Widgets */}
                <div className="col-span-4 flex flex-col gap-8">
                   <div className="bg-[#1C243F]/50 border border-white/10 rounded-[25px] p-8 backdrop-blur-xl">
                      <h3 className="text-xl font-bold mb-6 text-[#DCCCFF]">Météo Céleste</h3>
                      <div className="flex flex-col gap-4">
                        <InfoChips />
                      </div>
                   </div>
                   
                   <div className="bg-[#1C243F]/50 border border-white/10 rounded-[25px] p-8 backdrop-blur-xl flex-1">
                      <h3 className="text-xl font-bold mb-4 text-[#DCCCFF]">Prochains Passages</h3>
                      <p className="text-white/60 text-sm">Station Spatiale Internationale (ISS) - Demain à 19:42</p>
                      <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/5">
                        <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-2">Conseil du jour</p>
                        <p className="text-sm italic text-white/80">"Privilégiez les zones loin de la pollution lumineuse pour observer la Voie Lactée ce soir."</p>
                      </div>
                   </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
}

export default App;
