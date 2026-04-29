import React from 'react';
import dropIcon from '../assets/drop.svg';
import cloudIcon from '../assets/cloud.svg';
import sunFogIcon from '../assets/sun-fog.svg';

const Chip = ({ icon, label, value, valueSize = "text-[14.93px]" }: { icon: string, label: string, value: string, valueSize?: string }) => (
  <div className="w-[96.187px] h-[95.358px] bg-[#1C243F] border-[0.829px] border-white rounded-[20.73px] flex flex-col items-center justify-center p-[9px] shrink-0">
    <div className="flex flex-col gap-[24px] w-full">
      <div className="flex items-center justify-center gap-[5px] w-full">
        <img src={icon} alt="" className="w-[19.901px] h-[19.901px]" />
        <span className="text-[12px] text-[#DCCCFF] font-light leading-[15px]">{label}</span>
      </div>
      <span className={`${valueSize} font-bold text-white leading-[18px]`}>{value}</span>
    </div>
  </div>
);

export const InfoChips = () => {
  return (
    <div className="flex justify-between px-[24px] mb-[36px] overflow-x-auto no-scrollbar gap-[8px]">
      <Chip icon={dropIcon} label="Humidité" value="45%" />
      <Chip icon={cloudIcon} label="Ciel dégagé" value="16%" />
      <Chip icon={sunFogIcon} label="Échelle de Bortle" value="Classe 4" valueSize="text-[11.58px]" />
    </div>
  );
};
