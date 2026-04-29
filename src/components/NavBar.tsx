import React from 'react';
import { IconHome, IconMap, IconDeviceGamepad2, IconSearch, IconUser } from '@tabler/icons-react';
import { cn } from '../lib/utils';

const NavItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <button className={cn(
    "flex flex-col items-center gap-1 transition-all duration-300",
    active ? "text-indigo-400 scale-110" : "text-slate-500 hover:text-slate-300"
  )}>
    <div className={cn(
      "p-2 rounded-xl transition-all",
      active && "bg-indigo-500/10 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
    )}>
      <Icon size={24} stroke={active ? 2.5 : 1.5} />
    </div>
    <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
  </button>
);

export const NavBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-8 pt-4">
      <div className="mx-auto max-w-md bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 flex justify-between items-center shadow-2xl shadow-black/50">
        <NavItem icon={IconHome} label="Accueil" active />
        <NavItem icon={IconMap} label="Carte" />
        <NavItem icon={IconDeviceGamepad2} label="Jeux" />
        <NavItem icon={IconSearch} label="Chercher" />
        <NavItem icon={IconUser} label="Profil" />
      </div>
    </nav>
  );
};
