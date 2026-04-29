import React, { useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { HighlightCard } from './components/HighlightCard';
import { InfoChips } from './components/InfoChips';
import { EventSection } from './components/EventSection';
import { SpotSection } from './components/SpotSection';
import { NavBar } from './components/NavBar';
import { AuthPage } from './components/AuthPage';
import { ProfilePage } from './components/ProfilePage';
import { GamesPage } from './components/GamesPage';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Button } from './components/ui/button';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  if (!isLoggedIn) {
    return <AuthPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <TooltipProvider>
      <SidebarProvider>
        <div className="min-h-screen w-full bg-[#101317] text-white font-sans selection:bg-indigo-500/30 relative flex">
          {/* Desktop Sidebar */}
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

            {/* Mobile View */}
            <main className="lg:hidden relative z-10 max-w-[390px] mx-auto min-h-screen bg-[#101317]/20 backdrop-blur-[2px] pb-[100px]">
              {activeTab === 'home' && (
                <>
                  <Header />
                  <SearchBar />
                  <HighlightCard />
                  <InfoChips />
                  <EventSection />
                  <SpotSection />
                </>
              )}
              {activeTab === 'games' && (
                <GamesPage />
              )}
              {activeTab === 'profile' && (
                <ProfilePage />
              )}
              <NavBar activeTab={activeTab} onTabChange={setActiveTab} />
            </main>

            {/* Desktop View: Polished Dashboard Layout */}
            <main className="hidden lg:flex flex-col relative z-10 w-full max-w-[1600px] mx-auto p-8 gap-8 overflow-y-auto h-screen no-scrollbar">
              {/* Top Bar */}
              <div className="flex justify-between items-center bg-[#1C243F]/30 backdrop-blur-md p-6 rounded-[32px] border border-white/5">
                <Header />
                <div className="w-[500px] flex gap-4">
                  <div className="flex-1">
                    <SearchBar />
                  </div>
                  <div className="flex gap-2">
                    <Button variant={activeTab === 'home' ? 'default' : 'ghost'} onClick={() => setActiveTab('home')} className="rounded-full">Tableau de bord</Button>
                    <Button variant={activeTab === 'games' ? 'default' : 'ghost'} onClick={() => setActiveTab('games')} className="rounded-full">Jeux</Button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                   <button onClick={() => setActiveTab('profile')} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8862FE] to-[#544AE8] flex items-center justify-center border border-white/20 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=40&h=40&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
                  </button>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-12 gap-8 flex-1">
                {/* Left Side: Dynamic Feed */}
                <div className="col-span-8 flex flex-col gap-8">
                  {activeTab === 'home' ? (
                    <>
                      <div className="bg-[#1C243F]/20 backdrop-blur-sm rounded-[32px] p-2 border border-white/5">
                        <HighlightCard />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-8">
                        <div className="bg-[#1C243F]/20 backdrop-blur-sm rounded-[32px] p-8 border border-white/5">
                          <EventSection />
                        </div>
                        <div className="bg-[#1C243F]/20 backdrop-blur-sm rounded-[32px] p-8 border border-white/5">
                          <h3 className="text-xl font-bold mb-6 text-[#DCCCFF] flex items-center gap-2">
                            <span>✨</span> Recommandations
                          </h3>
                          <SpotSection />
                        </div>
                      </div>
                    </>
                  ) : activeTab === 'games' ? (
                    <div className="bg-[#1C243F]/20 backdrop-blur-sm rounded-[32px] p-8 border border-white/5 h-full">
                      <GamesPage />
                    </div>
                  ) : (
                    <div className="bg-[#1C243F]/20 backdrop-blur-sm rounded-[32px] p-8 border border-white/5 h-full">
                      <ProfilePage />
                    </div>
                  )}
                </div>

                {/* Right Side: Data & Widgets */}
                <div className="col-span-4 flex flex-col gap-8">
                   {/* Real-time Weather Widget */}
                   <div className="bg-gradient-to-br from-[#1C243F]/60 to-[#101317]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl">
                      <div className="flex justify-between items-start mb-8">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">Ciel Actuel</h3>
                          <p className="text-[#DCCCFF] text-sm opacity-80">Nantes, France</p>
                        </div>
                        <div className="px-3 py-1 bg-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-green-500/20">
                          Excellent
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <InfoChips />
                      </div>

                      <div className="mt-8 pt-8 border-t border-white/5">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#DCCCFF] font-bold mb-4">Observation Opti</p>
                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl">
                          <div className="w-12 h-12 rounded-xl bg-[#8862FE]/20 flex items-center justify-center text-2xl">🔭</div>
                          <div>
                            <p className="text-sm font-bold">22:45 - Minuit</p>
                            <p className="text-xs text-white/40">Pic de visibilité Mars</p>
                          </div>
                        </div>
                      </div>
                   </div>
                   
                   {/* Community/News Widget */}
                   <div className="bg-[#1C243F]/30 backdrop-blur-md border border-white/5 rounded-[32px] p-8 flex-1">
                      <h3 className="text-lg font-bold mb-6 text-white">L'Univers en direct</h3>
                      <div className="space-y-6">
                        <div className="flex gap-4 group cursor-pointer">
                          <div className="w-16 h-16 rounded-2xl bg-slate-800 shrink-0 overflow-hidden border border-white/10">
                            <img src="/images/forest.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                          </div>
                          <div>
                            <p className="text-sm font-bold leading-tight mb-1 group-hover:text-[#DCCCFF] transition-colors">Nouvelle nébuleuse découverte par James Webb</p>
                            <p className="text-[10px] text-white/40">Il y a 2 heures • 5 min de lecture</p>
                          </div>
                        </div>
                        <div className="flex gap-4 group cursor-pointer">
                          <div className="w-16 h-16 rounded-2xl bg-slate-800 shrink-0 overflow-hidden border border-white/10">
                            <img src="/images/lake.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                          </div>
                          <div>
                            <p className="text-sm font-bold leading-tight mb-1 group-hover:text-[#DCCCFF] transition-colors">Comment photographier la lune ce soir ?</p>
                            <p className="text-[10px] text-white/40">Il y a 5 heures • Guide Pratique</p>
                          </div>
                        </div>
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
