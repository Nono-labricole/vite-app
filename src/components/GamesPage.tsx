import React, { useState, useEffect, useCallback } from 'react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  IconRocket, 
  IconAtom2, 
  IconChartBar, 
  IconUsers, 
  IconFlask, 
  IconDatabase, 
  IconArrowRight,
  IconTrophy,
  IconSatellite,
  IconPlanet
} from '@tabler/icons-react';
import { cn } from '../lib/utils';

// Game Constants & Types
type ResourceType = 'stardust' | 'science' | 'reputation';

interface Upgrade {
  id: string;
  name: string;
  description: string;
  cost: number;
  resource: ResourceType;
  effect: () => void;
  unlocked: boolean;
  purchased: boolean;
}

interface Building {
  id: string;
  name: string;
  count: number;
  baseCost: number;
  production: number;
  resource: ResourceType;
  icon: React.ReactNode;
}

export const GamesPage = () => {
  // Game State
  const [stardust, setStardust] = useState(0);
  const [science, setScience] = useState(0);
  const [reputation, setReputation] = useState(0);
  
  const [buildings, setBuildings] = useState<Building[]>([
    { id: 'observatory', name: 'Observatoire Amateur', count: 0, baseCost: 15, production: 0.5, resource: 'science', icon: <IconFlask size={18} /> },
    { id: 'collector', name: 'Collecteur de Poussière', count: 0, baseCost: 10, production: 1, resource: 'stardust', icon: <IconAtom2 size={18} /> },
    { id: 'satellite', name: 'Nano-Satellite', count: 0, baseCost: 100, production: 5, resource: 'science', icon: <IconSatellite size={18} /> },
    { id: 'outpost', name: 'Avant-poste Lunaire', count: 0, baseCost: 500, production: 10, resource: 'reputation', icon: <IconRocket size={18} /> },
  ]);

  // Game Logic: Production Loop
  useEffect(() => {
    const timer = setInterval(() => {
      buildings.forEach(b => {
        if (b.count > 0) {
          const amount = b.count * b.production / 10;
          if (b.resource === 'stardust') setStardust(s => s + amount);
          if (b.resource === 'science') setScience(s => s + amount);
          if (b.resource === 'reputation') setReputation(s => s + amount);
        }
      });
    }, 100);
    return () => clearInterval(timer);
  }, [buildings]);

  const buyBuilding = (id: string) => {
    const building = buildings.find(b => b.id === id);
    if (!building) return;
    
    const cost = Math.floor(building.baseCost * Math.pow(1.15, building.count));
    
    if (stardust >= cost) {
      setStardust(s => s - cost);
      setBuildings(bs => bs.map(b => b.id === id ? { ...b, count: b.count + 1 } : b));
    }
  };

  const manualCollect = () => {
    setStardust(s => s + 1);
  };

  return (
    <div className="flex flex-col relative text-white pb-32 animate-in fade-in duration-500">
      <div className="px-[24px] pt-[22px] flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h1 className="text-[35px] font-bold tracking-tight">Espace Jeux</h1>
          <p className="text-[#DCCCFF] opacity-80 text-[16px]">Gère ton empire galactique et débloque des badges !</p>
        </div>

        {/* Resource Bar */}
        <div className="grid grid-cols-3 gap-3 bg-[#1C243F]/50 backdrop-blur-xl p-4 rounded-[25px] border border-white/10 sticky top-4 z-20">
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-widest text-[#DCCCFF] opacity-60">Poussière</span>
            <span className="text-sm font-bold">{Math.floor(stardust).toLocaleString()}</span>
          </div>
          <div className="flex flex-col items-center border-x border-white/5">
            <span className="text-[10px] uppercase tracking-widest text-[#DCCCFF] opacity-60">Science</span>
            <span className="text-sm font-bold">{Math.floor(science).toLocaleString()}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-widest text-[#DCCCFF] opacity-60">Réputation</span>
            <span className="text-sm font-bold">{Math.floor(reputation).toLocaleString()}</span>
          </div>
        </div>

        {/* Main Game Area */}
        <div className="flex flex-col gap-6">
          {/* Clicker Area */}
          <div 
            onClick={manualCollect}
            className="h-[200px] w-full rounded-[32px] bg-gradient-to-br from-[#1C243F] to-[#101317] border border-white/10 flex flex-col items-center justify-center gap-4 cursor-pointer active:scale-95 transition-transform relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
            <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-t from-[#8862FE] to-[#544AE8] flex items-center justify-center shadow-[0_0_50px_rgba(136,98,254,0.3)] group-hover:shadow-[0_0_70px_rgba(136,98,254,0.5)] transition-all">
              <IconPlanet size={48} className="text-white animate-pulse" />
            </div>
            <p className="relative z-10 font-bold text-sm tracking-widest uppercase opacity-60">Collecter la poussière</p>
          </div>

          {/* Buildings Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <IconChartBar size={20} className="text-[#DCCCFF]" />
              Infrastructures
            </h2>
            <div className="flex flex-col gap-3">
              {buildings.map((b) => {
                const cost = Math.floor(b.baseCost * Math.pow(1.15, b.count));
                const canAfford = stardust >= cost;
                
                return (
                  <button
                    key={b.id}
                    onClick={() => buyBuilding(b.id)}
                    disabled={!canAfford}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-[25px] border transition-all relative overflow-hidden",
                      canAfford ? "bg-[#1C243F] border-white/20 hover:border-white/40" : "bg-[#1C243F]/30 border-white/5 opacity-50 cursor-not-allowed"
                    )}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                      {b.icon}
                    </div>
                    <div className="flex-1 flex flex-col items-start gap-1">
                      <span className="font-bold text-sm">{b.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-[#DCCCFF] font-medium uppercase tracking-tighter">
                          +{b.production}/{b.resource === 'stardust' ? 's' : b.resource === 'science' ? 'sc' : 'rep'}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/40">{b.count} possédés</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className={cn("font-bold text-sm", canAfford ? "text-white" : "text-red-400")}>
                        {cost} 
                      </span>
                      <span className="text-[9px] uppercase opacity-40">Poussière</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Progress / Milestones (Paperclip inspiration) */}
          <div className="bg-[#582FEF]/10 border border-[#582FEF]/30 rounded-[32px] p-6 flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#DCCCFF]">Objectif Actuel</span>
                <h3 className="font-bold">Expansion Coloniale</h3>
              </div>
              <span className="text-xs font-medium">{Math.min(100, Math.floor((reputation / 1000) * 100))}%</span>
            </div>
            <Progress value={Math.min(100, (reputation / 1000) * 100)} className="h-2 bg-white/10" />
            <p className="text-xs text-white/50 italic leading-relaxed">
              "L'humanité doit devenir une espèce multi-planétaire pour assurer sa survie à long terme."
            </p>
          </div>
        </div>

        {/* Existing Games (The ones from Figma) */}
        <div className="flex flex-col gap-6 mt-8">
           <h2 className="text-lg font-bold flex items-center gap-2">
            <IconTrophy size={20} className="text-[#DCCCFF]" />
            Défis de l'Académie
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
             {/* Game 1: Constellations */}
             <div className="bg-[#1C243F] border border-white/10 rounded-[25px] p-4 flex flex-col gap-4 group cursor-pointer hover:border-[#8862FE]/50 transition-all">
                <div className="aspect-square rounded-2xl bg-slate-800 overflow-hidden relative">
                   <img src="https://images.unsplash.com/photo-1506318137071-a8e063b4b519?q=80&w=200&h=200&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Constellations" />
                   <div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay" />
                </div>
                <div>
                   <h3 className="font-bold text-sm">Tracé Stellaire</h3>
                   <p className="text-[11px] text-white/50 leading-tight mt-1">Relie les étoiles pour former les constellations.</p>
                </div>
                <Button className="w-full h-[32px] rounded-xl bg-white/5 border border-white/10 text-[12px] group-hover:bg-[#8862FE] transition-colors">Lancer</Button>
             </div>

             {/* Game 2: Quiz */}
             <div className="bg-[#1C243F] border border-white/10 rounded-[25px] p-4 flex flex-col gap-4 group cursor-pointer hover:border-[#8862FE]/50 transition-all">
                <div className="aspect-square rounded-2xl bg-slate-800 overflow-hidden relative">
                   <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=200&h=200&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Quiz" />
                   <div className="absolute inset-0 bg-purple-500/20 mix-blend-overlay" />
                </div>
                <div>
                   <h3 className="font-bold text-sm">Maître du Vide</h3>
                   <p className="text-[11px] text-white/50 leading-tight mt-1">Teste tes connaissances sur le système solaire.</p>
                </div>
                <Button className="w-full h-[32px] rounded-xl bg-white/5 border border-white/10 text-[12px] group-hover:bg-[#8862FE] transition-colors">Lancer</Button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
