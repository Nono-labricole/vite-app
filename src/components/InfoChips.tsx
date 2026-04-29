import React from 'react';
import { IconDroplet, IconCloud, IconTelescope } from '@tabler/icons-react';

const Chip = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex-1 flex flex-col gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
    <div className="flex items-center gap-2 text-slate-400">
      <Icon size={14} />
      <span className="text-[10px] uppercase tracking-wider font-bold">{label}</span>
    </div>
    <span className="text-lg font-bold text-white">{value}</span>
  </div>
);

export const InfoChips = () => {
  return (
    <div className="flex gap-3 px-6 mb-10 overflow-x-auto pb-2 no-scrollbar">
      <Chip icon={IconDroplet} label="Humidité" value="45%" />
      <Chip icon={IconCloud} label="Ciel dégagé" value="16%" />
      <Chip icon={IconTelescope} label="Échelle de Bortle" value="Classe 4" />
    </div>
  );
};
