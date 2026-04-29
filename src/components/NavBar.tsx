import React from 'react';
import homeIcon from '../assets/ydntkwia_Planet - Ring - Outline.svg';
import mapIcon from '../assets/map.svg';
import gamesIcon from '../assets/star.svg';
import searchIcon from '../assets/search.svg';
import profileIcon from '../assets/profile.svg';
import { cn } from '../lib/utils';

const NavItem = ({ icon, label, active = false }: { icon: string, label: string, active?: boolean }) => (
  <button className={cn(
    "flex flex-col items-center justify-center w-[52px] h-[50px] transition-all duration-300",
    active ? "scale-100" : "opacity-40 hover:opacity-100"
  )}>
    <div className={cn(
      "relative flex items-center justify-center",
      active && "after:absolute after:-inset-4 after:bg-indigo-500/20 after:blur-xl after:rounded-full after:z-[-1]"
    )}>
      <img src={icon} alt={label} className={cn("w-[24px] h-[24px]", active ? "filter-indigo" : "invert")} />
    </div>
    {/* Label is not present in some navbar variants but keeping it for now if needed, or remove if exact match required */}
    {/* <span className={cn("text-[10px] font-bold uppercase tracking-[0.15em]", active ? "text-[#DCCCFF]" : "text-white/40")}>{label}</span> */}
  </button>
);

export const NavBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 px-[24px] pb-[40px] pt-4 pointer-events-none">
      <div className="mx-auto w-full h-[64px] bg-[#1C243F]/90 backdrop-blur-2xl border border-white/10 rounded-[32px] px-[20px] flex justify-between items-center shadow-2xl shadow-black/60 pointer-events-auto">
        <NavItem icon={homeIcon} label="Accueil" active />
        <NavItem icon={mapIcon} label="Carte" />
        <NavItem icon={gamesIcon} label="Jeux" />
        <NavItem icon={searchIcon} label="Chercher" />
        <NavItem icon={profileIcon} label="Profil" />
      </div>
    </nav>
  );
};
