import React from 'react';
import dropIcon from '../assets/drop.svg';
import cloudIcon from '../assets/cloud.svg';
import sunFogIcon from '../assets/sun-fog.svg';

const Chip = ({ icon, label, value }: { icon: string, label: string, value: string }) => (
  <div className="flex-1 flex flex-col gap-2 p-4 rounded-[25px] bg-[#1C243F] border border-[#3E4664] shadow-lg">
    <div className="flex items-center gap-2 opacity-60">
      <img src={icon} alt="" className="w-4 h-4" />
      <span className="text-[10px] uppercase font-bold tracking-wider text-white">{label}</span>
    </div>
    <span className="text-xl font-bold text-white">{value}</span>
  </div>
);

export const InfoChips = () => {
  return (
    <div className="flex gap-4 px-6 mb-10 overflow-x-auto no-scrollbar">
      <Chip icon={dropIcon} label="Humidité" value="45%" />
      <Chip icon={cloudIcon} label="Ciel dégagé" value="16%" />
      <Chip icon={sunFogIcon} label="Pollution" value="Classe 4" />
    </div>
  );
};
